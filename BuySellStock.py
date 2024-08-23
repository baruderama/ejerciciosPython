class Solution(object):
    def maxProfit(prices):
        l,r=0,1
        maxP=0
        while r < len(prices):
            if prices[l]<=prices[r]:
                profit=prices[r]- prices[l]
                maxP=max(maxP,profit)
            else:
                l+=1
                r=l
            r+=1
        return maxP
    
    
        # reverseCont=len(prices)-1
        # cont=0
        # max=0
        # while cont < len(prices):
        #     if cont == reverseCont:
        #         cont+=1
        #         reverseCont=len(prices)-1
        #         continue
            
        #     profit=prices[reverseCont]-prices[cont]
        #     if profit>max:
        #         max=profit 
        #     reverseCont-=1

        # return max 
        """
        :type prices: List[int]
        :rtype: int
        """
        
print(Solution.maxProfit(prices=[1,2,4,2,5,7,2,4,9,0,9]))