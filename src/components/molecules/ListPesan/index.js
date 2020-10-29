import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconEdit, IconNext } from '../../../assets'
import { colors } from '../../../utils'

const ListPesan = ({profile, name, desc, type, onPress, icon}) => {
    const Icon = () =>{
        if(icon === 'edit-profile') {
            return <IconEdit />
        }
        return <IconEdit />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {type === 'next' && <IconNext /> }
        </TouchableOpacity>
    )
}

export default ListPesan
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    content: {
        flex: 1,
        marginLeft: 16
    },
    avatar: {
        width: 46,
        height: 46,
        marginRight: 12,
    },
    name: {
        fontSize: 16,
        color: colors.text.primary
    },
    desc: {
        fontSize: 12,
        color: colors.text.secondary
    }
})
