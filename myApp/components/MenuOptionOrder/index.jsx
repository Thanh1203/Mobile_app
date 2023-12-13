import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaindishesItem from './MaindishesItem';

const ListSelectFoods = ({ arr, checking}) => {
    if (!arr) {
        return null
    }
    let result = []
    arr.forEach(item => {
        result.push(
            <MaindishesItem key={item.key} title={item.value} />
        )
    });
    return result
}

const MenuOrderOption = ({data, checking}) => {
    return (
        <View style={[styles.ctn]}>
            <ListSelectFoods arr={data} checking={checking}/>
        </View>
    )
}

const styles = StyleSheet.create({
    ctn: {
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
        borderColor: "#000",
        
    },
    
})

export default MenuOrderOption