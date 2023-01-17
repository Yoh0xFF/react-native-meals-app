import { FlatList, StyleSheet, View } from 'react-native';

import Meal from '../../models/meal';
import MealItem from './MealItem';

interface Props {
  meals: Meal[];
  onPress: (mealId: string) => void;
}

export default function MealsList({ meals, onPress }: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(x) => x.id}
        renderItem={(x) => <MealItem meal={x.item} onPress={onPress} />}
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
