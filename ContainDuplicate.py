class Solution(object):
    def containsDuplicate(nums):
        mapa={}

        for num in nums:
            if mapa.get(num):
                return True
            mapa[num] = str(num)
        
        return False
    
print(Solution.containsDuplicate(nums=[1,1,1,3,3,4,3,2,4,2]))