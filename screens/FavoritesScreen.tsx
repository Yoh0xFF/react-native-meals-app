import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { DrawerNavigatorProps, StackNavigatorProps } from '../App';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { useFavoritesStore } from '../store/zustand/favoritesStore';

type FavoriteScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerNavigatorProps, 'Favorites'>,
  NativeStackScreenProps<StackNavigatorProps>
>;

export default function FavoritesScreen({ navigation }: FavoriteScreenProps) {
  const favoriteMealIds = useFavoritesStore((state) => state.favoriteMealIds);
  const meals = MEALS.filter((x) => favoriteMealIds.includes(x.id));

  const pressHandler = (mealId: string) => {
    navigation.navigate('MealDetailScreen', {
      mealId,
    });
  };

  if (meals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList meals={meals} onPress={pressHandler} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
