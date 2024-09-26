var SolutionStock = /** @class */ (function () {
    function SolutionStock() {
    }
    SolutionStock.maxProfit = function (prices) {
        var l = 0; // Índice izquierdo (día de compra)
        var r = 1; // Índice derecho (día de venta)
        var maxP = 0; // Máxima ganancia
        while (r < prices.length) {
            if (prices[l] <= prices[r]) {
                var profit = prices[r] - prices[l];
                maxP = Math.max(maxP, profit);
            }
            else {
                l = r; // Mover el índice izquierdo si no es rentable
            }
            r++; // Mover el índice derecho
        }
        return maxP;
    };
    return SolutionStock;
}());
console.log(SolutionStock.maxProfit([7, 1, 5, 3, 6, 4]));
