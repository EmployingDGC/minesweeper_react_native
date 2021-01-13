import React from 'react';
import { View, Dimensions } from 'react-native';

import CustomButton from "../CustomButton";

import styles from './styles';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // umaPropriedade: this.props.umaPropriedade,
        }
    }

    removeItemAll = (arr, value) => {
        let i = 0;

        while (i < arr.length) {
            if (arr[i] === value) {
                arr.splice(i, 1);
            }

            else {
                i += 1;
            }
        }
    }

    createCells = (qtyCell) => {
        const column = this.props.column;
        const qtyMines = this.props.mines;
        const listComponents = [];
        
        let posMines = [];
        let posMinesCount = [];
        let countAux = [];
        let allCell = [];

        for (let i = 0; i < qtyMines; i++) {
            const random = parseInt(Math.random() * qtyCell);
            // const random = 5;

            if (posMines.includes(random)) {
                i -= 1;
                continue;
            }

            if (random - column >= 0) {
                if (random - column - 1 >= 0 && !(random % column == 0)) {
                    countAux.push(random - column - 1);
                }

                countAux.push(random - column);
                
                if (!((random + 1) % column == 0)) {
                    countAux.push(random - column + 1);
                }
            }

            if (!(random % column == 0)) {
                countAux.push(random - 1);
            }

            if (!((random + 1) % column == 0)) {
                countAux.push(random + 1);
            }

            if (random + column < qtyCell) {
                if (!(random % column == 0)) {
                    countAux.push(random + column - 1);
                }

                countAux.push(random + column);

                if (!((random + 1) % column == 0)) {
                    countAux.push(random + column + 1);
                }
            }

            posMines.push(random);
        }
        
        for (let i = 0; i < posMines.length; i++) {
            const mine = posMines[i];
            
            this.removeItemAll(countAux, mine);
        }

        for (let i = 0; i < qtyCell; i++) {
            
        }

        console.log(`\n\n\t${qtyCell}\n\t${posMines}\n\t${countAux}\n\t${posMinesCount}\n\n`);

        for (let i = 0; i < qtyCell; i++) {
            let value = "";

            if (posMines.includes(i)) {
                value = "M";
            }

            const component = (
                <View key={i}>
                    <CustomButton
                        tittle={value}
                        styleButton={[
                            styles.button,
                            {
                                width: Dimensions.get("window").width / column,
                                height: Dimensions.get("window").width / column,
                            },
                        ]}
                        styleText={[
                            styles.text,
                            {
                                display: "flex",
                                fontSize: (Dimensions.get("window").width / column) / 2,
                            }
                        ]}
                        onPress={() => {}}
                    />
                </View>
            );
            
            listComponents.push(component);
        }

        return listComponents;
    }

    render() {
        return (
            <View style={[styles.container]}>
                {this.createCells(this.props.row * this.props.column)}
            </View>
        )
    };
}

export default Main;
