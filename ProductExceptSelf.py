def product_except_self(nums):
    length = len(nums)
    
    # Initialize the result array with 1s
    result = [1] * length
    
    # Calculate the prefix products
    prefix = 1
    for i in range(length):
        result[i] = prefix
        prefix *= nums[i]
    print(result)
    # Calculate the postfix products and multiply with the prefix products
    postfix = 1
    for i in range(length - 1, -1, -1):
        
        result[i] *= postfix
        postfix *= nums[i]
    print(result)
    
    return result

# Example usage:
nums = [1, 2, 3, 4]
print(product_except_self(nums)) 