import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

export const MyContainer = styled(Container)`
 display:flex;
 flex-direction:row;
 max-width:100%;
 justify-content:center;
 margin:0;
 padding:0;


`;

export const MyCol = styled.div`

width:60%;
    background-color:#200;
    height:100%;
    color:#fff;
    border-left:solid 2px #fff;
    border-right:solid 2px #fff;
    display:flex;
    align-items:center;
    flex-direction:column;
    font-size:25pt;
    text-align:center;
    padding:20px;
    
    img{
        width:250px;
        height:250px;
    }
   

    h1{
        margin-bottom: 40px;
    }




`;