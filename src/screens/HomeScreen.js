import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome6';
import FonIcon from 'react-native-vector-icons/Fontisto';
import Slider from './DrawerScreens/Slider';
import styles from './../components/Styles';

const HomeScreen = ({navigation}) => {
  const onPressPharmaShop = (userrole) => {navigation.navigate('LoginScreen',{user_role:userrole});};
  const onPress = () => {return true;};

  return (
    <SafeAreaView style={styles.homeContainer}>
     <Slider />
     <View
      style={styles.homeScrollView}>
      
      <View
      style={{
          flexDirection: 'row',
        }}>
      <TouchableOpacity style={styles.homeButtonStyle} onPress={onPress}>
        <Icon name="business" size={30} color="#fff" />
        <Text style={styles.homeButtonTxtStyle}>Pharma Company</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.homeButtonStyle} onPress={()=>{onPressPharmaShop(3)}}>
        <FaIcon name="shop" size={30} color="#fff" />
        <Text style={styles.homeButtonTxtStyle}>Pharma Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.homeButtonStyle,{marginRight: 0}]} onPress={onPress}>
        <FonIcon name="bed-patient" size={30} color="#fff" />
        <Text style={styles.homeButtonTxtStyle}>Patient</Text>
      </TouchableOpacity>
      </View>
      <View
      style={{
          flexDirection: 'row'
        }}>
      <TouchableOpacity style={styles.homeButtonStyle} onPress={onPress}>
        <FonIcon name="hospital" size={30} color="#fff" />
        <Text style={styles.homeButtonTxtStyle}>Hospitals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.homeButtonStyle} onPress={onPress}>
        <FonIcon name="doctor" size={30} color="#fff" />
        <Text style={styles.homeButtonTxtStyle}>Doctor's</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.homeButtonStyle,{marginRight: 0}]} onPress={onPress}>
        <FonIcon name="nurse" size={30} color="#fff" />
        <Text style={styles.homeButtonTxtStyle}>Nurse</Text>
      </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
