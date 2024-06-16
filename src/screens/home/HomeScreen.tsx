import React, { useEffect } from 'react';
import {
  View, Text, TouchableOpacity, GestureResponderEvent, StatusBar, SafeAreaView, Image,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import switchTheme from 'react-native-theme-switch-animation';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { light, dark } from '../../redux/slice/themeSlice';
import { Article, fetchNews } from '../../redux/slice/newsSlice';
import { Theme, Colors, Images, Strings, Screens } from '../../utils/constants';
import styles from './HomeScreen.styles';
import NewsFlatList from '../../components/listItems/NewsFlatList'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';

export default function HomeScreen() {

  //Declarations
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.theme.value)
  const { isLoading, newsData, isError } = useAppSelector((state) => state.news);
  // Filter out items with the specified title
  const filteredNewsItems = newsData?.articles.filter(item => item.title !== Strings.Removed);

  const backgroundColor = theme === Theme.Light ? Colors.BackgroundLightColor : Colors.BackgroundDarkColor;
  const oppositeColor = theme === Theme.Light ? Colors.BackgroundDarkColor : Colors.BackgroundLightColor;

  const changeThemeAction = (e: GestureResponderEvent) => {
    if (e.currentTarget) {
      (e.currentTarget as any).measure(
        (
          x1: number,
          y1: number,
          width: number,
          height: number,
          px: number,
          py: number
        ) => {
          switchTheme({
            switchThemeFunction: () => {
              dispatch(theme === Theme.Light ? dark() : light()); // your switch theme function
            },
            animationConfig: {
              type: 'circular',
              duration: 900,
              startingPoint: {
                cy: py + height / 2,
                cx: px + width / 2,
              }
            },
          });
        }
      );
    }
  };

  useEffect(() => {
    console.log("Home: Fetching news state.news.isLoading: ", isLoading);

    dispatch(fetchNews());
  }, []);

  const selectedItemAction = (item: Article) => {
    navigation.navigate(Screens.NewsDetails, {selectedNews: item})
  }

  return (
    <>
      <StatusBar barStyle={theme === Theme.Light ? 'dark-content' : 'light-content'} />
      <SafeAreaView style={{ ...styles.container, backgroundColor: backgroundColor }}>

        {/* Top Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={changeThemeAction}>
            <Image
              style={{
                ...styles.topBarIcon,
                tintColor: oppositeColor
              }}
              source={Images.MenuIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={changeThemeAction}>
            <Image
              style={{
                ...styles.topBarIcon,
                tintColor: oppositeColor
              }}
              source={theme === Theme.Light ? Images.ThemeDarkIcon : Images.ThemeLightIcon}
            />
          </TouchableOpacity>

        </View>

        <NewsFlatList data={filteredNewsItems || []} onSelectItem={selectedItemAction} />


      </SafeAreaView>
    </>
  );
}