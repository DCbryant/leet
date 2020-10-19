const twoSum = (nums, target) => {
	const map = {} 
	// 以值为key，下标作为value
	if (Array.isArray(nums)) {
		for (let i = 0; i < nums.length; i++) {
			if (map[target - nums[i]] !== undefined) {
				return [map[target - nums[i]], i]
			} else {
				map[nums[i]] = i
			}
		}
	}

	return []
}


const nums = [1, 5, 7, 8, 9, 0]

console.log(twoSum(nums, 9))