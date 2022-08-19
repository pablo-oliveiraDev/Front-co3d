import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export const Header = styled.div`
    padding:0;
    padding-top:15px;
    margin:0;
    width:100%;
    height:80px;
    background:#200;
    margin-bottom:20px;
    border-bottom:solid 4px #000;

`;

export const MyNavbar = styled(Navbar)`
    padding:0;
    margin:0;
    font-size:150%;
    width:100%;

    background:#200;
    .titulo{
    margin-right:150px;
    text-align:center;
    img{
        width:60px;
        height:60px;
    }
    
}

`;

export const MyMenu = styled(Nav)`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%;
    margin:0;
    padding:0;

a{
    text-align:center;
    text-decoration:none;
    list-style: none;
}
.lista{
    display:flex;
    margin-left:80px;
   height:80px;
   text-align:center;
   align-items:center;
}
`;
export const MyContainer = styled(Container)`



`;

