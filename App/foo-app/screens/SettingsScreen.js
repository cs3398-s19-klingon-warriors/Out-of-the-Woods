import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TextInput, Alert } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';
import logo from '../assets/images/2Xlogo.png';

class SettingsScreen extends Component {
  constructor() {
    super();
    this.state = {
      until: '',
    };

  }

  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <View style={styles.settingsContainer}>
        <View style={{ flex: 1 }}>
          <Image source={logo} style={[styles.animatedLogo]} resizeMode="contain" />
        </View>

        <View style={{ flex: 2, backgroundColor: "#F7F6EB", width: "95%", alignSelf: "center" }}>
          <ScrollView>
            <View style={styles.settingsList}>
              <View style={styles.settingsListItem}>
                <View>
                  <Text style={styles.settingsListItemTitle}>Address</Text>
                  <TextInput
                    onChangeText={(fooText) => {
                      this.setState({ text: fooText });
                    }}
                  />
                </View>

                <Text style={styles.settingsListItemAttribute}>Home</Text>
                <Text style={styles.settingsListItemAttribute}>Favorites</Text>
              </View>


              <View style={styles.settingsListItem}>
                <Text style={styles.settingsListItemTitle}>Alerts</Text>
                <Text style={styles.settingsListItemAttribute}>Default timer length</Text>
              </View>

              <View style={styles.settingsListItem}>
                <Text style={styles.settingsListItemTitle}>Geolocation</Text>
                <Text style={styles.settingsListItemAttribute}>Capture interval</Text>
              </View>

              <View style={styles.settingsListItem}>
                <Text style={styles.settingsListItemTitle}>Account</Text>
                <Text style={styles.settingsListItemAttribute}>Log out</Text>
              </View>

            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
};
export default SettingsScreen;
