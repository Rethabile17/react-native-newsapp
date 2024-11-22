import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useNavigate } from "@react-navigation/native";

export default function NewsView({ navigation }) {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const apiKey = "6c4a840c054c4244b61a493273f5b7dd";


  const fetchNew = async (category) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === 'ok') {
        setNews(data.articles || []);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };
  

  useEffect(() => {
   fetchNew(selectedCategory);
  }, [selectedCategory]);

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.title}>Top News</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.filterContainer}>
        {['general', 'sports', 'technology', 'business', 'politics', 'entertainment', 'health', 'science'].map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.filterButton,
              selectedCategory === category && styles.activeButton,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.filterText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {news.length > 0 ? (
          news.map((article, index) => (
          
            <View key={index} style={styles.newsCard}>
              <TouchableOpacity onPress={() => navigation.navigate("ShowNews", { article: article})}>
              {article.urlToImage && (
                <Image source={{ uri: article.urlToImage }} style={styles.newsImage} />
              )}
              <Text style={styles.newsTitle} numberOfLines={2}>
                {article.title}
              </Text>
              <Text style={styles.newsSource}>{article.source.name}</Text>
              </TouchableOpacity>
            </View>
          
        ))
        ) : (
          <Text> No News available</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  filterContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'grey',
    borderRadius: 5,
    height: 40,
  },

  activeButton: {
    backgroundColor: 'blue',
  },

  filterText: {
    color: '#fff',

  },

  scrollContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  newsCard: {
    width: '45%',
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
  },

  newsImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },

  newsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },

  newsSource: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
  },
});
