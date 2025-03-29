import { FlatList } from "react-native";
import { CATEGORIES } from "../data/data";
import CategortGridTitle from "../components/CategortGridTitle";

export default function CategoriesScreen({ navigation }) {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview");
    };

    return (
      <CategortGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
