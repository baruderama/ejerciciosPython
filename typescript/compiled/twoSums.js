var SolutionTwoSum = /** @class */ (function () {
    function SolutionTwoSum() {
    }
    SolutionTwoSum.twoSum = function (nums, target) {
        var map = {};
        var diff = 0;
        for (var i = 0; i < nums.length; i++) {
            var n = nums[i];
            diff = target - n;
            if (diff in map) {
                return [map[diff], i];
            }
            map[n] = i;
        }
        return [0, 0];
    };
    ;
    return SolutionTwoSum;
}());
;
// Example usage:
var solution2 = new SolutionTwoSum();
console.log(SolutionTwoSum.twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
