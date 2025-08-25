import React from "react";
import {View, StyleSheet} from "react-native";

export function Card ({ children, style}: any){
    return <View style = {[styles.card]}>{children}</View>;
}
export function CardContent({ children, style}: any){
    return <View style = {[styles.CardContent]}>{children}</View>;
}
const styles = StyleSheet.create({
    card:{
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    CardContent: {
        padding: 4,
    },
});
