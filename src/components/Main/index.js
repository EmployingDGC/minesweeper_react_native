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

    createCell = (qty) => {
        const listComponents = [];
        
        let posMines = [];

        for (let i = 0; i < this.props.mines; i++) {
            const random = parseInt(Math.random() * qty + 1);

            if (posMines.includes(random)) {
                i -= 1;
                continue;
            }

            posMines.push(random);
        }

        for (let i = 0; i < qty; i++) {
            let value = "";

            if (posMines.includes(i)) {
                value = "M";
            }

            const component = (
                <View>
                    <CustomButton
                        tittle={value}
                        styleButton={[
                            styles.button,
                            {
                                width: Dimensions.get("window").width / this.props.row,
                                height: Dimensions.get("window").width / this.props.row,
                            },
                        ]}
                        styleText={[
                            styles.text,
                            {
                                display: "flex",
                                fontSize: (Dimensions.get("window").width / this.props.row) / 2,
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
                {this.createCell(this.props.row * this.props.column)}
            </View>
        )
    };
}

export default Main;
