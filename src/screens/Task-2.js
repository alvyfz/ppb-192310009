/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{backgroundColor: 'navy'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              color: '#FAFDD6',
              justifyContent: 'center',
              marginLeft: '5%',

              fontSize: 18,
              fontFamily: 'Open Sans',
            }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: 'navy',
          height: '8%',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#FAFDD6',
            fontSize: 30,
            fontWeight: '500',
            fontFamily: 'Raleway',
            marginLeft: '5%',
          }}>
          Scrolling Text
        </Text>
      </View>
      <View style={{margin: 10}}>
        <View
          style={{
            backgroundColor: 'navy',
            height: 50,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              marginLeft: '5%',
            }}>
            React native vol.1
          </Text>
        </View>
        <View style={{height: 30, justifyContent: 'center'}}>
          <Text style={{fontSize: 20, color: 'black'}}>
            Explanation from react native
          </Text>
        </View>
        <ScrollView style={{height: '79%'}}>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'justify',
              paddingHorizontal: 5,
              color: 'black',
            }}>
            React Native is an open-source UI software framework created by Meta
            Platforms, Inc.[3] It is used to develop applications for
            Android,[4] Android TV,[5] iOS, macOS,[6] tvOS,[7] Web,[8]
            Windows[6] and UWP[9] by enabling developers to use the React
            framework along with native platform capabilities.[10] It is also
            being used to develop virtual reality applications at Oculus.[11]
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'justify',
              paddingHorizontal: 5,
              color: 'black',
            }}>
            {' '}
            In 2012 Mark Zuckerberg commented, "The biggest mistake we made as a
            company was betting too much on HTML as opposed to native".[12][13]
            Using HTML5 for Facebook's mobile version resulted in an unstable
            application that retrieved data slowly.[14] He promised Facebook
            would soon deliver a better mobile experience. Inside Facebook,
            Jordan Walke found a way to generate UI elements for iOS from a
            background JavaScript thread, which became the basis for the React
            web framework. They decided to organize an internal Hackathon to
            perfect this prototype in order to be able to build native apps with
            this technology.[15] In 2015, after months of development, Facebook
            released the first version for the React JavaScript Configuration.
            During a technical talk,[16] Christopher Chedeau explained that
            Facebook was already using React Native in production for their
            Group App and their Ads Manager App.[17]
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'justify',
              paddingHorizontal: 5,
              color: 'black',
            }}>
            The working principles of React Native are virtually identical to
            React except that React Native does not manipulate the DOM via the
            Virtual DOM. It runs in a background process (which interprets the
            JavaScript written by the developers) directly on the end-device and
            communicates with the native platform via serialized data over an
            asynchronous and batched bridge.[18][19] React components wrap
            existing native code and interact with native APIs via React’s
            declarative UI paradigm and JavaScript. While React Native styling
            has a similar syntax to CSS, it does not use HTML or CSS.[20]
            Instead, messages from the JavaScript thread are used to manipulate
            native views. React Native also allows developers to write native
            code in languages such as Java or Kotlin for Android, Objective-C or
            Swift for iOS, and C++/WinRT or C# for Windows 10, which makes it
            even more flexible. Microsoft builds and maintains React Native for
            Windows and React Native for macOS.
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
