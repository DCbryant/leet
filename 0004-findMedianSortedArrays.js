const findMedianSortedArrays = function(nums1, nums2) {
  let middleNum = null;
  const mergeArr = nums1.concat(nums2)  
  mergeArr.sort((a,b) => {
      return a-b;
  });
  const len = mergeArr.length 
  const index = Math.floor(len / 2);
  if(len % 2 === 0) { //偶数
    middleNum = (mergeArr[index] + mergeArr[index-1]) / 2
  }else{ //奇数
    middleNum = mergeArr[index];
  }
  return middleNum;
};

const arr1 = [1, 4]
const arr2 = [2, 3]

console.log(findMedianSortedArrays(arr1, arr2))