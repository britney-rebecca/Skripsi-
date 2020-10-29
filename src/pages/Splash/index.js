import React , {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ILLogo} from '../../assets'
import {Fire} from '../../config'

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if(user){
          console.log('user: ',user);
          navigation.replace('MainApp');
        }
        else {
          navigation.replace('GetStarted');
        }
      })
    })

    return () => unsubscribe();
  }, [navigation]);

    return (
        <View style={styles.page}>
          <ILLogo />
          <Text style={styles.title}>SELAMAT DATANG</Text>
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#D88B01', 
        flex: 1, alignItems: 'center', 
        justifyContent: 'center'
    },
    title: {
        fontSize:18, 
        fontWeight: '600', 
        color: '#000000', 
        marginTop: 20
    },
})

