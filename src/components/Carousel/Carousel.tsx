/* eslint-disable react-native/no-inline-styles */
import {View, FlatList, Image, Dimensions, ViewToken} from 'react-native';
import React, {useRef, useState} from 'react';
import colors from '~/theme/colors';
import DoublePressable from '~/components/DoublePressable';

interface ICarouselProps {
  images: string[];
  onDoublePress?: () => void;
}
export default function Carousel({
  images,
  onDoublePress = () => {},
}: ICarouselProps) {
  const [viewableImage, setViewableImage] = useState(0);
  const renderItem = ({item}: {item: string}) => {
    return (
      <DoublePressable onDoublePress={onDoublePress}>
        <Image
          style={{
            width: Dimensions.get('window').width,
            aspectRatio: 1 / 1,
          }}
          source={{
            uri: item,
          }}
        />
      </DoublePressable>
    );
  };

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setViewableImage(viewableItems[0].index || 0);
      }
    },
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 15,
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              marginHorizontal: 5,
              borderRadius: 5,
              backgroundColor:
                viewableImage === index ? colors.primary : colors.white,
            }}
          />
        ))}
      </View>
    </View>
  );
}
