import React from "react";
import { useTheme } from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  Dimensions,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";

import { TextInput } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function Profilepage({ navigation }) {
  const [value, onChangeText] = React.useState("Enter Your Name");

  return (
    <View style={styles.container}>
      {/* <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/MainLogo.jpg")}
      /> */}
      <View style={styles.header}>
        <TextInput
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#000",
            marginTop: 20,
          }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        {/* <Text style={styles.name}>Your Name</Text> */}
      </View>
      <View style={styles.footer}>
        <View style={styles.textall}>
          <View>
            <Animatable.View
              animation="jello"
              duration={2000}
              iterationCount={Infinity}
              // direction="alternate"
            >
              <TouchableOpacity
                style={styles.weeklybox}
                onPress={() => console.log("Weekly Report tapped")}
              >
                <FontAwesome
                  name="bar-chart"
                  size={35}
                  style={styles.barchart}
                />

                <Text style={styles.week}>Weekly Report</Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>
          <View>
            <Animatable.View
              animation="pulse"
              duration={2000}
              iterationCount={Infinity}
              // direction="alternate"
            >
              <TouchableOpacity
                style={styles.ContactusBox}
                onPress={() => console.log("Contact Us tapped")}
              >
                <FontAwesome name="phone" size={33} style={styles.contao} />
                <Text style={styles.contact}>Contact Us!</Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>
          <View>
            <Animatable.View
              animation="pulse"
              duration={2000}
              iterationCount={Infinity}
            >
              <TouchableOpacity
                style={styles.DonationBox}
                onPress={() => console.log("Donation tapped")}
              >
                <FontAwesome name="usd" size={35} style={styles.money} />
                <Text style={styles.donation}>Donation</Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>
        </View>
        <View style={styles.icons}>
          <View style={styles.homebox}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Dashboard")}
            >
              <FontAwesome name="home" size={55} style={styles.homeicon} />
            </TouchableOpacity>
          </View>
          <View style={styles.userbox}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Profilepage")}
            >
              <FontAwesome name="user" size={45} style={styles.usericon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#009387",
    flex: 1,
    alignItems: "center",
  },
  week: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  contact: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  donation: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
  },
  // image: {
  //   top: 30,
  //   width: "50%",
  //   height: "50%",
  //   borderRadius: 30,
  //   paddingBottom: 60,
  // },
  usericon: {
    color: "#16c991",
  },
  homeicon: {
    color: "#16c991",
  },
  homebox: {
    flex: 1,
    marginBottom: 2,
  },
  userbox: {
    marginBottom: 2,
  },
  icons: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
  textall: {
    flex: 1,
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    width: "90%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  header: {
    flex: 0.2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009387",
  },
  barchart: {
    color: "#16c991",
    marginBottom: 20,
    marginRight: 10,
  },
  weeklybox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  ContactusBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  contao: {
    color: "#16c991",
    marginBottom: 15,
    marginRight: 10,
  },
  DonationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  money: {
    color: "#16c991",
    marginBottom: 20,
    marginRight: 10,
  },
});
export default Profilepage;
