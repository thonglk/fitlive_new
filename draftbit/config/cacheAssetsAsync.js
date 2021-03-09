import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import {
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Entypo,
} from '@expo/vector-icons';

import IMAGES from './Images.js';
import FONTS from './Fonts.js';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default function cacheAssetsAsync() {
  const imageAssets = cacheImages(Object.values(IMAGES));
  const fontAssets = Font.loadAsync(FONTS);
  const iconAssets = cacheFonts([
    FontAwesome.font,
    MaterialIcons.font,
    AntDesign.font,
    Entypo.font,
  ]);

  return Promise.all([...imageAssets, ...iconAssets, fontAssets]);
}
