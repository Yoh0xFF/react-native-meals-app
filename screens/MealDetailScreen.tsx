import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { StackNavigatorProps } from '../App';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { useFavoritesStore } from '../store/zustand/favoritesStore';

type MealDetailScreenProps = NativeStackScreenProps<
  StackNavigatorProps,
  'MealDetailScreen'
>;

export default function MealDetailScreen({
  route,
  navigation,
}: MealDetailScreenProps) {
  const favoriteMealIds = useFavoritesStore((state) => state.favoriteMealIds);
  const addFavorites = useFavoritesStore((state) => state.addFavorites);
  const remFavorites = useFavoritesStore((state) => state.remFavorites);

  const { mealId } = route.params;
  const meal = MEALS.find((x) => x.id === mealId);
  const isFavorite = favoriteMealIds.includes(mealId);

  const onPressHandler = () => {
    if (!favoriteMealIds.includes(mealId)) {
      addFavorites(mealId);
    } else {
      remFavorites(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal?.title ?? '',
      headerRight: () => (
        <IconButton
          icon={isFavorite ? 'star' : 'star-outline'}
          color='white'
          onPress={onPressHandler}
        />
      ),
    });
  }, [meal, isFavorite, onPressHandler, navigation]);

  if (meal == null) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>

      <MealDetails textStyle={styles.detailText} meal={meal} />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
    fontSize: 14,
  },
  listOuterContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  listContainer: {
    width: '80%',
  },
});
