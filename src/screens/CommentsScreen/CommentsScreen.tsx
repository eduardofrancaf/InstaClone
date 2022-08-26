/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {FlatList, Text, View, ViewToken} from 'react-native';
import FeedPost from '~/components/FeedPost';
import comments from '~/assets/data/comments.json';
import Comment from '~/components/Comment';
import {IComment} from '~/types/models';
import CommentInput from './CommentInput';

const renderItem = ({item}: {item: IComment}) => {
  return <Comment comment={item} includeDetails />;
};

export default function CommentsScreen() {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={comments}
        renderItem={renderItem}
        contentContainerStyle={{padding: 10}}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
      />
      <CommentInput />
    </View>
  );
}
