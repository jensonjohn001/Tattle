import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors, Images, Screens } from '../utils/constants';
import { HomeScreen } from '../screens';
import { useAppSelector } from '../redux/hooks';
import { Theme } from '../utils/constants';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {

  const theme = useAppSelector((state) => state.theme.value)
  const backgroundColor = theme === Theme.Light ? Colors.BackgroundLightColor : Colors.BackgroundDarkColor;
  const oppositeColor = theme === Theme.Light ? Colors.BackgroundDarkColor : Colors.BackgroundLightColor;

  function Explore() {
    return (
      <View style={{ backgroundColor: backgroundColor, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: oppositeColor }}>Explore!</Text>
      </View>
    );
  }

  function Saved() {
    return (
      <View style={{ backgroundColor: backgroundColor, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: oppositeColor }}>Saved!</Text>
      </View>
    );
  }

  function Profile() {
    return (
      <View style={{ backgroundColor: backgroundColor, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: oppositeColor }}>Profile!</Text>
      </View>
    );
  }


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: theme === Theme.Light ? Colors.TabBackgroundLightColor : Colors.TabBackgroundDarkColor,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let icon: any;

          if (route.name === Screens.Home) {
            icon = Images.TabHomeIcon //focused ? 'home' : 'home-outline';
          } else if (route.name === Screens.Explore) {
            icon = Images.TabExploreIcon
          } else if (route.name === Screens.Saved) {
            icon = Images.TabSavedIcon
          } else if (route.name === Screens.Profile) {
            icon = Images.TabProfileIcon
          }

          // You can return any component that you like here!
          return <Image style={{
            opacity: focused ? 1 : 0.5,
            width: focused ? 26 : 24, height: focused ? 26 : 24
          }} source={icon} tintColor={oppositeColor} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={Screens.Home} component={HomeScreen} />
      <Tab.Screen name={Screens.Explore} component={Explore} />
      <Tab.Screen name={Screens.Saved} component={Saved} />
      <Tab.Screen name={Screens.Profile} component={Profile} />
    </Tab.Navigator>
  );
};
export default HomeTabs;
