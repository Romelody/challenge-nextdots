import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Search from './components/Search';


export default function App() {
  return (
    <View >
      <LinearGradient colors={['#B62785', '#C54539']} style={styles.gradiente} start={{x: 0.9, y: 0}}>
        <View style={styles.container}>
          <Image style={{width: 150, height: 150}} source={{uri: 'https://i.ibb.co/G9Wc4B5/logo.png'}} />
          <Search/>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    width:'100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  gradiente:{
    width:'100%',
    height:'100%',
  },

});
