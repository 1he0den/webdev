def big_diff(arr):
    if len(arr) < 2:
        return 0
    else:
        return max(arr) - min(arr)