import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, View } from 'react-native';

import { NavigatorProps } from '../App';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

type MealsOverviewScreenProps = NativeStackScreenProps<
  NavigatorProps,
  'MealsOverview'
>;

export default function MealsOverviewScreen({
  route,
}: MealsOverviewScreenProps) {
  const { categoryId } = route.params;
  const meals = MEALS.filter((x) => x.categoryIds.includes(categoryId));

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(x) => x.id}
        renderItem={(x) => <MealItem meal={x.item} />}
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
