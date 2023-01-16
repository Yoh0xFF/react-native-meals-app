import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { NavigatorProps } from '../App';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';

type MealDetailScreenProps = NativeStackScreenProps<
  NavigatorProps,
  'MealDetailScreen'
>;

export default function MealDetailScreen({
  route,
  navigation,
}: MealDetailScreenProps) {
  const { mealId } = route.params;
  const meal = MEALS.find((x) => x.id === mealId);

  const onPressHandler = () => {
    Alert.alert('Saved to favourites!', `Meal name: ${meal?.title ?? ''}`, [
      {
        style: 'default',
        text: 'Got it!',
      },
    ]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal?.title ?? '',
      headerRight: () => (
        <IconButton icon='star' color='white' onPress={onPressHandler} />
      ),
    });
  }, [meal, navigation]);

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
