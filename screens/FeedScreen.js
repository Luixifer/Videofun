import React, { useEffect, useState } from 'react';
import { View, FlatList, Dimensions, StyleSheet } from 'react-native';
import VideoCard from '../components/VideoCard';
import { getVideos } from '../services/videosService';

const { height } = Dimensions.get('window');

export default function FeedScreen() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const unsub = getVideos((snap) => {
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVideos(data);
    });
    return () => unsub && unsub();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        pagingEnabled
        renderItem={({ item }) => <VideoCard video={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' }
});
