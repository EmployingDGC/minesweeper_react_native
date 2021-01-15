import React from 'react';
import { StatusBar, View } from 'react-native';

import Header from "./components/Header";
import Field from "./components/Field";

import styles from './styles';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            qty_mines: 10,
            qty_rows: 10,
            qty_columns: 10,
        }
    }

    onChangeMines = (qty_mines) => {
        this.setState({
            qty_mines,
        });
    }

    onChangeBoard = (qty_rows, qty_columns) => {
        this.setState({
            qty_rows,
            qty_columns,
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
                    onChangeMines={this.onChangeMines}
                    onChangeBoard={this.onChangeBoard}
                />
                
                <Field
                    qtyRows={this.state.qty_rows}
                    qtyColumns={this.state.qty_columns}
                    qtyMines={this.state.qty_mines}
                />
            </View>
        )
    };
}

export default App;
