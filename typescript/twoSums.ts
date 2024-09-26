class SolutionTwoSum{
    static twoSum(nums: number[], target: number):number[]{
        const map={};
        let diff:number=0;

        for (let i:number=0;i< nums.length;i++){
            const n= nums[i];
            diff = target -n;
            if(diff in map){
                return [map[diff],i];
            }
            map[n]=i;
        }
        return [0,0];
    };
};

// Example usage:
const solution2 = new SolutionTwoSum();
console.log(SolutionTwoSum.twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]