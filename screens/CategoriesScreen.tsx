import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, View } from 'react-native';

import { DrawerNavigatorProps, StackNavigatorProps } from '../App';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

type CategoriesScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerNavigatorProps, 'Categories'>,
  NativeStackScreenProps<StackNavigatorProps>
>;

export default function CategoriesScreen({
  route,
  navigation,
}: CategoriesScreenProps) {
  const pressHandler = (categoryId: string) => {
    navigation.navigate('MealsOverview', { categoryId });
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
