/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {IPost} from '~/types/models';

interface IFeedGridViewProps {
  posts: IPost[];
  listHeaderContainer?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}
const FeedGridView = ({posts, listHeaderContainer}: IFeedGridViewProps) => {
  return (
    <FlatList
      ListHeaderComponent={listHeaderContainer}
      data={posts}
      keyExtractor={item => item.id.toString()}
      numColumns={3}
      renderItem={({item, index}) => (
        <View
          style={[
            styles.postItem,
            {marginHorizontal: index % 3 === 1 ? 2 : 0},
          ]}>
          <Image
            style={{flex: 1}}
            source={{uri: item.image || item.images[0]}}
          />
        </View>
      )}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{margin: 1}} />}
    />
  );
};

export default FeedGridView;

const styles = StyleSheet.create({
  postItem: {
    flex: 1,
    aspectRatio: 1,
    maxWidth: `${100 / 3}%`,
  },
});
