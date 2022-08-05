import React from 'react';
import {Image, View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import Comment from '~/components/Comment';
import colors from '~/theme/colors';
import {IPost} from '~/types/models';

//no typescript, precisamos especificar o tipo dos parametros dos componentes
interface IFeedPost {
  post: IPost;
}

export default function FeedPost({post}: IFeedPost) {
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
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign name="hearto" size={24} style={styles.icon} />
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
          Liked by <Text style={styles.bold}>aloabao</Text> and{' '}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          {post.description}
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
