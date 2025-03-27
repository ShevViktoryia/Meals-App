import { FlatList } from "react-native";
import { CATEGORIES } from "../data/data";
import CategortGridTitle from "../components/CategortGridTitle";

const renderCategoryItem = (itemData) => {
  return (
    <CategortGridTitle
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
};

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
