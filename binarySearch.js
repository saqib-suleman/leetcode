const binarySearch = (nums, target) => {
    let lo = 0;
    let hi = nums.length - 1;

    while(lo <= hi){
        const m = Math.floor(lo + (hi - lo) / 2)
        const v = nums[m];

        if(v === target) return m;
        if(v > target) hi = m - 1;
        if(v < target) lo = m + 1;
              
    }

    return -1;
}

const arr = [2, 4, 4, 5, 7, 10, 13, 15]
const target = 18;

console.log(binarySearch(arr, target))