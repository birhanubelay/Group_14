function uniqueItems(arr) {
    const seen = new Set();
    const duplicates = new Set();

for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
        }
    }

    return Array.from(seen).filter(item => !duplicates.has(item)).sort((a,b) => a-b);
}


const arr = [1,2,3,4,189,81,23,45,5,6,12,34,56,76,54,12];
console.log(uniqueItems(arr));