const threeSum = nums => {
  const result = []

  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    // 跳过重复数字
    if (i && nums[i] === nums[i - 1]) {
      continue
    }

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else {
        result.push([nums[i], nums[left++], nums[right--]])
        while (nums[left] === nums[left - 1]) {
          left++
        }
        while (nums[right] === nums[right + 1]) {
          right--
        }
      }
    }
  }
  return result
}

const nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))