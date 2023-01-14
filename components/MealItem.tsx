import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import Meal from '../models/meal';

interface Props {
  meal: Meal;
}

export default function MealItem({ meal }: Props) {
  const { title, imageUrl } = meal;
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} />
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
