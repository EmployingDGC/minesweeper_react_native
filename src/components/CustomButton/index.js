import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

// import styles from './styles';

class CustomButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayText: this.props.styleText[0].display,
            colorText: this.props.styleText[0].color,

            disableButton: false,
            backgroundColorButton: this.props.styleButton[0].backgroundColor,
            borderColorButton: {
                borderTopColor: this.props.styleButton[0].borderTopColor,
                borderRightColor: this.props.styleButton[0].borderRightColor,
                borderBottomColor: this.props.styleButton[0].borderBottomColor,
                borderLeftColor: this.props.styleButton[0].borderLeftColor,
            },
        }

        console.log(this.state.borderColorButton);
    }

    onPress = (tittle) => {
        const newborderColorButton = {
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: "transparent",
        }

        const newbackgroundColorButton = "#cccccc";
        const newColorText = "#000000";

        this.setState({
            displayText: "flex",
            colorText: newColorText,

            disableButton: true,
            backgroundColorButton: newbackgroundColorButton,
            borderColorButton: newborderColorButton,
        });
    }

    render() {
        return (
            <View>
                <TouchableHighlight
                    style={[
                        this.props.styleButton,
                        {
                            backgroundColor: this.state.backgroundColorButton,
                        },
                        this.state.borderColorButton,
                    ]}
                    onPress={() => this.onPress(this.props.tittle)}
                    activeOpacity={0.7}
                    underlayColor={`${this.props.styleButton.backgroundColor}5f`}
                    touchSoundDisabled={this.props.touchSoundDisabled}
                    disabled={this.state.disableButton}
                >
                    <Text
                        style={[
                            this.props.styleText,
                            {
                                display: this.state.displayText,
                                color: this.state.colorText,
                            }
                        ]}
                    >
                        {(this.props.tittle === 0) ? "" : this.props.tittle}
                    </Text>
                </TouchableHighlight>
            </View>
        )
    };
}

export default CustomButton;
