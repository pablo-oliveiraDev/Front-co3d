import React, { useEffect, useState } from 'react';
import * as S from '../../Style/CadastroModal';
import { BiCommentAdd } from 'react-icons/bi';
import Co3d from '../../assets/Image/co3d.png';
import api from '../../Services/Api';
import { toast } from 'react-toastify';

export default function CadastroModal() {
    const [show, setShow] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [descr, setDescr] = useState('');
    const [linkCapa, setLinkCapa] = useState('');

    const [loading, setLoading] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function postLivro(nome, email, titulo, autor, descr,linkCapa) {
        setLoading(true);
        if (nome !== '' && email !== '' && titulo !== '' && autor !== '' && descr !== '') {
            await api.post(`/livros`, {
                nome: nome,
                email: email,
                titulo: titulo,
                autor: autor,
                linkCapa: linkCapa,
                descricao: descr
            })
                .then(() => {
                    setNome('');
                    setEmail('');
                    setTitulo('');
                    setAutor('');
                    setLinkCapa('');
                    setDescr('');
                    toast.success(`o livro ${titulo} foi cadastrado com sucesso!📖`);
                    setLoading(false);
                    handleClose();

                }).catch((error) => {
                    setLoading(false);
                    console.log(error);
                    toast.error('Houve um erro ao tentar cadastrar esse livro😥');

                })
        } else {
            toast.info('Os campos de cadastro não podem ficar vazios!');
            return;
        }
    }

    return (
        <>
            <S.MyButton variant="primary" onClick={handleShow}>
                <BiCommentAdd color='#fff' size={35} />
            </S.MyButton>

            <S.MyModal show={show} onHide={handleClose}>
                <S.MyModal.Header closeButton className='textoTop'>
                    <S.MyModal.Title className='imgETitulo'><img src={Co3d} alt='imagem topo modal' />Novo Livro</S.MyModal.Title>
                </S.MyModal.Header>
                <S.MyModal.Body className='bodyModal'>

                    <S.MyForm>
                        <S.MyInputGroup size="lg" className='listInputNome'>
                            <S.MyInputGroup.Text className='textList'  >Nome</S.MyInputGroup.Text>
                            <S.MyForm.Control
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                                placeholder='Digite aqui o seu nome completo'
                                onChange={(e) => setNome(e.target.value)}
                                value={nome}
                            />

                        </S.MyInputGroup><br />

                        <S.MyInputGroup size="lg" className='listInputEmail'>
                            <S.MyInputGroup.Text id="" className='textList' >Email</S.MyInputGroup.Text>
                            <S.MyForm.Control
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                                placeholder='Digite aqui o seu melhor email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            
                        </S.MyInputGroup><br />
                        <S.MyInputGroup size="lg" className='listInputTitulo'>
                            <S.MyInputGroup.Text id="" className='textList' >Titulo</S.MyInputGroup.Text>
                            <S.MyForm.Control
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                                placeholder='Digite aqui o nome do livro'
                                onChange={(e) => setTitulo(e.target.value)}
                                value={titulo}
                            />

                        </S.MyInputGroup><br />

                        <S.MyInputGroup size="lg" className='listInputAutor'>
                            <S.MyInputGroup.Text id="" className='textList' >Autor</S.MyInputGroup.Text>
                            <S.MyForm.Control
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                                placeholder='Digite aqui o nome do Autor'
                                onChange={(e) => setAutor(e.target.value)}
                                value={autor}
                            />

                        </S.MyInputGroup> <br />

                        <S.MyInputGroup size="lg" className='listInputDesc'>
                            <S.MyInputGroup.Text id="" className='textList' >Link</S.MyInputGroup.Text>
                            <S.MyForm.Control
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                                placeholder='Digite aqui a descrição do livro'
                                onChange={(e) => setLinkCapa(e.target.value)}
                                value={linkCapa}
                            />

                        </S.MyInputGroup><br />

                        <S.MyInputGroup size="lg" className='listInputDesc'>
                            <S.MyInputGroup.Text id="" className='textList' >Descrição</S.MyInputGroup.Text>
                            <S.MyForm.Control
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                                placeholder='Digite aqui a descrição do livro'
                                onChange={(e) => setDescr(e.target.value)}
                                value={descr}
                            />

                        </S.MyInputGroup><br />
                       

                    </S.MyForm>

                </S.MyModal.Body>
                <S.MyModal.Footer>
                    <S.MyButton variant="secondary" onClick={handleClose}>
                        Close
                    </S.MyButton>
                    <S.MyButton variant="primary" onClick={(e) => postLivro(nome, email, titulo, autor, descr)}>
                        {loading === true ? 'Salvando...' : 'Save Changes'}
                    </S.MyButton>
                </S.MyModal.Footer>
            </S.MyModal>
        </>
    );
}
