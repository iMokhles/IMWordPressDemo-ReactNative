import { Image } from 'react-native';

import imageCacheHoc from 'react-native-image-cache-hoc';

export const CacheableImage = imageCacheHoc(Image, {
    fileHostWhitelist: ['i.redd.it']
});
