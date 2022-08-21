import React, { useState, useEffect } from 'react';
import * as S from '../../Style/Favoritos';
import SemImage from '../../assets/Image/co3d.png';
import { toast } from 'react-toastify';
import { GoTrashcan } from 'react-icons/go';

export default function Favoritos() {
    const [favorLivros, setFavorLivros] = useState([]);



    useEffect(() => {

        const minhaLista = localStorage.getItem('livros');
        setFavorLivros(JSON.parse(minhaLista) || []);


    }, []);



    function handleSoftDelete(id) {

        let filtroLivros =
            favorLivros.filter((livro) => {
                return (livro.id !== id)
            });




        setFavorLivros(filtroLivros);
        localStorage.setItem('livros', JSON.stringify(filtroLivros));
        toast.success('Filme excluido com sucesso!👍🏼')






    }

    return (
        < S.MyContainer >
            <S.MyCol >

                {favorLivros && Object.values(favorLivros).map((livro, index, arr) => {

                    return (
                        <S.CardLivro key={index}>
                            <S.MyCard style={{ width: '16rem' }}  >
                                <S.MyCard.Img variant="top" src="holder.js/100px180" onError={(e) => { e.target.onError = null; e.target.src = SemImage }} />
                                <S.MyCard.Body>
                                    <S.MyCard.Title className='titulo'>
                                        {livro.titulo}

                                    </S.MyCard.Title>
                                    <S.MyCard.Text className='descricao'>
                                        <span

                                        >Descrição :{livro.descricao}</span>
                                    </S.MyCard.Text>
                                    <S.MyCard.Text>
                                        <span>Autor: {livro.autor}</span>
                                    </S.MyCard.Text>
                                    <S.MyCard.Text>
                                        <span>Enviado por: {livro.nome}</span>
                                    </S.MyCard.Text>


                                    <S.MyButtom variant="primary" onClick={() => handleSoftDelete(livro.id)} ><GoTrashcan color='#fff' size={35} /></S.MyButtom>

                                </S.MyCard.Body>
                            </S.MyCard>
                        </S.CardLivro>

                    );
                })}

                {favorLivros.length === 0 &&


                    <S.EmptyFilters >
                        <h1>Você ainda não possui livro/s salvo em seu Favoritos!😥</h1>
                    </S.EmptyFilters>


                }

            </S.MyCol>

        </S.MyContainer >
    );
}