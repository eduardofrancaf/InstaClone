import React, {useState} from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import styles from './styles';
import Comment from '~/components/Comment';
import colors from '~/theme/colors';
import {IPost} from '~/types/models';
import DoublePressable from '~/components/DoublePressable';
import Carousel from '~/components/Carousel';
import VideoPlayer from '~/components/VideoPlayer';

//no typescript, precisamos especificar o tipo dos parametros dos componentes
interface IFeedPostProps {
  post: IPost;
  isVisible: boolean;
}

export default function FeedPost({post, isVisible}: IFeedPostProps) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(v => !v);
  };

  const toggleLiked = () => {
    setIsLiked(v => !v);
  };

  const onImageDoublePress = () => {
    setIsLiked(v => !v);
  };

  const content = () => {
    if (post.image) {
      return (
        <DoublePressable onDoublePress={onImageDoublePress}>
          <Image
            style={styles.image}
            source={{
              uri: post.image,
            }}
          />
        </DoublePressable>
      );
    } else if (post.images) {
      return (
        <Carousel
          images={post.images || []}
          onDoublePress={onImageDoublePress}
        />
      );
    } else {
      return (
        <DoublePressable onDoublePress={onImageDoublePress}>
          <VideoPlayer uri={post.video} paused={!isVisible} />
        </DoublePressable>
      );
    }
  };

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.userAvatar}
          source={{
            uri: post.user.image,
          }}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* Content */}
      {content()}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLiked}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={[
                styles.icon,
                {color: isLiked ? colors.accent : colors.black},
              ]}
            />
          </Pressable>
          <Ionicons name="chatbubble-outline" size={24} style={styles.icon} />
          <Feather name="send" size={24} style={styles.icon} />
          <Feather
            name="bookmark"
            size={24}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{marginLeft: 'auto', color: colors.black}}
          />
        </View>
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>aloabao</Text> and
          <Text style={styles.bold}> {post.nofLikes} others</Text>
        </Text>
        <Text numberOfLines={isDescriptionExpanded ? 0 : 2} style={styles.text}>
          <Text style={styles.bold}>{post.user.username} </Text>
          {post.description}
        </Text>
        <Text onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'Less' : 'More'}
        </Text>
        <Text>View all {post.nofComments} comments</Text>
        {post.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
}
