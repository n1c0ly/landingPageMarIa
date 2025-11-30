import "./style.css"
import {Component_line_question} from "../line_question"

export const Questions_space = () => {
    return (
        <>
            <section className="questions-space">
                <div className="content-up-questions">
                    <h2>Perguntas <span>Frequentes</span></h2>
                    <p>Tem dúvidas sobre como funciona nosso jogo? Reunimos aqui as perguntas mais comuns para que você possa se preparar e embarcar com total confiança.</p>
                </div>

                <div className="container_questions">
                    <Component_line_question
                    question_props={"Para qual idade o jogo é recomendado?"}
                    />
                   <Component_line_question
                    question_props={"O jogo é gratuito?"}
                    />
                   <Component_line_question
                    question_props={"Como faço para jogar?"}
                    />
                   <Component_line_question
                    question_props={"O jogo funciona em celular e tablet?"}
                    />
                   <Component_line_question
                    question_props={"É necessário criar uma conta para jogar?"}
                    />

                </div>

            </section>
        </>
    )
}