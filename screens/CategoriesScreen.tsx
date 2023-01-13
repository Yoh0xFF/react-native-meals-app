import { FlatList, View } from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

interface Props {}

export default function CategoriesScreen({}: Props) {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(x) => x.id}
        renderItem={(x) => <CategoryGridTile category={x.item} />}
        numColumns={2}
      />
    </View>
  );
}
