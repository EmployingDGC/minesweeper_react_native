import React from 'react';
import { View, Text } from 'react-native';

import { createBoard } from "../../scripts/functions";
import RenderBoard from "../RenderBoard";

// import styles from './styles';

class Field extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <View>
                <RenderBoard
                    board={createBoard(this.props.qtyRow, this.props.qtyColumn, this.props.qtyMines)}
                    qtyRow={this.props.qtyRow}
                    qtyColumn={this.props.qtyColumn}
                    qtyMines={this.props.qtyMines}
                />
            </View>
        )
    };
}

export default Field;
