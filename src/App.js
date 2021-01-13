import React from 'react';
import { StatusBar, View } from 'react-native';

import Header from "./components/Header";
import Main from "./components/Main";

import styles from './styles';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // umaPropriedade: this.props.umaPropriedade,
        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                <StatusBar barStyle='light-content' backgroundColor='#000000' />

                <Header />
                <Main row={10} column={15} />
            </View>
        )
    };
}

export default App;
