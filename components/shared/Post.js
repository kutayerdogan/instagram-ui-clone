import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import posts from '../../data/posts'
import { Dm, Heart, Messenger, Verify, Saved } from '../../Icons'
import moment from 'moment'

function Post({ post }) {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image
                source={{ uri: post.user.avatar }}
                style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
            />
            <Text
                style={{ fontWeight: 'bold' }}
            >{post.user.username}</Text>
            {post.user.isVerified && (
                <Verify
                    size={13}
                />
            )}
        </View>
        <Image
            source={{ uri: post.image }}
            style={styles.image}
        />
        <View style={styles.actions}>
        <View style={styles.leftActions}>
            <View style={styles.likes}>
                <TouchableOpacity>
                    <Heart
                        size={24}
                        fill={"#000"}
                    />                    
                </TouchableOpacity>
                {post.likes > 0 && (
                    <Text
                        style={{ fontSize: 12, fontWeight: 'bold' }}
                    >{post.likes}</Text>
                )}
            </View>
            <View style={styles.likes}>
                <Messenger
                    size={24}
                    fill={"#000"}
                />
                {post.comments > 0 && (
                    <Text
                        style={{ fontSize: 12, fontWeight: 'bold' }}
                    >{post.comments}</Text>
                )}
            </View>
            <Dm
                size={24}
                fill={"#000"}
            />
        </View>
        <View style={styles.rightActions}>
            <Saved 
                size={20}
                fill={"#000"}
                
            />
        </View>
        </View>
        <View style={styles.footer}>
            <Text
                style={{ fontWeight: 'bold' }}
            >
                {post.user.username} {" "}
                <Text
                    style={{fontWeight: 'normal'}}
                    numberOfLines={2}
                >
                    {post.description}
                </Text>
            </Text>
            <Text
                style={{ color: '#8e8e8e', fontSize: 12, marginTop: 3 }}
            >
                {getTimeAgo(post.date)}
            </Text>
        </View>
    </View>
  )
}

const getTimeAgo = (date) => {
    const now = moment();
    const postDate = moment(date);
    const differenceInMinutes = now.diff(postDate, 'minutes');
    const differenceInHours = now.diff(postDate, 'hours');
    const differenceInDays = now.diff(postDate, 'days');
    const differenceInWeeks = now.diff(postDate, 'weeks');
    const differenceInMonths = now.diff(postDate, 'months');
    const differenceInYears = now.diff(postDate, 'years');
  
    if (differenceInMinutes < 60) {
      return `${differenceInMinutes} minutes ago`;
    } else if (differenceInHours < 24) {
      return `${differenceInHours} hours ago`;
    } else if (differenceInDays < 30) {
      return `${differenceInDays} days ago`;
    } else if (differenceInWeeks < 52) {
      return `${differenceInWeeks} weeks ago`;
    } else {
      return `${differenceInYears} years ago`;
    }
  };

export default Post

const styles = StyleSheet.create({
    container: {
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        gap: 2,
    },
    image: {
        width: '100%',
        height: 300,
    },
    likes: {
        flexDirection: 'row',
        gap: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        paddingTop: 5,
        paddingLeft: 10,
    },
    leftActions: {
        flexDirection: 'row',
        gap: 10,
    },
    rightActions: {
        flexDirection: 'row',
        paddingRight: 5,
    },
    footer: {
        padding: 10,
    },
})