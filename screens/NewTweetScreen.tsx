import React, { useState } from 'react';
import { 
    StyleSheet, 
    TouchableOpacity,
    SafeAreaView,
    TextInput,
} from 'react-native';
import { 
    View, 
    Text 
} from '../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core"
import Colors from '../constants/Colors';
import ProfilePicture from '../components/ProfilePicture';

export default function NewTweetScreen() {
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate("Root")
    }
    
    const [tweet, setTweet] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const onPostTweet = () => {
        console.warn(`Tweet: ${tweet}`)
    }

    return (
        <SafeAreaView style={ styles.container }>
            <View style={ styles.headerContainer }>
                <AntDesign 
                    onPress={ onPress }
                    name={ "close" } 
                    size={ 30 } 
                    color={ Colors.light.tint } />
                <TouchableOpacity 
                    style={ styles.button } 
                    onPress={ onPostTweet }>
                    <Text style={ styles.buttonText }>
                        Tweet
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={ styles.newTweetContainer }>
                <ProfilePicture image={ "https://picsum.photos/2000" } />
                <View style={ styles.inputContainer }>
                    <TextInput 
                        value={ tweet }
                        onChangeText={ value => setTweet(value) }
                        multiline={ true }
                        numberOfLines={ 3 }
                        style={ styles.tweetInput }
                        placeholder={ "What's up?" }
                    />
                    <TextInput 
                        value={ imageUrl }
                        onChangeText={ value => setImageUrl(value) }
                        placeholder={ "Image url (optional)" }
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingTop: 30,
    backgroundColor: "#fff"
  },
  headerContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 15,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
  },
  newTweetContainer: {
    flexDirection: "row",
    padding: 15,
  },
  inputContainer: {
    marginLeft: 10,
  },
  tweetInput: {
    maxHeight: 300,
  },
});
