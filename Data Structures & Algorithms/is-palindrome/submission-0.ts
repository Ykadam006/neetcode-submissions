
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            // Skip non-alphanumeric characters
            while (left < right && !this.isAlphaNumeric(s[left])) {
                left++;
            }

            while (left < right && !this.isAlphaNumeric(s[right])) {
                right--;
            }

            // Compare characters ignoring case
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    isAlphaNumeric(char: string): boolean {
        return /^[a-zA-Z0-9]$/.test(char);
    }
}
