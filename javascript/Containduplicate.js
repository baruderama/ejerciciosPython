var containsDuplicate = function(nums) {
    const map={}
    for (let i=0;i<nums.length;i++){
        num=nums[i]
        if(map[num]){
            return true;
        }
        map[num]=num.toString()
    }
    return false;
    
    
};

console.log(containsDuplicate([1,2,3,4,4]))

