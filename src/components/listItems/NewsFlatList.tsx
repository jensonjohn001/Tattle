import React from 'react';
import { FlatList } from 'react-native';
import NewsListItem from './NewsListItem';
import { Article } from '../../redux/slice/newsSlice';
import { uniqueId } from 'lodash';

interface NewsFlatListProps {
  data: Article[];
  onSelectItem: (item: Article) => (void);
}

const NewsFlatList: React.FC<NewsFlatListProps> = ({ data, onSelectItem }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <NewsListItem item={item} onSelectItem={onSelectItem}/>}
      keyExtractor={() => `item-${uniqueId()}`}
    />
  );
};

export default NewsFlatList;
