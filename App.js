import { useState } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from "expo-image-picker";

export default function App(){
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log(result);

    if(!result.canceled){
      setImage(result.assets[0].uri);
    }
  }

  return(
    <View style={styles.container}>
      <Button title='カメラロールから画像を選択' onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} /> }
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aliginItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 200,
    height: 200,
    margin: 'auto',
  },
})