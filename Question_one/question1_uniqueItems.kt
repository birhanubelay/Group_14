fun <T> findUniqueItems(items: List<T>): List<T> {
    val frequencyMap = mutableMapOf<T, Int>()
    for (item in items) {
        frequencyMap[item] = frequencyMap.getOrDefault(item, 0) + 1
    }
    return items.filter { frequencyMap[it] == 1 }.distinct()
}
fun main(){
    val itemList = listOf("apple", "banana", "banana","apple", "orange", "grape", "banana", "kiwi")
    val uniqueItems = findUniqueItems(itemList)
    println("Unique items: $uniqueItems")
}