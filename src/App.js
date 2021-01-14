import React from 'react';
import { StatusBar, View } from 'react-native';

import styles from './styles';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // umaPropriedade: this.props.umaPropriedade,
        }

        this.properts = {
            mines: 10,
            rows: 10,
            columns: 10,
        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='#000000'
                />
            </View>
        )
    };
}

export default App;
