import React from 'react';
import { View } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';

// Replace test ID with your AdMob unit id when ready.
const BANNER_ID = Platform.OS === 'ios' ? 'ca-app-pub-3940256099942544/2934735716' : 'ca-app-pub-3940256099942544/6300978111';

export default function AdBanner() {
  return (
    <View style={{ alignItems:'center', marginVertical:10 }}>
      <AdMobBanner
        bannerSize="smartBanner"
        adUnitID={BANNER_ID}
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={(err) => console.log('AdMob error', err)}
      />
    </View>
  );
}
