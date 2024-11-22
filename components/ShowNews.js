import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function ShowNews({ navigation, route }) {
  const { article } = route.params;
  console.log(article);

  return (
    <View style={styles.ShowContainer}>
      <Image source={{ uri: article.urlToImage }} style={styles.img} />

      <View style={styles.ContainerMap}>
      <Text style={styles.newsTitle} numberOfLines={2}>
      {article.title}
      </Text>

      <Text style={styles.author} numberOfLines={2}>
        {article.author}
      </Text>

      <Text style={styles.description} numberOfLines={2}>
        {article.description}
      </Text>



      <Text style={styles.publishedAt} numberOfLines={2}>
        {article.publishedAt}
      </Text>

      <Text style={styles.url} numberOfLines={2}>
        {article.url}
      </Text>

      </View>
     

    </View>
  );
}

const styles = StyleSheet.create({
  ShowContainer: {
    flex: 1,
    backgroundColor: "#f9f9f9f9",
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: "100%",
    height: "100%",
    paddingTop: 30,
    
    marginTop: 50
  },
  img: {
    width: "100%",
    height: "30%",
  },
  ContainerMap: {
    flex: 0,
    backgroundColor: "white",
    gap: 20,
   
  },
  newsTitle: {
 color: 'blue',
  },
  author: {
 fontWeight: "bold",
  },
  description: {

  },
  publishedAt: {
fontWeight: 'bold'
  },
  
});
