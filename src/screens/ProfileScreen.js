import {
  FlatList,
  Pressable,
  Image,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
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
      {/* Buttons Row */}
      <View style={styles.buttonsRow}>
        <Pressable
          // onPress={onSubmit}
          style={[styles.button, { backgroundColor: "#2a61ad" }]}
          // disabled={!postTextState}
        >
          <MaterialIcons name="add-circle" size={23} color="white" />
          <Text style={styles.textActive}>Add to Story</Text>
        </Pressable>

        <Pressable
          // onPress={onSubmit}
          style={[styles.button, { backgroundColor: "lightgray" }]}
          // disabled={!postTextState}
        >
          <MaterialIcons name="edit" size={23} color="black" />
          <Text style={styles.text}>Edit Profile</Text>
        </Pressable>

        <Pressable
          // onPress={onSubmit}
          style={[styles.button, { backgroundColor: "lightgray" }]}
          // disabled={!postTextState}
        >
          <Ionicons name="md-exit-outline" size={23} color="black" />
        </Pressable>
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
  buttonsRow: {
    paddingVertical: 14,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
    justifyContent: "space-around",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderRadius: 5,
    elevation: 3,
    marginHorizontal: "auto",
    display: "flex",
    flexDirection: "row",
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    paddingLeft: 4,
    // textTransform: "uppercase",
  },
  textActive: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    paddingLeft: 4,
  },
});

export default ProfileScreen;
