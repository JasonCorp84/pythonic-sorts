"use strict";

function quick_sort(nums, low, high) {
  if (nums.length <= 1) {
    return nums;
  }
  if (low < high) {
    let i = partition(nums, low, high);
    quick_sort(nums, low, i - 1)
    quick_sort(nums, i + 1, high)
  }
  return nums
}

function partition(nums, low, high) {
  let pivot = nums[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (nums[j] < pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }

  [nums[i], nums[high]] = [nums[high], nums[i]];
  return i
}

console.log("[2, 1, 3] -->",quick_sort([2, 1, 3], 0, 2,));
console.log("[] -->",quick_sort([], 0, 2,));
console.log("[9, 6, 2, 1, 8, 7] -->",quick_sort([9, 6, 2, 1, 8, 7], 0, 5));
console.log("[0, 1, 6, 4, 7, 3, 2, 8, 5, -9] -->", quick_sort([0, 1, 6, 4, 7, 3, 2, 8, 5, -9], 0, 9))
