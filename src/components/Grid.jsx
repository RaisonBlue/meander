import React from 'react'
import { FlatList } from 'react-native'

const drawItem = template => (item) => {
  return React.createElement(
    template.type,
    { ...template.props, item }
  )
}

export default ({ data=[], cols, children }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => drawItem(children)(item)}
      //Setting the number of column
      numColumns={cols}
      contentContainerStyle={{ alignItems: "center" }}
      keyExtractor={(_item, index) => index.toString()}
    />
  )
}
