def sum13(arr):
    count = 0
    for i in arr:
        if i != 13:
            count += i
        else:
            break
    return count

print(sum13([1, 2, 2, 1, 13]))