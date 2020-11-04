import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'
import { Header, ListPesan, Profile, Gap, Button, Detail } from '../../components'
import { Besi, Money, Alamat, Address } from '../../assets'
import { Fire } from '../../config'
import { colors, getData } from '../../utils'
import { showMessage } from 'react-native-flash-message'
import { ScrollView } from 'react-native-gesture-handler'

const DetailProdukPengepul = ({ navigation, route }) => {
    const { jenisBesi, harga, alamatLengkap, pic, fullName, nomorHp } = route.params;
    const [profile, setProfile] = useState({
        fullName: '',
        nomorHp: '',
    })

    useEffect(() => {
        getData('user').then(res => {
            console.log('data user: ', res);
            const data = res;
            data.photo = { uri: res.photo };
            setProfile(data);
        });

    }, []);

    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header title='Detail' onPress={() => navigation.goBack()} />
                <Gap height={10} />
                {profile.fullName.length > 0 && (
                    <Detail name={fullName} desc={nomorHp} pic={pic} />
                )}

                <Gap height={14} />
                <ListPesan
                    id='1'
                    profile={Besi}
                    name='Jenis Besi'
                    desc={jenisBesi} />
                <ListPesan
                    id='2'
                    profile={Money}
                    name='Estimasi Harga (Rp.)'
                    desc={harga} />
                <ListPesan
                    id='3'
                    profile={Address}
                    name='Alamat'
                    desc={alamatLengkap}
                    onPress={() => { Linking.openURL('https://www.google.com/maps/') }} />
                <Gap height={10} />
                <View style={styles.tombol}>
                    <Button
                        title='Hubungi Penjual'
                        onPress={() => { Linking.openURL('https://wa.me/' + nomorHp) }} />
                </View>
            </ScrollView>

        </View>
    )
}


export default DetailProdukPengepul

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
    tombol: {
        marginLeft: 30,
        marginRight: 30
    }
})
