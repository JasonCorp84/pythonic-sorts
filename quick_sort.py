def quick_sort(nums, low, high):
  if len(nums) <= 1:
    return
  if low < high:
    i = partition(nums, low, high)
    quick_sort(nums, low, i - 1)
    quick_sort(nums, i + 1, high)



def partition(nums, low, high):
  pivot  = nums[high]
  i = low
  for j in range(low, high):
    if nums[j] < pivot:
      nums[i], nums[j] = nums[j], nums[i]
      i += 1
  nums[i], nums[high] = nums[high], nums[i]
  return i
