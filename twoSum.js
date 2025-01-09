// brute force O(n2)
console.time("brute");
function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}
console.timeEnd("brute");

// O(n)
console.time("optim");
function twoSumOptim(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (map.has(difference)) return [map.get(difference), i];
    map.set(nums[i], i);
  }
}
console.timeEnd("optim");

console.log(twoSumBrute([3, 4, 5, 6], 7));
console.log(twoSumOptim([3, 4, 5, 6], 7));
