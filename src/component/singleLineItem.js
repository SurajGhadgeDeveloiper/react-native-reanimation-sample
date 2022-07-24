import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SingleLineItem = ({data, onPress, styles}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.item}>
        <Text style={styles.title}>{data.item.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleLineItem;
