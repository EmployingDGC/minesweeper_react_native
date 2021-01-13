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

                <Header
                    mines={this.properts.mines}
                />

                <Main
                    row={this.properts.rows}
                    column={this.properts.columns}
                    mines={this.properts.mines}
                />
            </View>
        )
    };
}

export default App;
