class SolutionStock {
    static maxProfit(prices: number[]): number {
        let l: number = 0;  // Índice izquierdo (día de compra)
        let r: number = 1;  // Índice derecho (día de venta)
        let maxP: number = 0;  // Máxima ganancia

        while (r < prices.length) {
            if (prices[l] <= prices[r]) {
                const profit: number = prices[r] - prices[l];
                maxP = Math.max(maxP, profit);
            } else {
                l = r;  // Mover el índice izquierdo si no es rentable
            }
            r++;  // Mover el índice derecho
        }

        return maxP;
    }
}

console.log(SolutionStock.maxProfit([7, 1, 5, 3, 6, 4]));