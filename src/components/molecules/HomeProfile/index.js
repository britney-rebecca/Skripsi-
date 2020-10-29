import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {  DummyUser, ILNullPhoto} from '../../../assets'
import { UploadPhoto } from '../../../pages'
import { colors, getData } from '../../../utils'
// import { fullName, nomorHp} from '../../../pages'

const HomeProfile = ({onPress}) => {
    const [profile, setProfile] = useState ({
        // photo: ILNullPhoto,
        fullName: '',
        nomorHp: '',
    });

    useEffect(() => {
        getData('user').then(res => {
            console.log('data user: ', res);
            const data = res;
            data.photo = {uri: res.photo}
            setProfile(res);
        }) 
    }, []);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile.photo} style={styles.avatar} />
            <View>
                <Text style={styles.name} >{profile.fullName}</Text>
                <Text style={styles.number} >{profile.nomorHp}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12
    },
    name: {
        fontSize: 16,
        color: colors.text.primary,
        textTransform: 'capitalize'
    },
    number: {
        fontSize: 12,
        color: colors.text.secondary
    }
})
