function mergeSort(nums) {
  if (nums.length < 2) {
    return nums
  }
  const mid = Math.ceil(nums.length / 2)
  const left = nums.slice(0, mid)
  const right = nums.slice(mid)
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)
  
  return merge(sortedLeft, sortedRight)
}

function merge(first, second) {
  const final = []
  let i = 0
  let j = 0

  while (i < first.length && j < second.length) {
    if (first[i] <= second[j]) {
      final.push(first[i])
      i++
    } else { 
      final.push(second[j])
      j++
    }
  }

  while (i < first.length) {
    final.push(first[i])
    i++
  }

  while (j < second.length) {
    final.push(second[j])
    j++
  }

  return final
}
