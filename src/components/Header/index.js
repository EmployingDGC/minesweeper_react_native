import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // umaPropriedade: this.props.umaPropriedade,
        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Text style={[styles.text]}>{this.props.mines}</Text>
            </View>
        )
    };
}

export default Header;
