const newBoard = (rows, columns) => {
    const board = [];

    for (let row = 0; row < rows; row++) {
        board.push([]);
    }

    const newMap = board.map((_, row) => {
        const column = [];
        for (let i = 0; i < columns; i++) {
            const props = {
                row: row,
                column: i,
                number: 0,
                flagged: false,
                opened: false,
                mined: false,
                exploded: false,
            };

            column.push(props);
        }

        return column;
    });

    return newMap;
}

const sortMines = (board, qty_mines) => {
    const max_percent_mines = 30 / 100;

    let i = 0;

    if (qty_mines >= board.length * board[0].length * max_percent_mines) {
        qty_mines = parseInt(board.length * board[0].length * max_percent_mines);
    }

    while (i < qty_mines) {
        const sort_row = parseInt(Math.random() * board.length);
        const sort_column = parseInt(Math.random() * board[0].length);
        
        if (board[sort_row][sort_column].mined) {
            continue;
        }

        board[sort_row][sort_column].mined = true;

        i += 1;
    }
}

const setNumbers = (board) => {
    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[0].length; column++) {
            const around = [
                [row - 1, column - 1],
                [row - 1, column],
                [row - 1, column + 1],
                [row, column - 1],
                [row, column + 1],
                [row + 1, column - 1],
                [row + 1, column],
                [row + 1, column + 1],
            ];

            let number = 0;

            for (let i = 0; i < around.length; i++) {
                const current_row = around[i][0];
                const current_column = around[i][1];
                
                if (current_row < 0 || current_column < 0 || current_row >= board.length || current_column >= board[0].length) {
                    continue;
                }

                if (board[current_row][current_column].mined) {
                    number += 1;
                }
            }

            board[row][column].number += number;
        }
    }
}

const createBoard = (rows = 10, columns = 10, qty_mines = 10) => {
    const board = newBoard(rows, columns);

    sortMines(board, qty_mines);

    setNumbers(board);

    return board;
}

export {
    createBoard,
};
