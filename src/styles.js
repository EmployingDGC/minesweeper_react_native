import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#cccccc',
        paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
        paddingBottom: getBottomSpace(),
    }
});

export default styles;
