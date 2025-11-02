def radix_sort(arr):
    if not arr:
        return arr
    max_num = max(arr)
    exp = 1
    while max_num // exp > 0:
        count = [0] * 10
        output = [0] * len(arr)

        for n in arr:
            count[(n // exp) % 10] += 1

        for i in range(1, 10):
            count[i] += count[i - 1]

        for i in range(len(arr) - 1, -1, -1):
            d = (arr[i] // exp) % 10
            count[d] -= 1
            output[count[d]] = arr[i]

        arr = output
        exp *= 10

    return arr


if __name__ == "__main__":
    nums = [8, 75, 35, 21, 32, 32, 65, 0]
    sorted_nums = radix_sort(nums)
    print(sorted_nums)