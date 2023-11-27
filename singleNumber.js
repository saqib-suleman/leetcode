/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = {}
    let res;
 
    for(let i = 0; i < nums.length; i++){
        const elem = nums[i];
 
        if(!obj[elem]){
            obj[elem] = 1;
        } else {
            obj[elem]++;
        }
    }
 
    Object.entries(obj).map(([key, value]) => {
        if(value == 1) res = key;
    })
    return res;
 };