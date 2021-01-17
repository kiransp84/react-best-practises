import {useRef,memo,useEffect} from "react";
import styled from "styled-components";

const ContactData = styled.div`
  padding-top: 5px;
`;

const Img = styled.img`
  border-radius: 50%;
  margin-right: 10px;
  float: left;
  width: 60px;
`;

//color red for every even contact item
const Container = styled.div`  
  margin: 5px;
  background-color: ${props=> props.index %2 === 0 ? '#e6eeff' : '#ccd8ff' }
`;


const Contact = ( { index, style, data , setRowHeight }  ) => {
    const containerRef = useRef({});

    // calls the reset height of the component when height is measured 
    useEffect(()=>{
      if( containerRef.current ) {
        setRowHeight( index,containerRef.current.clientHeight );
      }
    },[containerRef]);
    
    //console.log(' entire props ',props);
    //console.log('style passed as props ',style );
    //console.log('data passed as props ',data );
    
    const contact = data[index];
    return (
      <div style={style}>
        <Container index={index} key={contact.email} ref={containerRef}>
          <Img src={contact.thumbnail} role="presentation" />
          <ContactData>
            <strong>{contact.name}</strong>
            <br />
            <small>{contact.email}</small>
          </ContactData>
        </Container>
      </div>)
}

// pure functional component 
export default memo(Contact);