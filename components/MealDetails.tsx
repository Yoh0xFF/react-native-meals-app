import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import Meal from '../models/meal';

interface Props {
  meal: Meal;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export default function MealDetails({ meal, style, textStyle }: Props) {
  const { duration, complexity, affordability } = meal;
  return (
    <View style={[styles.details, style ?? {}]}>
      <Text style={[styles.detailItem, textStyle ?? {}]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle ?? {}]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle ?? {}]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
