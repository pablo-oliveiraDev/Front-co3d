import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';




export const MyContainer = styled(Container)`
    
    display:flex;
    
    max-width:100%;
    justify-content:center;
    margin:0;
    padding:0;


`;

export const MyCol = styled.div`
  
    width:80%;
    height:100%;
    background-color:#200;
    height:100%;
    color:#fff;
    border-left:solid 2px #fff;
    border-right:solid 2px #fff;
    display:flex;
    
    justify-content:space-around;
    flex-wrap:wrap;
 @media(max-width:900px){
    width:100%;
    margin:0;
 }
`;
export const CardLivro = styled.div`
    align-items: center;
    float:left;
`;
export const MyButtom = styled(Button)`

`;
export const MyFavorites = styled(Link)`
    color:#ff0;
    float:right;

`;
export const MyCard = styled(Card)`
    display:flex;
    background:#fff;
    color: #000;
    margin: 20px 30px;
    align-items:center;


    img{
        margin-top:10px;
        background: #1c1c1c;
        width:250px;
        height:250px;
    }
    .descricao{
            
        }
`;


export const EmptyFilters = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background:#200;
    h1{
        display:flex;
        flex-direction:column;
        text-align:center;
        margin: 30px;
    }
`;



