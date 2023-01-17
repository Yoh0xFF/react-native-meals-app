import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native';

import { StackNavigatorProps } from '../App';
import MealsList from '../components/MealsList/MealsList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

type MealsOverviewScreenProps = NativeStackScreenProps<
  StackNavigatorProps,
  'MealsOverview'
>;

export default function MealsOverviewScreen({
  route,
  navigation,
}: MealsOverviewScreenProps) {
  const { categoryId } = route.params;
  const meals = MEALS.filter((x) => x.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const category = CATEGORIES.find((x) => x.id === categoryId);

    navigation.setOptions({
      title: category?.title ?? '',
    });
  }, [categoryId, navigation]);

  const pressHandler = (mealId: string) => {
    navigation.navigate('MealDetailScreen', {
      mealId,
    });
  };

  return <MealsList meals={meals} onPress={pressHandler} />;
}

const styles = StyleSheet.create({});
