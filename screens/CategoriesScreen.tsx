import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, View } from 'react-native';

import { NavigatorProps } from '../App';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

type CategoriesScreenProps = NativeStackScreenProps<
  NavigatorProps,
  'MealsCategories'
>;

export default function CategoriesScreen({
  navigation,
}: CategoriesScreenProps) {
  const pressHandler = (categoryId: string) => {
    navigation.navigate('MealsOverview', {
      categoryId,
    });
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(x) => x.id}
        renderItem={(x) => (
          <CategoryGridTile category={x.item} onPress={pressHandler} />
        )}
        numColumns={2}
      />
    </View>
  );
}
