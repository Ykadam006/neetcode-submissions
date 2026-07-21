class Solution {
  /**
   * @param nums - array of integers
   * @param k - number of most frequent elements to return
   * @return the k most frequent elements
   */
  topKFrequent(nums: number[], k: number): number[] {
    const countMap = new Map<number, number>();

    // Step 1: count frequency of each number
    for (const num of nums) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Step 2: create buckets indexed by frequency (0 to nums.length)
    const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);

    for (const [num, count] of countMap) {
      buckets[count].push(num);
    }

    // Step 3: walk buckets from highest frequency to lowest, collecting k numbers
    const result: number[] = [];
    for (let freq = buckets.length - 1; freq >= 1 && result.length < k; freq--) {
      for (const num of buckets[freq]) {
        result.push(num);
        if (result.length === k) break;
      }
    }

    return result;
  }
}