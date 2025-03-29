import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/data";

export default function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
