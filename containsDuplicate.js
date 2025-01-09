function hasDuplicate() {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    } else {
      map.set(nums[i], nums[i]);
    }
  }
  return false;
}
