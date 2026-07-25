class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = "";

        for (const str of strs) {
            result += str.length + "#" + str;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;

        while (i < str.length) {
            // Find the "#" separating length from content
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            // Example: "5#Hello"
            //           ^
            // i         j
            const length = Number(str.substring(i, j));

            // String starts immediately after #
            const start = j + 1;
            const end = start + length;

            result.push(str.substring(start, end));

            // Move to the next encoded string
            i = end;
        }

        return result;
    }
}