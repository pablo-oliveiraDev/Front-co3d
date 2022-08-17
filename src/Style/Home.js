import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

export const MyPesquisa = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:row;
    border:solid 1px #fff;
    background:#200;
    width:100%;
    height:80px;
    font-size:25px;
    margin:0;


    label{
    padding-right:1ch;
    }
    input{
        width:400px;
        text-align:center;
    }


`;

export const MyButtonPesq = styled(Dropdown)`
margin-left:1ch;
`;



 

export const MyContainer = styled(Container)`
    
    display:flex;
    flex-direction:row;
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
    export const MyFavorites = styled(Button)`
    color:#ff0;
    float:right;

 `;
    export const MyCard = styled(Card)`
    display:flex;
    background:#fff;
    color: #000;
    margin: 20px 30px;
    align-items:center;
    .titulo{
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        width:100%;

    }

    img{
        margin-top:10px;
        background: #1c1c1c;
        width:250px;
        height:250px;
    }

    .descricao{
        height:100px;
        width:200px;
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




