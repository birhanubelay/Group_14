class PageTracker {
   private val pageCounts = mutableMapOf<String, Int>()

   fun accessPage(pageUrl: String) {
       pageCounts[pageUrl] = pageCounts.getOrDefault(pageUrl, 0) + 1
    }

   fun getTop5Pages(): List<Pair<String, Int>> {
       return pageCounts.entries
           .sortedByDescending { it.value }
           .take(5)
           .map { it.key to it.value }
   }
}
fun main() {
   val tracker = PageTracker()
   tracker.accessPage("home")
   tracker.accessPage("about")
   tracker.accessPage("home")
   tracker.accessPage("contact")
   tracker.accessPage("about")
   tracker.accessPage("home")

   println(tracker.getTop5Pages())
}
