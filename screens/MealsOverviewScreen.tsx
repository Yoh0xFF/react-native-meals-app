import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useLayoutEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { NavigatorProps } from '../App';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

type MealsOverviewScreenProps = NativeStackScreenProps<
  NavigatorProps,
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

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(x) => x.id}
        renderItem={(x) => <MealItem meal={x.item} onPress={pressHandler} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
