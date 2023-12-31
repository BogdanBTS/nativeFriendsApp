import {
  FlatList,
  Pressable,
  Image,
  View,
  StyleSheet,
  Text,
} from "react-native";
import posts from "../../assets/data/posts.json";
import FeedPost from "../components/FeedPost";
import user from "../../assets/data/user.json";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.posts[0].image }} style={styles.backImg} />
        <Image source={{ uri: user.image }} style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 10,
    color: "green",
  },
  header: {
    display: "flex",
    alignSelf: "center",
  },
  backImg: {
    height: 230,
    width: 400,
    // aspectRatio: 1,
    overflow: "hidden",
    objectFit: "cover",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: -100,
    // borderRadius: 150 / 2,
    // overflow: "hidden",
    borderWidth: 6,
    borderColor: "#fff",
    alignSelf: "center",
    marginBottom: 10,
  },
  name: {
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ProfileScreen;
