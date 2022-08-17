import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../../Style/Header';
import CO3D from '../../assets/Image/co3d.png';




export default function Header() {
   

  
    
    return (
        <S.Header>
            <S.MyNavbar expand="lg" variant="dark" fixed="top" >
                <S.MyContainer >
                    <S.MyNavbar.Brand className="titulo">CO3D<img src={CO3D} /></S.MyNavbar.Brand>
                    <S.MyNavbar.Toggle aria-controls="basic-navbar-nav" />
                    <S.MyNavbar.Collapse id="basic-navbar-nav">

                        <S.MyMenu >
                            <S.MyMenu.Link as={Link} to='/'   className='lista'  >Home</S.MyMenu.Link>
                            <S.MyMenu.Link as={Link} to='/Sobre'  className='lista' >About us</S.MyMenu.Link>
                            <S.MyMenu.Link as={Link} to='/favoritos' className='lista' >Favoritos</S.MyMenu.Link>
                        </S.MyMenu>
                    </S.MyNavbar.Collapse>
                </S.MyContainer>
            </S.MyNavbar>

        </S.Header>
    );
}