import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Header, Input, Button, Gap, Loading } from '../../components'
import { colors, useForm, getData } from '../../utils'
import { Fire } from '../../config'
import ImagePicker from 'react-native-image-picker';
import { ILNullPhoto } from '../../assets'
import { showMessage } from "react-native-flash-message";

const TambahProduk = ({ navigation, route }) => {

    const [user, setUser] = useState({});
    const [imgURI, setURI] = useState();
    const [imgName, setName] = useState();
    const [photo, setPhoto] = useState(ILNullPhoto);
    const [loading, setLoading] = useState(false);

    const getImage = () => {
        ImagePicker.launchImageLibrary({ quality: 0.5, maxWidth: 200, maxHeight: 200 }, response => {
            console.log('response: ', response);
            if (response.didCancel || response.error) {
                showMessage({
                    message: 'Maaf, sepertinya anda tidak jadi memilih foto?',
                    type: 'default',
                    backgroundColor: 'red',
                    color: colors.white
                });
            } else {
                setURI(response.uri);
                setName(response.fileName);
                setPhoto({uri: response.uri});
            }
        });
    }; 

    useEffect(() => {
        getDataUser();
    }, []);
    const getDataUser = () => {
        getData('user').then(res => {
            console.log('user login: ', res);
            setUser(res);
        })
    }

    const [form, setForm] = useForm({
        produkBy: user.uid,
        fullName: user.fullName,
        nomorHp: user.nomorHp,
        alamatLengkap: user.alamatLengkap,
        jenisBesi: '',
        berat: '',
        harga: '',
        pic: ''
    });

    const uploadAndContinue = () => {
        setLoading(true);
        Fire.database()
        .ref('produk/'+user.uid)
        .push({
            produkBy: user.uid,
            fullName: user.fullName,
            nomorHp: user.nomorHp,
            alamatLengkap: user.alamatLengkap,
            jenisBesi: form.jenisBesi,
            berat: form.berat,
            harga: form.harga,
            fotoBesi: imgURI
        })
        .then((data)=>{
            Fire.database()
            .ref('produkPengepul/')
            .push({
                produkBy: user.uid,
                fullName: user.fullName,
                nomorHp: user.nomorHp,
                alamatLengkap: user.alamatLengkap,
                jenisBesi: form.jenisBesi,
                berat: form.berat,
                harga: form.harga,
                fotoBesi: imgURI
            })
            .then((data)=>{
                console.log('produkPengepul ' , data)
                navigation.navigate('MainAppPenjual')
            }).catch((error)=>{
                console.log('error ' , error)
            })

            setLoading(false);
            console.log('data ' , data)
        }).catch((error)=>{
            setLoading(false);
            console.log('error ' , error)
        })
    }

    return (
        <>
            <View style={styles.page}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header title="Unggah Produk" />
                    <View style={styles.content}>
                        <View style={styles.profile}>
                            <TouchableOpacity style={styles.avatarWrapper} onPress={getImage} >
                                <Image source={photo} style={styles.avatar} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Gap height={30} />
                            <Input
                                label="Jenis Besi"
                                value={form.jenisBesi}
                                onChangeText={(value) => setForm('jenisBesi', value)} />
                            <Gap height={8} />

                            <Input
                                label="Estimasi Berat (kg)"
                                value={form.berat}
                                onChangeText={(value) => setForm('berat', value)} />
                            <Gap height={20} />

                            <Input
                                label="Estimasi Harga"
                                value={form.harga}
                                onChangeText={(value) => setForm('harga', value)} />
                            <Gap height={20} />
                        </View>

                        <View>
                            <Button
                                title="Unggah"
                                onPress={uploadAndContinue} />
                            <Gap height={30} />
                        </View>
                    </View>
                </ScrollView>

            </View>
            {loading && <Loading />}
        </>
    )
}

export default TambahProduk

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
        justifyContent: 'center',
        marginBottom: 50,
        marginTop: 50
    },
    avatar: {
        width: 270,
        height: 210,
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


