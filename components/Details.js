import { View, Text,Image ,StyleSheet} from 'react-native';
import { Button,Icon} from "@rneui/themed";
import axios from 'axios';
import React from 'react';

export  function DetailScreen({navigation,route}){
  const inputText=route.params;
    const [id,setId]=React.useState("1171032883")
    const [pic,setPic]=React.useState("https://images-webcams.windy.com/83/1171032883/current/preview/1171032883.jpg")
    const [nocam,setNocam]=React.useState("")
  const config={headers:{
    "x-windy-key":"CdLvjlon0eBvopzNtwQXvwEsgBoHwOjW"
  }}

  const url=`https://api.windy.com/api/webcams/v2/list/category=${inputText.inputText}`

   axios.get(url,config)
  .then(res=>setId(res.data.result.webcams[0].id))
  .catch(error=>setNocam(error))
  const url2=`https://api.windy.com/api/webcams/v2/list/webcam=${id}?show=webcams:image`
   axios.get(url2,config)
  .then(res=>setPic(res.data.result.webcams[0].image.current.preview))
if(nocam===""){
  
  return( <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
  <Button type="solid"  onPress={()=>navigation.navigate('Home')} title="Go Back"><Icon name="home" color="green"></Icon>Go back</Button>
  <Image
          source={{ uri: pic}}
          style={styles.tinyLogo}
         
          
        />
</View>)
}else{
  setNocam("")
  return <Text style={styles.container}>No Webcam found!!</Text>
}
   
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      flex:1,
      alignItems:"center",
      justifyContent:"center"
    },
    tinyLogo: {
      width: 500,
      height: 300,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
  