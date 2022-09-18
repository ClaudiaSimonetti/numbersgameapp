import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#457b9d',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    title:{
        fontSize: 20,
        color: '#fafafa',
        fontWeight: 'bold',
    }
})

function Header({title}){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>

        </View>
    )
}

export default Header;