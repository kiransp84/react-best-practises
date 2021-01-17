import {useRef} from "react";
import { VariableSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import styled from "styled-components";

import Contact from "./Contact.jsx";

const Container = styled.div`
  width:300px;
  height:100%;
  border:1px solid;
`;

// To-Do show a loading indicator
export default ({ contacts = [] }) => {

  //let rowHeights = {};
  const rowHeights = useRef({});

  // ref of the list to call its instance method  
  let listRef = useRef({});
  const getRowHeight= (index) => {
    const rowHeight = rowHeights.current[index] + 5 || 45 ;
    //console.log(`Getting Index ${index} Height  ${rowHeight}`);
    return rowHeight;
  }
  const setRowHeight= (index,height) => {
    listRef.current.resetAfterIndex(0);
    rowHeights.current = { ...rowHeights.current , [index] : height }
    //console.log(`Setting Index ${index} Height ${height}`);
  }
  return (
    <Container>
    <AutoSizer>
      { ({ height, width })=>(
            <VariableSizeList 
              itemData={contacts}
              height={height}
              itemCount={contacts.length}  
              width={width}
              itemSize={getRowHeight}
              ref={listRef}
            >
              {
                ({index,style,data})=>{
                  return <Contact index={index} style={style} data={data} setRowHeight={setRowHeight} />
                }
              }
            </VariableSizeList>)
      }
    </AutoSizer>
    </Container>    
  );
}

