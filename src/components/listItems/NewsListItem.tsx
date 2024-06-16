import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Article } from '../../redux/slice/newsSlice';
import { Colors, Images, Strings, Theme } from '../../utils/constants';
import { useAppSelector } from '../../redux/hooks';
import moment from 'moment';
import FastImage from 'react-native-fast-image'

interface NewsListItemProps {
    item: Article;
    onSelectItem: (item: Article) => (void);
}

const NewsListItem: React.FC<NewsListItemProps> = ({ item, onSelectItem }) => {

    const theme = useAppSelector((state) => state.theme.value);
    const oppositeColor = theme === Theme.Light ? Colors.BackgroundDarkColor : Colors.BackgroundLightColor;

    const styles = StyleSheet.create({
        item: {
            backgroundColor: theme === Theme.Light ? Colors.NewsItemBGLightColor : Colors.NewsItemBGDarkColor,
            padding: 10,
            marginVertical: 8,
            marginHorizontal: 16,
            borderRadius: 8,

        },
        mainContent: {
            flexDirection: 'row',
        },
        sourceTitleHolder: {
            flex: 1, marginLeft: 8, alignContent: 'center'
        },
        title: {
            fontSize: 16,
            marginTop: 5,
        },
        source: {
            fontSize: 12,
            opacity: 0.5
        },
        image: {
            width: '30%',
            height: '100%',
            borderRadius: 8,
        },
        bottomHolder: {
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            opacity: 0.4
        },
        time: {
            fontSize: 10,
        },
        bottomIcon: {
            width: 18, height: 18
        }
    });

    const didSelectItem = (item: Article) => {
        onSelectItem(item);
    }

    return (
        <TouchableOpacity style={styles.item} onPress={() => didSelectItem(item)}>
            <View style={styles.mainContent}>
                <FastImage
                    resizeMode={FastImage.resizeMode.cover}
                    source={{ uri: item.urlToImage || Strings.ThumbnailImage }}
                    style={styles.image}
                />
                <View style={styles.sourceTitleHolder}>
                    <Text style={{ ...styles.source, color: oppositeColor }} >{item.source.name || 'Tattle'}
                        <Text> • {item.author || 'Self'}</Text>
                    </Text>
                    <Text style={{ ...styles.title, color: oppositeColor }} >{item.title}</Text>
                </View>
            </View>

            <View style={{ ...styles.bottomHolder, }}>
                <Text style={{
                    ...styles.time,
                    color: oppositeColor
                }}>{moment(item.publishedAt).format('MMM DD, YYYY hh:mm A')}
                   {'  '}({moment(item.publishedAt).fromNow()})</Text>
                <TouchableOpacity>
                    <FastImage
                        style={{ ...styles.bottomIcon }} tintColor={oppositeColor} source={Images.TabSavedIcon}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default NewsListItem;
