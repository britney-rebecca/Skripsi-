import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { IconBackDark } from '../../../assets'
import { colors } from '../../../utils'
import { Button, Gap } from '../../atoms'

const Header = ({onPress, title}) => {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="ic-back-dark" onPress={onPress}/>
            <Text style={styles.Text}>{title}</Text>
            <Gap width={24}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container : {
        paddingHorizontal:16 , 
        paddingVertical: 30,
        backgroundColor: colors.white, 
        flexDirection:'row',
        alignItems:'center'
    },
    Text : {
        textAlign: 'center',
        flex:1, 
        fontSize:20, 
        color:colors.text.primary, 
    }
})
