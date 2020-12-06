import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const name ="My Name is Alaa";
    return( 
    <View>
     <Text style={styles.textStyle}>This is the Components Screen</Text>
    <Text style={styles.nameStyle}>{name}</Text>
    </View>
    );

};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;