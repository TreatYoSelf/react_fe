// import React from 'react';
import React, { Component } from "react";
import {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import Drawer from "react-native-drawer";
import NavBarItems from "./NavBarItems";
import { withNavigation } from "react-navigation";
import menu from "../../../assets/icons/navBar/menu.png";
import menuClosed from "../../../assets/icons/navBar/x.png";
import home from "../../../assets/icons/navBar/home.png";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = { menuOpen: false, action: "" };
  }

  findPath = () => {
    AsyncStorage.getItem("action").then(pathAction =>
      this.setState({ action: pathAction })
    );
  };

  componentDidMount() {
    this.findPath();
  }

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    return this.state.action ? (
      <View style={styles.drawerContainer}>
        <TouchableOpacity
          onPress={() => this.setState({ menuOpen: !this.state.menuOpen })}
        >
          <Image
            source={this.state.menuOpen ? menuClosed : menu}
            style={styles.menu}
          />
        </TouchableOpacity>
        <Drawer
          open={this.state.menuOpen}
          type="static"
          openDrawerOffset={0.5}
          closedDrawerOffset={0}
          content={
            this.state.menuOpen ? (
              <NavBarItems
                closeMenu={this.closeMenu}
                action={this.state.action}
              />
            ) : null
          }
          tapToClose={true}
          onClose={this.closeDrawer}
          styles={styles.drawer}
          tweenEasing={"easeInOutQuad"}
          tweenDuration={400}
        ></Drawer>
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  drawerContainer: {
    width: "190%"
  },
  drawer: {
    backgroundColor: "#fff"
  },
  menu: {
    height: 30,
    margin: 20,
    marginTop: 23,
    width: 40
  }
});
// onHamburgerClick(){
//   this.props.toggleDrawer();
// }
//
// render(){
//   return(
//     <View style={styles.viewStyle}>
//       <View>
//         <TouchableOpacity onPress={ this.onHamburgerClick }>
//           <Image
//             style={styles.menuStyle}
//             source={menu}
//           />
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.TextStyle}>
//         {this.props.title}
//       </Text>
//       <View>
//         <Image
//           style={styles.cartStyle}
//           source={cart}
//         />
//       </View>
//     </View>
//   );
// }
// export default function NavBar(props) {
//     return (
//         <View>
//             <Link title="Profile" onPress={() => props.profile()}/>
//             <Link title="Calendar" onPress={() => props.calendar()}/>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "left",
//         justifyContent: "center"
//     },
//     header: {
//         fontSize: 25
//     },
//     image: {
//         marginTop: 15,
//         width: 150,
//         height: 150,
//         borderColor: "rgba(0,0,0,0.2)",
//         borderWidth: 3,
//         borderRadius: 150
//     }
// })
