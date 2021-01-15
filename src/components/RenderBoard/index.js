import { parseSync } from '@babel/core';
import React from 'react';
import { View, Dimensions } from 'react-native';

import CustomButton from "../CustomButton";

import styles from './styles';

class RenderBoard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // umaPropriedade: this.props.umaPropriedade,
        }
    }

    renderBoard = (board) => {
        const rows = [];

        for (let row = 0; row < board.length; row++) {
            const columns = [];

            for (let column = 0; column < board[0].length; column++) {
                const element = (
                    <View key={`${row}${column}`}>
                        <CustomButton
                            tittle="1"
                            onPress={() => {}}
                            styleButton={[
                                styles.styleButton,
                                {
                                    width: parseInt(Dimensions.get("window").width / this.props.qtyColumn),
                                    height: parseInt(Dimensions.get("window").width / this.props.qtyColumn),
                                },
                            ]}
                            styleText={false}
                            touchSoundDisabled={false}
                            disabled={false}
                        />
                    </View>
                );

                columns.push(element);
            }

            rows.push(columns);
        }

            // row: number;
            // column: number;
            // number: number;
            // flagged: boolean;
            // opened: boolean;
            // mined: boolean;
            // exploded: boolean;

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
