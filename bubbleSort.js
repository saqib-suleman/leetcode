const bubbleSort = (nums) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length - i - 1; j++){
           if(nums[j] > nums[j+1]) {
            const temp = nums[j];
            nums[j] = nums[j+1]
            nums[j+1] = temp; 
           }
        }
    }
}

let arr = [1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 23, 54, 1, 434, 2, 434, 54];
console.log(arr);
bubbleSort(arr);
console.log(arr);