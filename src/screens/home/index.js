import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {getAnimationList} from './viewModel';
import SingleLineItem from '../../component/singleLineItem';

const Item = ({data, onPress}) => (
  <SingleLineItem data={data} onPress={onPress} styles={styles} />
);

const HomeScreen = props => {
  const animationList = getAnimationList();

  function onItemPress(item) {
    if (item.item.index == 1) {
      props.navigation.navigate('Basic Animation');
    } else {
      //props.navigation.navigate('Screen2');
      alert('Coming soon');
    }
  }

  const renderItem = item => (
    <Item data={item} onPress={() => onItemPress(item)} />
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={animationList}
        renderItem={renderItem}
        keyExtractor={item => item.index}
      />
    </View>
  );
};

export default HomeScreen;
