class PageTracker {
   constructor() {
       this.pageCounts = {};
   };
   accessPage(pageUrl) {
        if (!this.pageCounts[pageUrl]) {
           this.pageCounts[pageUrl] = 0;
        }
        this.pageCounts[pageUrl]++;
    
   };
   getTop5Pages() {
       return Object.entries(this.pageCounts)
           .sort((a, b) => b[1] - a[1])
           .slice(0, 5)
           .map(entry => ({ page: entry[0], count: entry[1] }));
   };
};
const tracker = new PageTracker();
tracker.accessPage('/home');
tracker.accessPage('/about');
tracker.accessPage('/home');
tracker.accessPage('/contact');
tracker.accessPage('/about');
tracker.accessPage('/home');
tracker.accessPage('/delivery');
tracker.accessPage('/signup');
tracker.accessPage('/catalog');
tracker.accessPage('/delivery');
tracker.accessPage('/delivery');
tracker.accessPage('/contact');
tracker.accessPage('/contact');
tracker.accessPage('/contact');
tracker.accessPage('/contact');
tracker.accessPage('/delivery');
console.log(tracker.getTop5Pages());

