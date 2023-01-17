import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Meal from '../../models/meal';
import MealDetails from '../MealDetails';

interface Props {
  meal: Meal;
  onPress: (mealId: string) => void;
}

export default function MealItem({ meal, onPress }: Props) {
  const { id: mealId, title, imageUrl } = meal;
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc', borderless: true }}
        style={({ pressed }) => (pressed ? styles.mealItemPressed : {})}
        onPress={() => onPress(mealId)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails meal={meal} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  mealItemPressed: {
    opacity: 0.75,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});
