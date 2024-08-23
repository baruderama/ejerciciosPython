

class Interview():
    
    def __init__(self):
        self
        
    def find_addition(nums,target):
        # dic={}
        # diff=0    
        # for i,n in enumerate(nums):
            
        #     if dic.get(diff):
        #         return (dic[diff],n)
        #     diff= target-n
        #     dic[i]=n
        
        try:
            sum=0
            for i,n in enumerate(nums):
                for j,m in enumerate(nums):
                    if i == j:
                        continue
                    sum=n+m
                    if target == sum:
                        return (n,m)
        except Exception as e:
            return e
        
    
    
            
print(Interview.find_addition([1,2,3,1],6))