import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        height: 50, flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20,
    },
    topBarIcon: {
        width: 30,
        height: 30,
    }
});

export default styles;