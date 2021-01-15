import React from 'react';
import { StatusBar, View } from 'react-native';

import { createBoard } from "./scripts/functions";

import Header from "./components/Header";
import Field from "./components/Field";

import styles from './styles';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            board: createBoard(20, 15, 50),
            qty_mines: 50,
            qty_rows: 20,
            qty_columns: 15,
        }
    }

    setDifficult = (difficult) => {
        if (difficult <= 0) {
            difficult = 1;
        }
        else if (difficult > 3) {
            difficult = 3
        }

        const qty_cells = this.state.qty_rows * this.state.qty_columns;

        let qty_mines = difficult * qty_cells / 10;

        this.setState({
            qty_mines,
        });
    }

    onChangeBoard = (qty_rows, qty_columns) => {
        this.setState({
            board: createBoard(qty_rows, qty_columns, this.state.qty_mines)
        });
    }

    render() {
        return (
            <View style={[styles.container]}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='#000000'
                />

                <Header
                    qtyMines={this.state.qty_mines}
                    onChangeBoard={this.onChangeBoard}
                />
                
                <Field
                    board={this.state.board}
                    resetBoard={this.onChangeBoard}
                    qtyRows={this.state.qty_rows}
                    qtyColumns={this.state.qty_columns}
                    qtyMines={this.state.qty_mines}
                />
            </View>
        )
    };
}

export default App;
