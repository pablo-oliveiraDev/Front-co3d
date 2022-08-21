import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { MdOutlineSettings } from 'react-icons/md';



export const MyButton = styled(Button)`

`;

export const MyModal = styled(Modal)`

    .textoTop{
        background:#200; 
        color:#fff  ;
        
        
    }
    
    img{
        margin-left:10px;
        width:50px;
        height:50px;
    }
    .bodyModal{
        height:500px;
        background:#200;
        margin:0;

    
    }
    .footerModal{
        display:flex;
        align-items:center;
        justify-content:space-around;
    }

`;

export const MyForm = styled(Form)`
   
   margin-top:50px;

`;

export const MyInputGroup = styled(InputGroup)`
.listInputNome{

  margin-top:50px;
}

.textList{
display:flex;
flex-direction:column;
}

`;
export const MyGrConfigure = styled(MdOutlineSettings)`
   

`;
