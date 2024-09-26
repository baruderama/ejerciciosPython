var Solution = /** @class */ (function () {
    function Solution() {
    }
    Solution.maxSubArray = function (nums) {
        var maxSub = nums[0]; // Tipo explícito de `maxSub`
        var curSum = 0; // Tipo explícito de `curSum`
        for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
            var n = nums_1[_i];
            if (curSum < 0) {
                curSum = 0;
            }
            curSum += n;
            maxSub = Math.max(maxSub, curSum);
        }
        return maxSub;
    };
    return Solution;
}());
console.log(Solution.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
