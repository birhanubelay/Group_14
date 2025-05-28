def unique_items(items):
    seen_once = set()
    seen_multiple = set()
    for item in items:
        if item in seen_once:
            seen_once.remove(item)
            seen_multiple.add(item)
        elif item not in seen_multiple:
            seen_once.add(item)
    return list(seen_once)

print(unique_items([1,2,3,3,4,4,2,3,4]))  