def cat_dog(str):
    if 'cat' in str and 'dog' in str:
        return str.count('cat') == str.count('dog')
    else:
        return False