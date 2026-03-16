def centered_average(arr):
    if len(arr) < 3:
        return 0
    else:
        arr.remove(max(arr))
        arr.remove(min(arr))
        return sum(arr) // len(arr)
    
print(centered_average([-10, -4, -2, -4, -2, 0]))