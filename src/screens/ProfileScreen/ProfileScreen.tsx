import React, {useMemo} from 'react';
import FeedGridView from '~/components/FeedGridView';
import ProfileHeader from './ProfileHeader';
import user from '~/assets/data/user.json';
import {getPosts} from '~/utils/posts-formater';
import {IPost} from '~/types/models';

const ProfileScreen = () => {
  const savedPosts: IPost[] = useMemo(() => getPosts(user.posts), []);
  return (
    <FeedGridView posts={savedPosts} listHeaderContainer={ProfileHeader} />
  );
};

export default ProfileScreen;
