class Solution {
  groupAnagrams(strs: string[]): string[][] {
    const groups = new Map<string, string[]>();

    for (const word of strs) {
      const counts = new Array(26).fill(0);
      for (const char of word) {
        counts[char.charCodeAt(0) - 97]++; 
      }
      const key = counts.join(","); 
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key)!.push(word);
    }

    return Array.from(groups.values());
  }
}