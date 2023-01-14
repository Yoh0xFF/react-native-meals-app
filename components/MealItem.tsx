import { Text, View } from 'react-native';

import Meal from '../models/meal';

interface Props {
  meal: Meal;
}

export default function MealItem({ meal }: Props) {
  return (
    <View>
      <Text>{meal.title}</Text>
    </View>
  );
}
