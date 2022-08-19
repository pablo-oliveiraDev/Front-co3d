import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


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
