import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, View } from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

type Props = {
  MealsOverview: undefined;
};

type ScreenProps = NativeStackScreenProps<Props>;

export default function CategoriesScreen({ navigation }: ScreenProps) {
  const pressHandler = () => {
    navigation.navigate('MealsOverview');
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
