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

        for (let i = 0; i < qty; i++) {
            const component = (
                <View>
                    <CustomButton
                        tittle="0"
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
