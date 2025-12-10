import React, { useState } from "react"; 
import "./style.css"; 

export const Component_line_question = ({ question_props, answer_props }) => {
    const [estaAberto, setEstaAberto] = useState(false);

    const alternarResposta = () => {
        setEstaAberto(!estaAberto);
    };
    return (
        <div className="card-pergunta" onClick={alternarResposta}>
            
            <div className="cabecalho-pergunta">
                <h3>{question_props}</h3>
                <span className="icone">
                    {estaAberto ? "-" : "+"}
                </span>
            </div>


            {estaAberto && (
                <div className="corpo-resposta">
                    <p>{answer_props || "Resposta indisponível no momento."}</p>
                </div>
            )}
            
        </div>
    );
};