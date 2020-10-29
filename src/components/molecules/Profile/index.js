import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyUser, IconRemovePhoto } from '../../../assets'
import { colors } from '../../../utils'

const Profile = ({ name, desc, isRemove, photo}) => {
    return (
        <View style={styles.container}>
            <View style={styles.Profile}>
                 <View style={styles.avatarWrapper} >
                    <Image source={photo} style={styles.avatar} />
                </View>
            </View>
            {name && (
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.usertype}>{desc}</Text>
                </View>
            )}
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2
    },
    borderProfile: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 20,
        color: colors.text.primary,
        marginTop: 16,
        textAlign: 'center'
    },
    usertype: {
        fontSize: 16,
        color: colors.text.secondary,
        marginTop: 2,
        textAlign: 'center'
    },
    removePhoto: {
        position: 'absolute',
        right: 8,
        bottom: 8
    }
})