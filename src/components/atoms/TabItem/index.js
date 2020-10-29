import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconBeranda, IconBerandaActive, IconInfo, IconInfoActive, IconProfil, IconProfilActive } from '../../../assets'
import { colors } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if( title === 'Beranda') {
            return active ? <IconBerandaActive /> : <IconBeranda />
        }
        if( title === 'Informasi') {
            return active ? <IconInfoActive /> : <IconInfo />
        }
        if( title === 'Profil') {
            return active ? <IconProfilActive /> : <IconProfil />
        }
        return <IconBeranda />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)} >{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (active) => ({
        fontSize: 10,
        color: active ? colors.text.menuActive : colors.text.secondary,
    })
    
})
