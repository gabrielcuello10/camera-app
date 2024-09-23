import useLoadImages from "@/hook/useLoadimages";
import { BottomSheetView, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
} from "react-native";
import LoadingSpinner from "../spinner";
import Message from "../message";
import { Ionicons } from "@expo/vector-icons";

const BottomSheetImages = () => {
  const screenWidth = Dimensions.get("window").width;
  const imageSize = screenWidth / 4 - 10;
  const { data, error, loading } = useLoadImages();
  const { dismiss } = useBottomSheetModal();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Message message="Hubo un error" />;
  }

  return (
    <BottomSheetView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => dismiss()} style={styles.backButton}>
          <Ionicons name="close" size={24} color="black" />
        </Pressable>
        <Text style={styles.title}>Galería de Imágenes</Text>
      </View>
      {data && data?.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={4}
          renderItem={({ item, index }) => (
            <Link
              href={{
                pathname: `/[id]`,
                params: {
                  id: item.filename,
                  index,
                },
              }}
              asChild
            >
              <Pressable>
                <Image
                  source={{ uri: item.uri }}
                  width={imageSize}
                  height={imageSize}
                  style={{
                    width: imageSize,
                    height: imageSize,
                    margin: 4,
                  }}
                />
              </Pressable>
            </Link>
          )}
        />
      ) : (
        <Message message="No hay imágenes" />
      )}
    </BottomSheetView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default BottomSheetImages;
