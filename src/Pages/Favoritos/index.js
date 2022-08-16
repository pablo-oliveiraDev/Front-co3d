import React, { useState, useEffect } from 'react';
import * as S from '../../Style/Favoritos';
import SemImage from '../../assets/Image/erro.png';
import api from '../../Services/Api';
import { toast } from 'react-toastify';

export default function Favoritos() {
    const [favorLivros, setFavorLivros] = useState([]);


    useEffect(() => {
        const minhaLista = localStorage.getItem('livros');
        setFavorLivros(JSON.parse(minhaLista) || []);
    }, []);
    

    return (
        < S.MyContainer >
            <S.MyCol >

                {Object.values(favorLivros).map((livro) => {
                   
                    return (
                        <S.CardLivro key={livro.id}>
                            <S.MyCard style={{ width: '18rem' }}  >
                                <S.MyCard.Img variant="top" src="holder.js/100px180" onError={(e) => { e.target.onError = null; e.target.src = SemImage }} />
                                <S.MyCard.Body>
                                    <S.MyCard.Title className='titulo'>{livro.titulo}

                                    </S.MyCard.Title>
                                    <S.MyCard.Text>
                                        Some quick example text to build on the S.Mycard title and make up the
                                        bulk of the S.Mycard's content.
                                    </S.MyCard.Text>
                                    <S.MyButtom variant="primary">Go somewhere</S.MyButtom>

                                </S.MyCard.Body>
                            </S.MyCard>
                        </S.CardLivro>

                    );
                })}



            </S.MyCol>

        </S.MyContainer >
    );
}