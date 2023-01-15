import { StyleSheet, Text, View } from 'react-native';

interface Props {
  data: string[];
}

export default function List({ data }: Props) {
  return (
    <View>
      {data.map((x) => (
        <View style={styles.listItem} key={x}>
          <Text style={styles.itemText}>{x}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});
