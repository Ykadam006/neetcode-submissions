
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums);
        let longest = 0;

        for (const num of set) {
            // Check if this is the start of a sequence
            if (!set.has(num - 1)) {
                let current = num;
                let count = 1;

                while (set.has(current + 1)) {
                    current++;
                    count++;
                }

                longest = Math.max(longest, count);
            }
        }

        return longest;
    }
}
