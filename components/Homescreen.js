import { View, Text,TextInput,StyleSheet } from 'react-native';
import { Button,Icon } from "@rneui/themed";

import react from 'react';
export function  HomeScreen({navigation}){
    const [text,setText]=react.useState("Hier könnte ihre Werbung stehen")
    return( <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
   
    <TextInput style={styles.input} onChangeText={setText} value={text}></TextInput>
    <Button type="solid" onPress={()=>navigation.navigate('Detail',{inputText:text})} title="Go to the  other Page"><Icon name="east" color="green"></Icon>Go To Details</Button>
  </View>)
  }

  const styles=StyleSheet.create({
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
  })


