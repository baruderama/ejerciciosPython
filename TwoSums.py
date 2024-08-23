

class Solution(object):
    
    def two_sum(nums,target):
        mapa={}
        diff=0
        #this is more a mathemathical problem beacuse we need to rest the target
        #to very number in the array and store it in the map, if the diff is in the map
        #we will return de index of that value searching with the key and the actual index of
        #the array i
        for i,n in enumerate(nums):
            diff=target-n
            if diff in mapa:
                return [mapa[diff],i]
            mapa[n]=i
            
            
print(Solution.two_sum([2,1,5,3],4))
                