var twoSum = function(nums, target) {
  const mapper = {}
  for (let i = 0; i < nums.length; i++) {
    if (mapper[target - nums[i]] !== undefined) {
      return [mapper[target - nums[i]], i]
    } else {
      mapper[nums[i]] = i
    }
  }
}
const nums = [3, 2, 4]
const target = 6


console.log(twoSum(nums, target))