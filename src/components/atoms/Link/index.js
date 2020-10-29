import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils'

const Link = ({title, size,align , onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style= {styles.Text(size,align)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    Text : (size,align) => ({
        fontSize:12,
        color: colors.text.secondary,
        textDecorationLine:'underline',
        textAlign : align
    }),

});
