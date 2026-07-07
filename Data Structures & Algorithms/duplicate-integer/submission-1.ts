class Solution {
  /**
   * @param nums - array of integers to check for duplicates
   * @returns true if any value appears more than once, false otherwise
   */
  hasDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();

    for (const num of nums) {
      if (seen.has(num)) {
        return true; // found a repeat, exit immediately
      }
      seen.add(num);
    }

    return false; // no repeats found
  }
}