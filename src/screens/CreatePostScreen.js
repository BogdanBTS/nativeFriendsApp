import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const user = {
  id: "u1",
  image: "https://avatars.githubusercontent.com/u/89772290?v=4",
  name: "Bogdan Tsaruk",
};

const CreatePostScreen = () => {
  const [postTextState, setPostTextState] = useState("");
  const [image, setImage] = useState(null);

  const onSubmit = () => {
    // console.warn("On submit", postTextState);
    setPostTextState("");
    setImage("");
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <View style={styles.header}>
          <Image source={{ uri: user.image }} style={styles.profileImage} />
          <Text style={styles.name}>{user.name}</Text>

          <MaterialCommunityIcons
            onPress={pickImage}
            name="folder-multiple-image"
            size={25}
            color="#2a61ad"
            style={styles.icon}
          />
        </View>

        <TextInput
          value={postTextState}
          onChangeText={setPostTextState}
          placeholder="What is on your mind?"
          underlineColorAndroid={false}
          multiline
          style={styles.input}
        />

        <Image source={{ uri: image }} style={styles.image} />

        <View style={styles.buttonContainer}>
          <Pressable
            onPress={onSubmit}
            style={[
              styles.button,
              { backgroundColor: postTextState ? "#2a61ad" : "gray" },
            ]}
            disabled={!postTextState}
          >
            <Text style={styles.text}>Post</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // marginBottom: 16,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  name: {
    fontWeight: "500",
  },
  icon: {
    marginLeft: "auto",
  },
  input: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: "auto",
    marginVertical: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    marginHorizontal: "auto",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textTransform: "uppercase",
  },
});

export default CreatePostScreen;
