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
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MeelsCategories"
            content={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
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
