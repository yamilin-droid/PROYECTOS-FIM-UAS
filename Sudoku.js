(function(){
  'use strict';

  // ---- DOM ----
  const loginView = document.getElementById('login-view');
  const gameView = document.getElementById('game-view');
  const loginBtn = document.getElementById('login-btn');
  const usernameInp = document.getElementById('username');

  const uiUser = document.getElementById('ui-user');
  const uiLevel = document.getElementById('ui-level');
  const uiRound = document.getElementById('ui-round');
  const uiDiff = document.getElementById('ui-diff');
  const uiLives = document.getElementById('ui-lives');
  const uiTime = document.getElementById('ui-time');

  const boardEl = document.getElementById('board');
  const btnReiniciar = document.getElementById('btn-reiniciar');
  const btnSiguiente = document.getElementById('btn-siguiente');
  const toast = document.getElementById('toast');

  const diffSelect = document.getElementById('difficulty');
  const btnEmpezarNivel = document.getElementById('btn-empezar-nivel');

  // Admin panel refs (existirán por HTML)
  const adminPanel = document.getElementById('admin-panel');
  const solutionBoard = document.getElementById('solution-board');

  // ---- CONFIG ----
  const DIFF_RANGES = {
    muy_facil: [36,49],
    facil: [32,35],
    medio: [28,31],
    dificil: [24,27],
    muy_dificil: [17,23],
  };
  const DIFF_LABEL = {
    muy_facil: 'Muy fácil',
    facil: 'Fácil',
    medio: 'Medio',
    dificil: 'Difícil',
    muy_dificil: 'Muy difícil',
  };

  const SUDOKUS_POR_NIVEL = 5;
  const BASE_LIVES = 3;

  // ---- STATE ----
  let state = {
    user: null,
    sessionStart: null,
    sessionElapsedMs: 0,

    difficulty: 'muy_facil',
    sudokuIndex: 0,
    baseLives: BASE_LIVES,
    lives: BASE_LIVES,
    livesLostInLevel: 0,

    isAdmin: false,

    puzzles: [], // {givens:[], solution:[], board:[]}
    current: null,
    selectedIdx: null,

    timerId: null,
    lastTick: 0,
  };

  // ---- UTIL ----
  function showToast(msg, ms=1600){
    toast.textContent = msg;
    toast.classList.remove('hidden');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(()=>toast.classList.add('hidden'), ms);
  }
  function clamp(v,min,max){return Math.max(min,Math.min(max,v));}
  function randInt(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
  function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

  // ---- SUDOKU CORE ----
  const ROWS = [...Array(9).keys()].map(r=>[...Array(9).keys()].map(c=>r*9+c));
  const COLS = [...Array(9).keys()].map(c=>[...Array(9).keys()].map(r=>r*9+c));
  const BOXS = [...Array(9).keys()].map(b=>{
    const br = Math.floor(b/3)*3, bc=(b%3)*3; const cells=[];
    for(let r=0;r<3;r++) for(let c=0;c<3;c++) cells.push((br+r)*9+(bc+c));
    return cells;
  });
  const PEERS = [...Array(81).keys()].map(i=>{
    const r = Math.floor(i/9), c=i%9, b=Math.floor(r/3)*3+Math.floor(c/3);
    const set = new Set([...ROWS[r],...COLS[c],...BOXS[b]]);
    set.delete(i); return [...set];
  });

  function isValid(board, idx, val){
    if(val===0) return true;
    for(const p of PEERS[idx]) if(board[p]===val) return false;
    return true;
  }

  function solve(board){
    const b = board.slice();
    function backtrack(){
      let idx=-1, minOpts=10, opts=null;
      for(let i=0;i<81;i++) if(b[i]===0){
        const o=[]; for(let v=1;v<=9;v++) if(isValid(b,i,v)) o.push(v);
        if(o.length<minOpts){minOpts=o.length; idx=i; opts=o; if(minOpts===0) return false;}
      }
      if(idx===-1) return true;
      for(const v of opts){ b[idx]=v; if(backtrack()) return true; b[idx]=0; }
      return false;
    }
    const ok = backtrack();
    return ok? b : null;
  }

  function countSolutions(board, cap=2){
    let count=0; const b=board.slice();
    function bt(){
      if(count>=cap) return;
      let idx=-1, minOpts=10, opts=null;
      for(let i=0;i<81;i++) if(b[i]===0){
        const o=[]; for(let v=1;v<=9;v++) if(isValid(b,i,v)) o.push(v);
        if(o.length<minOpts){minOpts=o.length; idx=i; opts=o; if(minOpts===0) return;}
      }
      if(idx===-1){count++; return;}
      for(const v of opts){ b[idx]=v; bt(); if(count>=cap) break; b[idx]=0; }
    }
    bt();
    return count;
  }

  function generateFullBoard(){
    const b = Array(81).fill(0);
    const cells = [...Array(81).keys()];
    const digits = [1,2,3,4,5,6,7,8,9];
    function fill(idx=0){
      if(idx===81) return true;
      const i=cells[idx];
      const options = shuffle(digits.slice());
      for(const v of options){
        if(isValid(b,i,v)){ b[i]=v; if(fill(idx+1)) return true; b[i]=0; }
      }
      return false;
    }
    fill(0);
    return b;
  }

  function makePuzzleFromSolution(solution, cluesTarget){
    const puzzle = solution.slice();
    const positions = shuffle([...Array(81).keys()]);
    for(const pos of positions){
      const saved = puzzle[pos];
      puzzle[pos]=0;
      const clueCount = puzzle.filter(x=>x!==0).length;
      if(clueCount<cluesTarget || countSolutions(puzzle,2)!==1){
        puzzle[pos]=saved;
      }
    }
    return puzzle;
  }

  function generatePuzzle(range){
    const full = generateFullBoard();
    const clues = randInt(range[0], range[1]);
    const puzzle = makePuzzleFromSolution(full, clues);
    const sol = solve(puzzle);
    return {givens: puzzle, solution: sol};
  }

  // ---- UI RENDER ----
  function renderBoard(puzzle){
    boardEl.innerHTML = '';
    const frag = document.createDocumentFragment();
    for(let i=0;i<81;i++){
      const r = Math.floor(i/9), c=i%9;
      const div = document.createElement('div');
      div.className = 'cell'
        + (puzzle.givens[i]!==0? ' prefilled':'')
        + ((r===2)?' r3':'')
        + ((r===5)?' r6':'')
        + ((c===2)?' c3':'')
        + ((c===5)?' c6':'');
      div.dataset.idx = String(i);
      div.tabIndex = puzzle.givens[i]===0 ? 0 : -1;
      div.textContent = puzzle.givens[i]!==0 ? String(puzzle.givens[i]) : '';
      frag.appendChild(div);
    }
    boardEl.appendChild(frag);
  }

  function renderSolution(solution){
    if(!state.isAdmin || !solutionBoard) return;
    solutionBoard.innerHTML = '';
    const frag = document.createDocumentFragment();
    for(let i=0;i<81;i++){
      const r=Math.floor(i/9), c=i%9;
      const d=document.createElement('div');
      d.className = 'cell' + ((r===2)?' r3':'') + ((r===5)?' r6':'') + ((c===2)?' c3':'') + ((c===5)?' c6':'');
      d.textContent = String(solution[i]);
      frag.appendChild(d);
    }
    solutionBoard.appendChild(frag);
  }

  function updateHUD(){
    uiUser.textContent = `👤 ${state.user}`;
    uiLevel.textContent = `${state.sudokuIndex+1}`;
    uiRound.textContent = String(state.sudokuIndex+1);
    uiDiff.textContent = DIFF_LABEL[state.difficulty];
    uiLives.textContent = String(state.lives);
  }

  function formatTime(ms){
    const total = Math.floor(ms/1000);
    const m = Math.floor(total/60); const s = total%60;
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }
  function startTimer(){
    stopTimer();
    state.lastTick = performance.now();
    state.timerId = requestAnimationFrame(onTick);
  }
  function stopTimer(){ if(state.timerId){ cancelAnimationFrame(state.timerId); state.timerId=null; } }
  function onTick(now){
    const dt = now - state.lastTick; state.lastTick = now; state.sessionElapsedMs += dt;
    uiTime.textContent = formatTime(state.sessionElapsedMs);
    state.timerId = requestAnimationFrame(onTick);
  }

  // ---- GAME LOOP ----
  function startLevel(){
    state.sudokuIndex = 0;
    state.livesLostInLevel = 0;
    state.baseLives = BASE_LIVES + (loadProgress(state.user).bonusLives || 0);
    state.lives = state.baseLives;

    const range = DIFF_RANGES[state.difficulty];
    state.puzzles = [];
    showToast('Generando sudokus...');
    for(let i=0;i<SUDOKUS_POR_NIVEL;i++){
      const p = generatePuzzle(range);
      state.puzzles.push(p);
    }
    showToast('Nivel iniciado');
    loadSudoku(0);
  }

  function loadSudoku(index){
    state.sudokuIndex = index;
    state.current = JSON.parse(JSON.stringify(state.puzzles[index]));
    state.selectedIdx = null;
    state.current.board = state.current.givens.slice();
    renderBoard(state.current);
    if(state.isAdmin){ renderSolution(state.current.solution); }
    updateHUD();
  }

  function selectCell(idx){
    const prev = boardEl.querySelector('.cell.selected');
    if(prev) prev.classList.remove('selected');
    const el = boardEl.querySelector(`.cell[data-idx="${idx}"]`);
    if(!el) return;
    if(el.classList.contains('prefilled')) return;
    el.classList.add('selected');
    state.selectedIdx = idx;
  }

  function placeValue(val){
    if(state.selectedIdx==null) return;
    const i = state.selectedIdx;
    const cellEl = boardEl.querySelector(`.cell[data-idx="${i}"]`);
    if(!cellEl || cellEl.classList.contains('prefilled')) return;

    if(val===''){
      state.current.board[i]=0; cellEl.textContent=''; cellEl.classList.remove('error');
      return;
    }
    const num = Number(val);
    if(num!==state.current.solution[i]){
      cellEl.classList.add('error');
      state.lives = clamp(state.lives-1, 0, 99);
      updateHUD();
      showToast('Número incorrecto. -1 vida');
      if(state.lives===0){
        showToast('Sin vidas. Pasando al siguiente sudoku...');
        setTimeout(()=>{ nextSudoku(); }, 800);
      }
      return;
    }
    cellEl.classList.remove('error');
    state.current.board[i]=num; cellEl.textContent=String(num);

    const next = findNextEmpty(i+1);
    if(next!==-1) selectCell(next);

    if(isBoardComplete(state.current.board)){
      onSudokuCompleted();
    }
  }

  function isBoardComplete(b){
    for(let i=0;i<81;i++) if(b[i]===0) return false;
    return true;
  }
  function findNextEmpty(from){
    for(let i=from;i<81;i++) if(state.current.board[i]===0 && !boardEl.querySelector(`.cell[data-idx="${i}"]`).classList.contains('prefilled')) return i;
    for(let i=0;i<from;i++) if(state.current.board[i]===0 && !boardEl.querySelector(`.cell[data-idx="${i}"]`).classList.contains('prefilled')) return i;
    return -1;
  }

  function onSudokuCompleted(){
    if(state.lives < state.baseLives) state.livesLostInLevel = 1;
    showToast('¡Sudoku completado!');
    setTimeout(()=>{ nextSudoku(); }, 600);
  }

  function nextSudoku(){
    const i = state.sudokuIndex + 1;
    if(i >= SUDOKUS_POR_NIVEL){
      onLevelCompleted();
      return;
    }
    state.lives = state.baseLives;
    loadSudoku(i);
  }

  function onLevelCompleted(){
    stopTimer();
    let bonusGained = 0;
    if(state.livesLostInLevel===0){
      bonusGained = 1;
      showToast('Nivel completo sin perder vidas. +1 vida para el siguiente nivel');
    } else {
      showToast('Nivel completado');
    }
    const prog = loadProgress(state.user);
    const completed = prog.completed || {};
    const arr = completed[state.difficulty] || [];
    arr.push({ date: Date.now(), timeMs: state.sessionElapsedMs });
    completed[state.difficulty] = arr;
    const bonusLives = (prog.bonusLives||0) + bonusGained;
    saveProgress(state.user, {completed, bonusLives});

    state.baseLives = BASE_LIVES + bonusLives;
    state.lives = state.baseLives;
    startTimer();
    showToast('Progreso guardado');
  }

  function reiniciarSudoku(){
    state.lives = state.baseLives;
    state.current.board = state.current.givens.slice();
    renderBoard(state.current);
    if(state.isAdmin){ renderSolution(state.current.solution); }
    updateHUD();
    showToast('Sudoku reiniciado');
  }

  // ---- PERSISTENCE ----
  function storageKey(user){ return `sudokuxx:${user}`; }
  function loadProgress(user){
    try{
      const raw = localStorage.getItem(storageKey(user));
      if(!raw) return {completed:{}, bonusLives:0};
      const obj = JSON.parse(raw);
      return {completed: obj.completed||{}, bonusLives: obj.bonusLives||0};
    }catch(e){ return {completed:{}, bonusLives:0}; }
  }
  function saveProgress(user, data){
    const obj = loadProgress(user);
    const merged = {
      completed: {...obj.completed, ...(data.completed||{})},
      bonusLives: data.bonusLives!=null? data.bonusLives : obj.bonusLives
    };
    localStorage.setItem(storageKey(user), JSON.stringify(merged));
  }

  // ---- EVENTS ----
  boardEl.addEventListener('click', (e)=>{
    const cell = e.target.closest('.cell'); if(!cell) return;
    const idx = Number(cell.dataset.idx);
    selectCell(idx);
  });
  document.addEventListener('keydown', (e)=>{
    if(gameView.classList.contains('hidden')) return;
    if(state.selectedIdx==null) return;
    if(e.key>='1' && e.key<='9'){ placeValue(e.key); }
    if(e.key==='Backspace' || e.key==='Delete' || e.key==='0' ){ placeValue(''); }
    if(e.key==='ArrowUp'){
      const r=Math.floor(state.selectedIdx/9), c=state.selectedIdx%9;
      let idx=((r+8)%9)*9+c; if(boardEl.querySelector(`.cell[data-idx="${idx}"]`).classList.contains('prefilled')) idx=findNextEmpty(0);
      selectCell(idx);
    }
    if(e.key==='ArrowDown'){
      const r=Math.floor(state.selectedIdx/9), c=state.selectedIdx%9;
      let idx=((r+1)%9)*9+c; if(boardEl.querySelector(`.cell[data-idx="${idx}"]`).classList.contains('prefilled')) idx=findNextEmpty(0);
      selectCell(idx);
    }
    if(e.key==='ArrowLeft'){
      const r=Math.floor(state.selectedIdx/9), c=state.selectedIdx%9;
      let idx=r*9+((c+8)%9); if(boardEl.querySelector(`.cell[data-idx="${idx}"]`).classList.contains('prefilled')) idx=findNextEmpty(0);
      selectCell(idx);
    }
    if(e.key==='ArrowRight'){
      const r=Math.floor(state.selectedIdx/9), c=state.selectedIdx%9;
      let idx=r*9+((c+1)%9); if(boardEl.querySelector(`.cell[data-idx="${idx}"]`).classList.contains('prefilled')) idx=findNextEmpty(0);
      selectCell(idx);
    }
  });
  document.querySelectorAll('.pad-key').forEach(btn=>{
    btn.addEventListener('click', ()=>{ placeValue(btn.dataset.k); });
  });

  btnReiniciar.addEventListener('click', reiniciarSudoku);
  btnSiguiente.addEventListener('click', ()=>{ nextSudoku(); });
  btnEmpezarNivel.addEventListener('click', ()=>{
    if(!state.user){ showToast('Inicia sesión primero'); return; }
    state.difficulty = diffSelect.value;
    startLevel();
    gameView.querySelector('.selectors').classList.add('hidden');
  });

  loginBtn.addEventListener('click', ()=>{
    const name = (usernameInp.value||'').trim();
    if(!name){ showToast('Escribe un nombre de usuario'); return; }
    state.user = name;
    state.isAdmin = name.toLowerCase()==='admin';
    uiUser.textContent = `👤 ${state.user}`;
    loginView.classList.add('hidden');
    gameView.classList.remove('hidden');
    gameView.querySelector('.selectors').classList.remove('hidden');
    if(state.isAdmin && adminPanel){ adminPanel.classList.remove('hidden'); }
    state.sessionStart = Date.now();
    startTimer();
  });

  (function boot(){})();
})();