import * as React from 'react';
import { StyleSheet, Touchable } from 'react-native';
import { View, Text } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function NewTweetScreen() {

    const onPostTweet = () => {
        console.warn("Post Tweet")
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.headerContainer }>
                <AntDesign name={ "close" } size={ 30 } color={ Colors.light.tint } />
                <TouchableOpacity style={ styles.button } onPress={ onPostTweet }>
                    <Text style={ styles.buttonText }>
                        Tweet
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
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
  }
});
