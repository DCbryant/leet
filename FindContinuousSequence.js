function FindContinuousSequence(sum) {
  const result = [];
  const child = [1, 2];
  let small = 1;
  let big = 2;
  let currentSum = 3;
  while (big < sum) {
		while (currentSum < sum && big < sum) {
			child.push(++big)
			currentSum += big
		}

		while (currentSum > sum && small < big) {
			child.shift()
			currentSum -= small++
		}

		if (currentSum === sum && child.length > 1) {
			result.push(child.slice())
			child.push(++big)
			currentSum += big
		}
	}

	return result
}
