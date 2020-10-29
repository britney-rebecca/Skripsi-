import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Button, Header, Link, Gap } from '../../components'
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets'
import { colors, storeData } from '../../utils'
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message'
import { color } from 'react-native-reanimated'
import { Fire } from '../../config'
import { storage } from 'firebase'

const UploadPhoto = ({navigation, route}) => {
    const {fullName, uid } = route.params;

    const [photoForDB, setPhotoForDB] = useState('');
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photo, setPhoto] = useState(ILNullPhoto);
    const getImage = () => {
        ImagePicker.launchImageLibrary({quality: 0.5, maxWidth: 200, maxHeight: 200}, response => {
        console.log ('response: ', response);
        if(response.didCancel || response.error){
            showMessage({
                message: 'Sepertinya anda tidak jadi memilih foto',
                type: 'default',
                backgroundColor: 'red',
                color: colors.white
            });
        }else{
            const source = {uri: response.uri};

            setPhotoForDB(`data:${response.type};base64, ${response.data}`);
            setPhoto(source);
            setHasPhoto(true);
        }
    });
    };

    const uploadAndContinue = () => {
        Fire.database()
        .ref('userPengepul/' + uid + '/')
        .update({photo: photoForDB});
 
        const data = route.params;
        data.photo = photoForDB; 

        storeData('user', data)

        navigation.replace('MainApp');
    }

    return (
        <View style={styles.page}>
            <Header title="Unggah Foto" />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImage} >
                        <Image source={photo} style={styles.avatar}/>
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto} /> }
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto} /> }
                    </TouchableOpacity> 
                    <Text style={styles.name}> {fullName} </Text>
                </View>
                <View>
                    <Button 
                        disable={!hasPhoto}
                        title="Unggah" 
                        onPress={uploadAndContinue}/>
                    <Gap height={30} />
                    <Link 
                        title="Lewati langkah ini" 
                        align='center' 
                        size={16} 
                        onPress={() => navigation.replace('MainApp')} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 40,
        flex: 1,
        justifyContent: 'space-between'
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    avatar: {
        width: 110,
        height: 110,
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        // borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhoto: {
        position: 'absolute',
        bottom: 6,
        right: 4
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        textAlign: 'center'
    }
})
