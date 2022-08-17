import React from 'react';
import * as S from '../../Style/Home';
import SemImage from '../../assets/Image/erro.png';
import { useEffect, useState } from 'react';
import api from '../../Services/Api';
import { BsFillStarFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { FcDataConfiguration } from 'react-icons/fc';
import { BiCommentAdd } from 'react-icons/bi';





export default function Home() {
    const [livros, setLivros] = useState([]);
    const [selectLivro, setSelectLivro] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    const [paramsPesq, setParamsPesq] = useState('titulo');
    const [filterTitulo, setFilterTitulo] = useState([]);
    const [filterId, setFilterId] = useState([]);



    useEffect(() => {
        async function loadLivros() {
            const response = await api.get('/livros');
            setLivros(response.data);
        }
        loadLivros();
    }, []);

    const lowerPesquisa = pesquisa.toLocaleLowerCase();
    useEffect(() => {

        function loadPesquisa() {
            if (pesquisa !== '' && paramsPesq === 'titulo') {
                setFilterTitulo(
                    Object.values(livros).filter((item) =>
                        item.titulo.toLocaleLowerCase().includes(lowerPesquisa)

                    )
                )
            }
        }
        loadPesquisa();

    }, [lowerPesquisa, livros, pesquisa, paramsPesq]);

    useEffect(() => {

        function loadPesquisaId() {
            if (pesquisa !== '' && paramsPesq === 'id') {
                setFilterId(
                    Object.values(livros).filter((item) =>
                        item.id.toLocaleLowerCase().includes(lowerPesquisa)

                    )
                )
            }
        }
        loadPesquisaId();

    }, [lowerPesquisa, livros, pesquisa, paramsPesq]);



    console.log(filterId)

    function handleFavorito(id) {


        setSelectLivro(...livros.filter((livro) =>
            livro.id === id
        ));

        const meuLivro = localStorage.getItem('livros');
        let livrosSalvos = (JSON.parse(meuLivro) || []);


        let hasLivro = livrosSalvos.some((livroSalvo) =>
            livroSalvo.id === selectLivro.id
        );

        if (hasLivro) {

            toast.info(`Voce ja possui o livro ${selectLivro.titulo} em seu favorito🤩`);
            return;
        }
        // if (selectLivro) {
        //     toast.info('lista vazia!');
        //     return;
        // }

        livrosSalvos.push(selectLivro);
        localStorage.setItem('livros', JSON.stringify(livrosSalvos));
        toast.success(`O livro ${selectLivro.titulo} foi salvo com sucesso!👍🏼`)



    }

    return (

        < S.MyContainer >


            <S.MyCol >

                <S.MyPesquisa fixed="top">
                    <form>
                        <label htmlFor='pesquisar'>Pesquisar :</label>
                        <input name='pesquisar'
                            id='pesquisar'
                            placeholder={`Pesquisar por ${paramsPesq}`}
                            onChange={(e) => setPesquisa(e.target.value)}
                            value={pesquisa}
                        />
                    </form>
                    <>
                        <S.MyButtonPesq>
                            <S.MyButtonPesq.Toggle variant="primary" id="dropdown-basic">

                                <FcDataConfiguration color='#fff' size={25} />

                            </S.MyButtonPesq.Toggle>

                            <S.MyButtonPesq.Menu className='menu'>

                                <S.MyButtonPesq.Item onClick={(e) => setParamsPesq('id')} className='id'>Id</S.MyButtonPesq.Item>
                                <S.MyButtonPesq.Item className='titulo' onClick={(e) => setParamsPesq('titulo')}>Titulo</S.MyButtonPesq.Item>

                            </S.MyButtonPesq.Menu>

                        </S.MyButtonPesq>


                    </>
                </S.MyPesquisa>



                {pesquisa === '' && (livros.map((livro, index, arr) => {
                    return (

                        <S.CardLivro key={livro.id}>
                            <S.MyCard style={{ width: '18rem' }}  >
                                <S.MyCard.Img variant="top" src="holder.js/100px180" onError={(e) => { e.target.onError = null; e.target.src = SemImage }} />
                                <S.MyCard.Body>
                                    <S.MyCard.Title className='titulo'>{livro.titulo}
                                        <S.MyFavorites onClick={() => handleFavorito(livro.id)} > <BsFillStarFill size={35} /></S.MyFavorites>
                                    </S.MyCard.Title>
                                    <S.MyCard.Text>
                                        {livro.descricao}
                                    </S.MyCard.Text>
                                    <S.MyButtom variant="primary"><BiCommentAdd color='#fff' size={25} /></S.MyButtom>

                                </S.MyCard.Body>
                            </S.MyCard>
                        </S.CardLivro>

                    )
                }))}
                {pesquisa !== '' && paramsPesq === 'titulo' && (filterTitulo.map((livro, index, arr) => {
                    return (

                        <S.CardLivro key={livro.id}>
                            <S.MyCard style={{ width: '18rem' }}  >
                                <S.MyCard.Img variant="top" src="holder.js/100px180" onError={(e) => { e.target.onError = null; e.target.src = SemImage }} />
                                <S.MyCard.Body>
                                    <S.MyCard.Title className='titulo'>{livro.titulo}
                                        <S.MyFavorites onClick={() => handleFavorito(livro.id)} > <BsFillStarFill size={35} /></S.MyFavorites>
                                    </S.MyCard.Title>
                                    <S.MyCard.Text>
                                        Some quick example text to build on the S.Mycard title and make up the
                                        bulk of the S.Mycard's content.
                                    </S.MyCard.Text>
                                    <S.MyButtom ><BiCommentAdd color='#fff' size={25} /></S.MyButtom>

                                </S.MyCard.Body>
                            </S.MyCard>
                        </S.CardLivro>

                    )
                }))}

                {pesquisa !== '' && paramsPesq === 'id' && (filterId.map((livro, index, arr) => {
                    return (

                        <S.CardLivro key={livro.id}>
                            <S.MyCard style={{ width: '18rem' }}  >
                                <S.MyCard.Img variant="top" src="holder.js/100px180" onError={(e) => { e.target.onError = null; e.target.src = SemImage }} />
                                <S.MyCard.Body>
                                    <S.MyCard.Title className='titulo'>{livro.titulo}
                                        <S.MyFavorites onClick={() => handleFavorito(livro.id)} > <BsFillStarFill size={35} /></S.MyFavorites>
                                    </S.MyCard.Title>
                                    <S.MyCard.Text>
                                        Some quick example text to build on the S.Mycard title and make up the
                                        bulk of the S.Mycard's content.
                                    </S.MyCard.Text>
                                    <S.MyButtom variant="primary"><BiCommentAdd color='#fff' size={25} /></S.MyButtom>

                                </S.MyCard.Body>
                            </S.MyCard>
                        </S.CardLivro>

                    )
                }))}

                {pesquisa !== '' && filterId && (


                    <S.EmptyFilters >
                        <h1>O livro que esta pesquisando ainda no nosso acervo!</h1>
                    </S.EmptyFilters>


                )}


               
            </S.MyCol>

        </S.MyContainer >
    );
}