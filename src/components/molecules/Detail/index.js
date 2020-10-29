import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyPhoto1, DummyUser, IconRemovePhoto } from '../../../assets'
import { colors } from '../../../utils'

const Detail = ({ name, desc, pic}) => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.avatarWrapper} >
                    <Image source={pic} style={styles.avatar} />
                </View>
            </View>
            {/* <View style={styles.borderProfile}>
                <Image source={DummyUser} style={styles.avatar} />
                {isRemove && <IconRemovePhoto style={styles.removePhoto} /> }
            </View> */}
            {name && (
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.usertype}>{desc}</Text>
                </View>
            )}
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 270,
        height: 210,
        // borderRadius: 110 / 2
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
