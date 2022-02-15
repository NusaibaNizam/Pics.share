import React from "react";
import { FlatList} from "react-native";
import TextItem from '../ListItems/textItem';
const DataList=(props)=>{
    return(
        <FlatList 
        style={{width: '100%', marginBottom: 10}}
        data={props.datas}
        renderItem={({ item })=>{
          return(
            
             <TextItem 
              value={item.value}
              key={item.key}
              onpressed={()=>{
                props.textItemClickHandler(item.key)
                }
              }
              image={item.image}
              />
          )
        }}
      /> 
    )
}
export default DataList;