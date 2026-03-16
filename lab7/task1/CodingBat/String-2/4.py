def end_other(a, b):
    a = a.lower()
    b = b.lower()
    if b in a and a[-len(b):] == b:
        return True
    else:
        return False