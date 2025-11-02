def partition(a, low, high):
    pivot = a[high]
    i = low
    for j in range(low, high):
        if a[j] <= pivot:
            a[i], a[j] = a[j], a[i]
            i += 1
    a[i], a[high] = a[high], a[i]
    return i

def quick_sort(a, low, high):
    if low < high:
        p = partition(a, low, high)
        quick_sort(a, low, p - 1)
        quick_sort(a, p + 1, high)

if __name__ == "__main__":
    nums = [8, 75, 35, 21, 32, 32, 65, 0]
    quick_sort(nums, 0, len(nums) - 1)
    print(nums)