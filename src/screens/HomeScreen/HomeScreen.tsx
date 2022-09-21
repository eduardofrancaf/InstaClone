import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import FeedPost from '~/components/FeedPost';
import posts from '~/assets/data/posts.json';

export default function HomeScreen() {
  const [currentViwablePostId, setCurrentViewablePostId] = useState<string | null>(null);
  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 51,
  };
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0) {
        setCurrentViewablePostId(viewableItems[0].item.id);
      }
    }
  );

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <FeedPost post={item} isVisible={currentViwablePostId === item.id} />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
}
