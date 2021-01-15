import React from 'react';
import { View } from 'react-native';

import RenderBoard from "../RenderBoard";

import styles from './styles';

class Field extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                <RenderBoard
                    board={this.props.board}
                    qtyRows={this.props.qtyRows}
                    qtyColumns={this.props.qtyColumns}
                    qtyMines={this.props.qtyMines}
                    resetBoard={this.props.resetBoard}
                />
            </View>
        )
    };
}

export default Field;
