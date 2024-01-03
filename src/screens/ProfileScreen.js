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
import { FontAwesome5 } from "@expo/vector-icons";
import posts from "../../assets/data/posts.json";
import FeedPost from "../components/FeedPost";
import user from "../../assets/data/user.json";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
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
          <Text style={styles.buttonTextActive}>Add to Story</Text>
        </Pressable>

        <Pressable
          // onPress={onSubmit}
          style={[styles.button, { backgroundColor: "lightgray" }]}
          // disabled={!postTextState}
        >
          <MaterialIcons name="edit" size={23} color="black" />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </Pressable>

        <Pressable
          // onPress={onSubmit}
          style={[styles.button, { backgroundColor: "lightgray" }]}
          // disabled={!postTextState}
        >
          <Ionicons name="md-exit-outline" size={23} color="black" />
        </Pressable>
      </View>
      <View style={styles.profileInfo}>
        <View style={styles.profileInfoView}>
          <FontAwesome5 name="user-graduate" size={20} color="gray" />
          <Text style={styles.profileInfoText}>Graduated university</Text>
        </View>
        <View style={styles.profileInfoView}>
          <FontAwesome5 name="clock" size={20} color="gray" />
          <Text style={styles.profileInfoText}>Joined on October 2013</Text>
        </View>
        <View style={styles.profileInfoView}>
          <FontAwesome5 name="location-arrow" size={20} color="gray" />
          <Text style={styles.profileInfoText}>From Zhytomyr</Text>
        </View>
      </View>
      <Text style={styles.profelePosts}>Posts</Text>
      <FlatList
        data={user.posts}
        renderItem={({ item }) => <FeedPost post={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // paddingTop: 10,
    color: "green",
  },
  header: {
    display: "flex",
    alignSelf: "center",
    padding: 10,
    backgroundColor: "white",
  },
  backImg: {
    height: 230,
    width: 400,
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
    borderWidth: 6,
    borderColor: "#fff",
    alignSelf: "center",
    marginBottom: 5,
  },
  name: {
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
  },
  buttonsRow: {
    paddingVertical: 12,
    backgroundColor: "white",
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
  buttonText: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    paddingLeft: 4,
    // textTransform: "uppercase",
  },
  buttonTextActive: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    paddingLeft: 4,
  },
  profileInfo: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  profileInfoView: {
    flexDirection: "row",
    marginBottom: 7,
  },
  profileInfoText: {
    fontSize: 16,
    fontWeight: "500",
    paddingLeft: 10,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  profelePosts: {
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default ProfileScreen;
