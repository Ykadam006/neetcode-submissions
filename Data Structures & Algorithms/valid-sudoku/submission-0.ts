class Solution {
    /**
     * @param {string[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({ length: 9 }, () => new Set<string>());
        const cols = Array.from({ length: 9 }, () => new Set<string>());
        const boxes = Array.from({ length: 9 }, () => new Set<string>());

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const value = board[row][col];

                // Ignore empty cells
                if (value === ".") {
                    continue;
                }

                // Find which 3x3 box this cell belongs to
                const boxIndex =
                    Math.floor(row / 3) * 3 +
                    Math.floor(col / 3);

                // Duplicate found
                if (
                    rows[row].has(value) ||
                    cols[col].has(value) ||
                    boxes[boxIndex].has(value)
                ) {
                    return false;
                }

                rows[row].add(value);
                cols[col].add(value);
                boxes[boxIndex].add(value);
            }
        }

        return true;
    }
}