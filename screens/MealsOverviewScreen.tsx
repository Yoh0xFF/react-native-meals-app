import { StyleSheet, Text, View } from 'react-native';

interface Props {}

export default function MealsOverviewScreen({}: Props) {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
