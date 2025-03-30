import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/data";

export default function MealsOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Screen - {categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
