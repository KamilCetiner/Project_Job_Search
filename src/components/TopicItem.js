import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import { topicItem } from '../styles';

const TopicItem = ({item}, props) => {
  return (
      <TouchableOpacity
        style={[topicItem.container, { backgroundColor: `#${item.color}` }]}
        onPress={props.onSelect}
      >
          <Text style={topicItem.text}>{item.name}</Text>
      </TouchableOpacity>
    );
};

export {TopicItem};