import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

// import styles from './styles';

class CustomButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // umaPropriedade: this.props.umaPropriedade,
        }
    }

    render() {
        return (
            <View>
                <TouchableHighlight
                    style={this.props.styleButton}
                    onPress={this.props.onPress}
                    activeOpacity={0.7}
                    underlayColor={`${this.props.styleButton.backgroundColor}5f`}
                    touchSoundDisabled={this.props.touchSoundDisabled}
                    disabled={this.props.disabled}
                >
                    <Text style={this.props.styleText}>{this.props.tittle}</Text>
                </TouchableHighlight>
            </View>
        )
    };
}

export default CustomButton;
