class Solution {
    static twoSum(nums, target) {
        const map = {};
        let diff = 0;
        // This is more of a mathematical problem because we need to subtract the target
        // from every number in the array and store it in the map. If the difference is in the map,
        // we will return the index of that value by searching with the key and the actual index of
        // the array i.
        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            diff = target - n;
            if (diff in map) {
                return [map[diff], i];
            }
            map[n] = i;
        }
    }
}

// Example usage:
const solution = new Solution();
console.log(Solution.twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]