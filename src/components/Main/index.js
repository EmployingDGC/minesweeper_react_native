import React from 'react';
import { View, Dimensions } from 'react-native';

import CustomButton from "../CustomButton";

import styles from './styles';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

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
        let countAux = [];
        let allCell = [];

        for (let i = 0; i < qtyMines; i++) {
            const random = parseInt(Math.random() * qtyCell);

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
            allCell.push(0);
        }

        for (let i = 0; i < countAux.length; i++) {
            allCell[countAux[i]] += 1;
        }

        // console.log(`\n\n\t${qtyCell}\n\t${allCell}\n\t${posMines}\n\t${countAux}\n\t${posMinesCount}\n\n`);

        for (let i = 0; i < qtyCell; i++) {
            const content = posMines.includes(i) ? "M" : allCell[i];

            const component = (
                <View key={i}>
                    <CustomButton
                        opened
                        mines={parseInt(content)}
                        tittle={content}
                        styleButton={[
                            styles.button,
                            {
                                width: Dimensions.get("window").width / column,
                                height: Dimensions.get("window").width / column,
                            },
                        ]}
                        styleText={[
                            {
                                display: "none",
                                fontSize: (Dimensions.get("window").width / column) / 2,
                                color: "#ffffff",
                            }
                        ]}
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
