class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        if (board.length !== 9) {
            return false;
        }

        for (let i = 0; i < board.length; i++) {
            const rowSeen = new Set();
            const colSeen = new Set();


            for (let j = 0; j < board[i].length; j++) {
                const rowVal = board[i][j];

                if (rowVal !== '.') {
                    if (rowSeen.has(rowVal)) {
                        return false;
                    }

                    rowSeen.add(rowVal);
                }

                const colVal = board[j][i];

                if (colVal !== '.') {
                    if (colSeen.has(colVal)) {
                        return false;
                    }

                    colSeen.add(colVal);
                }
            }
        }

        for (let rowGroup = 0; rowGroup < 3; rowGroup++) {
            for (let colGroup = 0; colGroup < 3; colGroup++) {
                const startRow = rowGroup * 3;
                const startCol = colGroup * 3;

                const seen = new Set();


                for (let row = startRow; row <= startRow + 2; row++) {
                    for (let col = startCol; col <= startCol + 2; col++) {
                        const val = board[row][col];

                        if (val !== '.') {
                            if (seen.has(val)) {
                                return false;
                            }

                            seen.add(val);
                        }
                    }
                }
            }
        }


        return true;
    }
}
