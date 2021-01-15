import React from 'react';
import { View, Dimensions } from 'react-native';

import CustomButton from "../CustomButton";

import styles from './styles';

class RenderBoard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            board: this.props.board,
        }
    }

    onPress = (row, column, board = this.state.board) => {
        if (row < 0 || column < 0 || row >= board.length || column >= board[0].length) {
            return;
        }

        const element = board[row][column];

        if (element.opened || element.flagged) {
            return;
        }

        else {
            element.opened = true;
    
            if (element.number == 0 && !element.mined) {
                this.onPress(row - 1, column, board);
                this.onPress(row + 1, column, board);
                this.onPress(row, column + 1, board);
                this.onPress(row, column - 1, board);
            }
        }

        this.setState({
            board,
        });
    }

    renderBoard = (board) => {
        const rows = [];

        for (let row = 0; row < board.length; row++) {
            const columns = [];

            for (let column = 0; column < board[0].length; column++) {
                let styles_text = [];
                let tittle = "";

                if (board[row][column].mined) {
                    tittle = "*";
                }

                else if (board[row][column].number == 1) {
                    tittle = "1";
                    styles_text.push(styles.styleTextNumberOne);
                }

                else if (board[row][column].number == 2) {
                    tittle = "2";
                    styles_text.push(styles.styleTextNumberTwo);
                }

                else if (board[row][column].number == 3) {
                    tittle = "3";
                    styles_text.push(styles.styleTextNumberThree);
                }

                else if (board[row][column].number == 4) {
                    tittle = "4";
                    styles_text.push(styles.styleTextNumberFour);
                }

                else if (board[row][column].number == 5) {
                    tittle = "5";
                    styles_text.push(styles.styleTextNumberFive);
                }

                else if (board[row][column].number == 6) {
                    tittle = "6";
                    styles_text.push(styles.styleTextNumberSix);
                }

                else if (board[row][column].number == 7) {
                    tittle = "7";
                    styles_text.push(styles.styleTextNumberSeven);
                }

                else if (board[row][column].number == 8) {
                    tittle = "8";
                    styles_text.push(styles.styleTextNumberEight);
                }

                const element = (
                    <View key={`${row}${column}`}>
                        <CustomButton
                            tittle={tittle}
                            onPress={() => {
                                this.onPress(row, column);
                            }}
                            styleButton={[
                                styles.styleButton,
                                {
                                    width: parseInt(Dimensions.get("window").width / this.props.qtyColumns),
                                    height: parseInt(Dimensions.get("window").width / this.props.qtyColumns),
                                },
                                this.state.board[row][column].opened ? styles.styleButtonOpened : null,
                            ]}
                            styleText={[
                                styles_text,
                                {
                                    fontSize: parseInt(Dimensions.get("window").width / this.props.qtyColumns) / 1.5,
                                    display: (this.state.board[row][column].opened ? "flex" : "none"),
                                },
                            ]}
                            touchSoundDisabled={false}
                            disabled={this.state.board[row][column].opened}
                        />
                    </View>
                );

                columns.push(element);
            }

            rows.push(columns);
        }

        return rows;
    }

    render() {
        return (
            <View style={[styles.container]}>
                {this.renderBoard(this.props.board)}
            </View>
        )
    };
}

export default RenderBoard;
