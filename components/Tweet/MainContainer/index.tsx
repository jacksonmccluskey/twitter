import React from "react"
import { View, Text, Image } from "react-native"
import { TweetType } from "../../../types"
import { Entypo } from "@expo/vector-icons"
import Footer from "./Footer"

import styles from "./styles"

export type MainContainerProps = {
    tweet: TweetType
}

const MainContainer = ({ tweet }: MainContainerProps) => (
    <View style={ styles.container }>
        <View style={ styles.tweetHeaderContainer }>
            <Text style={ styles.tweetHeaderName }>{ tweet.user.name }</Text>
            <Text style={ styles.tweetHeaderUserName }>@{ tweet.user.username }</Text>
            <Text style={ styles.tweetHeaderCreatedAt }>15s</Text>
            <Entypo style={ styles.tweetHeaderChevron } name={ "chevron-down" } size={ 16 } />
        </View>
        <View style={ styles.tweetContentContainer }>
            <Text>{ tweet.content }</Text>
            { !!tweet.image && <Image style={ styles.tweetImage } source={{ uri: tweet.image }} /> }
        </View>
        <Footer tweet={ tweet } />
    </View>
)

export default MainContainer