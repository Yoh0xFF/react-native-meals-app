import { Pressable, StyleSheet, Text, View } from 'react-native';

import Category from '../models/category';

interface Props {
  category: Category;
}

export default function CategoryGridTile({ category }: Props) {
  const { title, color } = category;

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc', borderless: true }}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : styles.button
        }
      >
        <View style={[styles.innerContainer, , { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: 'white',
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.25,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
