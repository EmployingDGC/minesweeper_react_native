import React from 'react';
import { View } from 'react-native';

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
                    board={createBoard(this.props.qtyRows, this.props.qtyColumns, this.props.qtyMines)}
                    qtyRows={this.props.qtyRows}
                    qtyColumns={this.props.qtyColumns}
                    qtyMines={this.props.qtyMines}
                />
            </View>
        )
    };
}

export default Field;
