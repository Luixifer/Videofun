import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

const { height } = Dimensions.get('window');

export default function VideoCard({ video }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: video.videoUrl }}
        ref={ref}
        style={styles.video}
        resizeMode="cover"
        repeat
        paused={false}
        muted={muted}
      />
      <View style={styles.overlay}>
        <View style={styles.rightButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Text>♥</Text>
            <Text>{video.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text>💬</Text>
            <Text>{video.commentsCount || 0}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.muteButton} onPress={() => setMuted(!muted)}>
          <Text>{muted ? '🔇' : '🔊'}</Text>
        </TouchableOpacity>

        <View style={styles.caption}>
          <Text style={{ color: '#fff' }}>{video.caption}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height, width: '100%' },
  video: { height, width: '100%' },
  overlay: { position: 'absolute', top: 0, left: 0, right:0, bottom:0, justifyContent:'space-between' },
  rightButtons: { position:'absolute', right: 10, bottom: 120, alignItems:'center' },
  actionButton: { marginBottom: 16, alignItems:'center' },
  muteButton: { position: 'absolute', right: 10, top: 60 },
  caption: { position: 'absolute', left: 12, bottom: 20, right: 80 }
});
