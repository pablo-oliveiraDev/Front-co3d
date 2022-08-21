import React from 'react';
import { FaStepBackward, FaStepForward, FaForward, FaBackward } from 'react-icons/fa';

import * as S from '../../Style/FooterPages';


export default function FooterPages({ setCurrentPage, pages, currentPage }) {
   

    function backAction() {
        if (currentPage >= (pages - 1)) {
            setCurrentPage(currentPage - 1)
        }else{
            
        }
    }

    function nextAction() {
        if (currentPage < (pages - 1)) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <S.Header>
            <S.MySpan>Pages</S.MySpan>
            <S.MyPages>
                <button

                    onClick={() => setCurrentPage(0)}
                >
                    <FaBackward size={20} />
                </button>
                <button
                   
                    onClick={() => backAction()}
                >
                    <FaStepBackward size={20} />
                </button>
                {Array.from(Array(pages), (item, index) => {
                    return <S.MyButton
                        key={index}

                        value={index}
                        onClick={(e) => setCurrentPage(Number(e.target.value))}
                    >
                        {index + 1}
                    </S.MyButton>
                })}

                <button

                    onClick={() => nextAction()}
                >
                    <FaStepForward size={20} />
                </button>
                <button

                    onClick={() => setCurrentPage(pages - 1)}
                >
                    <FaForward size={20} />
                </button>
            </S.MyPages>


        </S.Header>
    );
}