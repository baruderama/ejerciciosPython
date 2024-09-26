
public class ContainsDuplicate {
    public static int maxProfit(int[] prices) {

        Integer l = 0;
        Integer r = 1;
        Integer maxP = 0;

        while (r < prices.length) {
            if (prices[l] <= prices[r]) {
                Integer profit = prices[r] - prices[l];
                if (profit > maxP) {
                    maxP = profit;
                }

            } else {
                l += 1;
                r = l;
            }
            r += 1;

        }
        return maxP;

    }

    public static void main(String[] args) {
        int[] prices = { 7, 1, 5, 3, 6, 4 };

        System.out.println(maxProfit(prices));

    }

}