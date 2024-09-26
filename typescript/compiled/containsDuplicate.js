var SolutionDuplicate = /** @class */ (function () {
    function SolutionDuplicate() {
    }
    SolutionDuplicate.prototype.containsDuplicate = function (nums) {
        var mapa = {}; // Tipado explícito del objeto mapa
        for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
            var num = nums_1[_i];
            if (mapa[num]) {
                return true;
            }
            mapa[num] = num.toString(); // Almacena el número como string
        }
        return false;
    };
    return SolutionDuplicate;
}());
var solution = new SolutionDuplicate();
console.log(solution.containsDuplicate([1, 2, 3, 1]));
