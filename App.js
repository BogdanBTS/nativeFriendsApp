import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import Navigator from "./src/navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#d3e8ff",
    // alignItems: "center",
    // justifyContent: "center",
    // marginVertical: 40,
  },
});
