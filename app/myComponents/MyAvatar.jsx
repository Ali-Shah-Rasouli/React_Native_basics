import React from "react";
import { View, StyleSheet, Image} from 'react-native';

export default function MyAvatar(){
    return (
        <View>
           <Image source={require('../../assets/images/03.jpg')}  style={styles.avatar} />
        </View>
    )
}

const styles = StyleSheet.create({
avatar : {
    width: 100,
    height: 100,
    borderRadius: 50,
    
}

})