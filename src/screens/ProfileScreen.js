import {
  FlatList,
  Pressable,
  Image,
  View,
  StyleSheet,
  Text,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FeedPost from "../components/FeedPost";
import user from "../../assets/data/user.json";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";

const dummyUserImg = user.image;
const backImg = user.posts[0].image;

const profilePictureWidth = Dimensions.get("window").width * 0.4;

const ProfileScreenHeader = ({ user, isMe = false }) => {
  const navigation = useNavigation();
  const editProfile = () => {
    navigation.navigate("Update Profile");
  };

  const signOut = async () => {
    console.warn("Sign out");
  };

  if (!user) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Image source={{ uri: backImg }} style={styles.backImg} />
      <Image
        source={{ uri: user?.image || dummyUserImg }}
        style={styles.image}
      />
      <Text style={styles.name}>{user.name}</Text>
      {/* Buttons Row */}
      {isMe && (
        <>
          <View style={styles.buttonsRow}>
            <Pressable
              // onPress={}
              style={[styles.button, { backgroundColor: "#2a61ad" }]}
              // disabled={}
            >
              <MaterialIcons name="add-circle" size={23} color="white" />
              <Text style={styles.buttonTextActive}>Add to Story</Text>
            </Pressable>

            <Pressable
              onPress={editProfile}
              style={[styles.button, { backgroundColor: "lightgray" }]}
              // disabled={}
            >
              <MaterialIcons name="edit" size={23} color="black" />
              <Text style={styles.buttonText}>Edit Profile</Text>
            </Pressable>

            <Pressable
              onPress={signOut}
              style={[
                styles.button,
                { backgroundColor: "lightgray", flex: 0, width: 60 },
              ]}
              // disabled={}
            >
              <Ionicons name="md-exit-outline" size={23} color="black" />
            </Pressable>
          </View>
        </>
      )}

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
  );
};

const ProfileScreen = () => {
  const route = useRoute();

  console.warn("User: ", route?.params?.id);
  return (
    <FlatList
      data={user.posts}
      renderItem={({ item }) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <>
          <ProfileScreenHeader user={user} isMe={true} />
          <Text style={styles.profelePosts}>Posts</Text>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  backImg: {
    width: "100%",
    height: 230,
    overflow: "hidden",
    objectFit: "cover",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginBottom: -profilePictureWidth / 2,
  },
  image: {
    width: profilePictureWidth,
    aspectRatio: 1,
    borderRadius: 100,
    // marginTop: -100,
    borderWidth: 5,
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
    display: "flex",
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
    marginBottom: 4,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderRadius: 5,
    elevation: 3,
    marginHorizontal: "auto",
  },
  buttonText: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    paddingLeft: 4,
  },
  buttonTextActive: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    paddingLeft: 4,
  },

  profileInfoView: {
    flexDirection: "row",
    alignSelf: "stretch",
    paddingHorizontal: 5,
    backgroundColor: "white",
    marginVertical: 5,
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
