import React from 'react';
import * as S from '../../Style/Home';
import imglivro from '../../assets/Image/co3d.png';
import { useEffect, useState } from 'react';
import api from '../../Services/Api';
import { BsFillStarFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { FcDataConfiguration } from 'react-icons/fc';
import CadastroModal from '../../Components/CadastroModal';
import UpDeleteModal from '../../Components/UpDeleteModal';
import FooterPages from '../../Components/FooterPages';





export default function Home() {
    const [livros, setLivros] = useState([]);
    const [selectLivro, setSelectLivro] = useState([]);
    const [pesquisa, setPesquisa] = useState('');
    const [paramsPesq, setParamsPesq] = useState('titulo');
    const [filterTitulo, setFilterTitulo] = useState([]);
    const [filterId, setFilterId] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(0);
    const [substrDescr, setSubstrDescr] = useState(10);
    const [substrTitulo, setSubstrTitulo] = useState(18);





    const pages = Math.ceil(livros.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = livros.slice(startIndex, endIndex)





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





    function handleFavorito(id) {


        setSelectLivro(...livros.filter((livro,index,arr) =>
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
                        <CadastroModal />

                    </>
                </S.MyPesquisa>






                {pesquisa === '' && (currentItems.map((livro, index, arr) => {
                    return (

                        <S.CardLivro key={livro.id}>
                            <S.MyCard style={{ width: '16rem' }}  >
                                <S.MyCard.Img variant="top" src={imglivro} />
                                <S.MyCard.Body>
                                    <S.MyCard.Title className='titulo'
                                        onMouseOver={() => setSubstrTitulo(livro.titulo.length)}
                                        onMouseOut={() => setSubstrTitulo(18)}
                                    >
                                        {livro.titulo.substring(0, substrTitulo)}

                                    </S.MyCard.Title>

                                    <S.MyCard.Text className='descricao'>
                                        <span onMouseOver={() => setSubstrDescr(livro.descricao.length)}
                                            onMouseOut={() => setSubstrDescr(10)}
                                        >Descrição :{livro.descricao.substring(0, substrDescr)}</span>
                                    </S.MyCard.Text>
                                    <S.MyCard.Text>
                                        <span>Autor: {livro.autor}</span>

                                    </S.MyCard.Text>
                                    <S.MyCard.Text>
                                    <span>Enviado por: {livro.nome}</span>
                                    </S.MyCard.Text>


                                        
                                    <S.MyBtnCards>

                                        <UpDeleteModal dataLivro={livro} />
                                        <S.MyFavorites onClick={() => handleFavorito(livro.id)} > <BsFillStarFill color='#fff' size={35} /></S.MyFavorites>
                                    </S.MyBtnCards>
                                </S.MyCard.Body>
                            </S.MyCard>
                        </S.CardLivro>

                    )
                }))}
                {pesquisa !== '' && paramsPesq === 'titulo' && (filterTitulo.map((livro, index, arr) => {
                    return (

                        <S.CardLivro key={livro.id}>
                            <S.MyCard style={{ width: '18rem' }}  >
                                <S.MyCard.Img variant="top" src={imglivro} />
                                <S.MyCard.Body>
                                    <S.MyCard.Title className='titulo'
                                        onMouseOver={() => setSubstrTitulo(livro.titulo.length)}
                                        onMouseOut={() => setSubstrTitulo(18)}
                                    >
                                        {livro.titulo.substring(0, substrTitulo)}

                                    </S.MyCard.Title>
                                    <S.MyCard.Text className='descricao'>
                                        <span onMouseOver={() => setSubstrDescr(livro.descricao.length)}
                                            onMouseOut={() => setSubstrDescr(10)}
                                        >Descrição :{livro.descricao.substring(0, substrDescr)}</span>
                                        <div >
                                            <span>Autor: {livro.autor}</span>
                                        </div>
                                        <div>
                                            <span>Enviado por: {livro.nome}</span>
                                        </div>
                                    </S.MyCard.Text>
                                    <S.MyBtnCards>

                                        <UpDeleteModal dataLivro={livro.id} />
                                        <S.MyFavorites onClick={() => handleFavorito(livro.id)} > <BsFillStarFill color='#fff' size={35} /></S.MyFavorites>
                                    </S.MyBtnCards>
                                </S.MyCard.Body>
                            </S.MyCard>
                        </S.CardLivro>

                    )
                }))}

                {pesquisa !== '' && paramsPesq === 'id' && (filterId.map((livro, index, arr) => {
                    return (

                        <S.CardLivro key={livro.id}>
                            <S.MyCard style={{ width: '13rem' }}  >
                                <S.MyCard.Img variant="top" src={imglivro} />
                                <S.MyCard.Body>
                                    <S.MyCard.Title className='titulo'
                                        onMouseOver={() => setSubstrTitulo(livro.titulo.length)}
                                        onMouseOut={() => setSubstrTitulo(18)}
                                    >
                                        {livro.titulo.substring(0, substrTitulo)}

                                    </S.MyCard.Title>
                                    <S.MyCard.Text className='descricao'>
                                        <span onMouseOver={() => setSubstrDescr(livro.descricao.length)}
                                            onMouseOut={() => setSubstrDescr(10)}
                                        >Descrição :{livro.descricao.substring(0, substrDescr)}</span>
                                        <div >
                                            <span>Autor: {livro.autor}</span>
                                        </div>
                                        <div>
                                            <span>Enviado por: {livro.nome}</span>
                                        </div>
                                    </S.MyCard.Text>
                                    <S.MyBtnCards>

                                        <UpDeleteModal dataLivro={livro} />
                                        <S.MyFavorites onClick={() => handleFavorito(livro.id)} > <BsFillStarFill color='#fff' size={35} /></S.MyFavorites>
                                    </S.MyBtnCards>
                                </S.MyCard.Body>
                            </S.MyCard>
                        </S.CardLivro>

                    )
                }))}



                {pesquisa !== '' && (filterTitulo.length === 0 && filterId.length === 0) && (


                    <S.EmptyFilters >
                        <h1>O livro que esta pesquisando ainda não consta em nosso acervo!😥</h1>
                    </S.EmptyFilters>


                )}

                <FooterPages setCurrentPage={setCurrentPage}
                    pages={pages}
                    currentPage={currentPage}
                />
            </S.MyCol>

        </S.MyContainer >
    );
}