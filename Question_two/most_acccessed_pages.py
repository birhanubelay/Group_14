class PageTracker:
   def __init__(self):
       self.page_counts = {}

   def access_page(self, page_url):
       if page_url not in self.page_counts:
           self.page_counts[page_url] = 0
           self.page_counts[page_url] += 1

   def get_top5_pages(self):
       return sorted(self.page_counts.items(), key=lambda x: x[1], reverse=True)[:5]

