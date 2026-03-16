def sum67(arr):
    count = 0
    indof6 = 0
    indof7 = 0
    for i in range(len(arr)):
        if arr[i] == 6:
            indof6 = i
        if arr[i] == 7:
            indof7 = i
    
    for i in range(len(arr)):
        if i < indof6 or i > indof7:
            count += arr[i]

    return count

print(sum67([1, 2, 2, 6, 99, 99, 7]))


            