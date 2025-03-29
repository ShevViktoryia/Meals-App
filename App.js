import { StyleSheet, View, StatusBar } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigation } from "@react-navigation/natine-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigation();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style={"light"} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MeelsCategories" content={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" content={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
