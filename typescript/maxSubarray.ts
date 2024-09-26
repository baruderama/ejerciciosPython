class Solution {
    static maxSubArray(nums: number[]): number {
        let maxSub: number = nums[0];  // Tipo explícito de `maxSub`
        let curSum: number = 0;        // Tipo explícito de `curSum`

        for (let n of nums) {
            if (curSum < 0) {
                curSum = 0;
            }
            curSum += n;
            maxSub = Math.max(maxSub, curSum);
        }

        return maxSub;
    }
}

console.log(Solution.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));