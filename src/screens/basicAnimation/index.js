import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from '../home/style';
import {getBasicAnimationList} from '../home/viewModel';
import SingleLineItem from '../../component/singleLineItem';

const Item = ({data, onPress}) => (
  <SingleLineItem data={data} onPress={onPress} styles={styles} />
);

const BasicAnimationScreen = props => {
  const animationList = getBasicAnimationList();

  function onItemPress(item) {
    if (item.item.index == 1) {
      props.navigation.navigate('Opacity Screen');
    } else if (item.item.index == 2) {
      props.navigation.navigate('Scale Screen');
    } else if (item.item.index == 3) {
      props.navigation.navigate('Transform Screen');
    } else if (item.item.index == 4) {
      props.navigation.navigate('PanGesture');
    } else if (item.item.index == 5) {
      props.navigation.navigate('Interpolation');
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

export default BasicAnimationScreen;
