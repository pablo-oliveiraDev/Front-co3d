import React, { useState } from 'react';
import * as S from '../../Style/UpDeleteModal';
import Co3d from '../../assets/Image/co3d.png';
import api from '../../Services/Api';
import { toast } from 'react-toastify';

export default function UpDeleModal({ dataLivro }) {
    const [show, setShow] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [descr, setDescr] = useState('');
    const [takeId, setTakeId] = useState('');


    const [loading, setLoading] = useState(false);
    const [readDelete, setReadDelete] = useState(false);
    const handleClose = () => setShow(false);

    function TakeDados() {
        setShow(true);
        setNome(dataLivro.nome);
        setEmail(dataLivro.email);
        setTitulo(dataLivro.titulo);
        setAutor(dataLivro.autor);
        setDescr(dataLivro.descricao);
        setTakeId(dataLivro.id);

    }

    async function handleUpdate(id, nome, email, titulo, autor, descr) {
        setLoading(true);
        if (id !== '' && nome !== '' && email !== '' && titulo !== '' && autor !== '' && descr !== '') {
            await api.put(`/livros/${id}`, {
                nome: nome,
                email: email,
                titulo: titulo,
                autor: autor,
                descricao: descr
            })
                .then(() => {
                    setNome('');
                    setEmail('');
                    setTitulo('');
                    setAutor('');
                    setDescr('');
                    setShow(false);
                    window.location.reload();
                    toast.success(`o livro ${titulo} foi atualizado com sucesso!📖`);
                    setLoading(false);



                }).catch((error) => {
                    setLoading(false);
                    console.log(error);
                    toast.error('Houve um erro ao tentar cadastrar esse livro😥');

                })
        } else {
            setLoading(false);
            toast.info('Os campos de cadastro não podem ficar vazios!');
            return;
        }
    }

    async function handleDelete(id) {
        setReadDelete(true);
        if (id) {
            await api.delete(`/livros/${id}`)
            
                .then(() => {
                    setNome('');
                    setEmail('');
                    setTitulo('');
                    setAutor('');
                    setDescr('');
                    window.location.reload();
                    toast.success(`o livro ${titulo} foi atualizado com sucesso!📖`);
                    setReadDelete(false);



                }).catch((error) => {
                    setReadDelete(false);
                    console.log(error);
                    toast.error('Houve um erro ao tentar cadastrar esse livro😥');

                })
        } else {
            setReadDelete(false);
            toast.info('Os campos de cadastro não podem ficar vazios!');
            return;
        }





    }

    return (
        <>
            <S.MyButton variant="primary" onClick={() => TakeDados()}>
                <S.MyGrConfigure size={35} />
            </S.MyButton>

            <S.MyModal show={show} onHide={handleClose}>
                <S.MyModal.Header closeButton className='textoTop'>
                    <S.MyModal.Title className='imgETitulo'><img src={Co3d} alt='imagem topo modal' />Editar Livro</S.MyModal.Title>
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
                <S.MyModal.Footer className='footerModal'>
                    <S.MyButton variant="danger" onClick={() => handleDelete(takeId)}>
                        {readDelete=== true? 'Deletando...': 'Del'}
                    </S.MyButton>
                    <S.MyButton variant="secondary" onClick={handleClose}>
                        Close
                    </S.MyButton>
                    <S.MyButton variant="primary" onClick={() => handleUpdate(takeId, nome, email, titulo, autor, descr)}>
                        {loading === true ? 'Salvando...' : 'Save Changes'}
                    </S.MyButton>
                </S.MyModal.Footer>
            </S.MyModal>
        </>
    );
}
