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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Slider from './Slider';
import styles from './../../components/Styles';

const HomeScreen = ({navigation, route}) => {
  const [count, setCount] = useState(0);
  const onPressPharmaProfile = () => {navigation.navigate('UserProfile');};
  const onPress = () => {};
  const onPressExplor = () => {navigation.navigate('ExploreScreen');};
  
  return (
    <SafeAreaView style={styles.innerHomeContainer}>
    <Slider />
     <View
      style={styles.innerHomeScrollView}>
      
      <View
      style={{
          flexDirection: 'row',
        }}>
      <TouchableOpacity style={styles.homeButtonStyle} onPress={onPressExplor}>
        <FaIcon name="cart-shopping" size={30} color="#fff" />
        <Text style={styles.homeButtonTxtStyle}>Total Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.homeButtonStyle} onPress={onPress}>
        <FaIcon name="cart-shopping" size={30} color="#fff" />
        <Text style={styles.homeButtonTxtStyle}>Today's Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.homeButtonStyle,{marginRight: 0}]} onPress={onPress}>
        <FaIcon name="cart-plus" size={30} color="#fff" />
        <Text style={styles.homeButtonTxtStyle}>Create Order</Text>
      </TouchableOpacity>
      </View>
      <View
      style={{
          flexDirection: 'row'
        }}>
      <TouchableOpacity style={styles.homeButtonStyle} onPress={onPress}>
        <AntDesign name="medicinebox" size={30} color="#fff" />
        <Text style={styles.homeButtonTxtStyle}>Medicine's</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.homeButtonStyle,{marginRight: 0}]} onPress={onPress}>
        <Icon name="business" size={30} color="#fff" />
        <Text style={styles.homeButtonTxtStyle}>Manufacturer's</Text>
      </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

