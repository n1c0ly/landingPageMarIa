import "./style.css"
import { Component_line_question } from "../line_question"

export const Questions_space = () => {

    const faqData = [
        {
            id: 1,
            question: "Para qual idade o jogo é recomendado?",
            answer: "Nosso jogo é recomendado para jogadores a partir de 12 anos. Ele contém desafios de estratégia e interação online que são ideais para essa faixa etária e adultos."
        },
        {
            id: 2,
            question: "O jogo é gratuito?",
            answer: "Sim! O jogo é totalmente gratuito para baixar e jogar (Free-to-Play). Existem itens cosméticos opcionais que podem ser adquiridos na loja, mas eles não afetam a jogabilidade."
        },
        {
            id: 3,
            question: "Como faço para jogar?",
            answer: "É super simples! Basta clicar no botão 'Jogar Agora' no topo desta página. Se for no celular, você será direcionado para a loja de aplicativos; se for no PC, poderá baixar ou jogar direto no navegador."
        },
        {
            id: 4,
            question: "O jogo funciona em celular e tablet?",
            answer: "Com certeza! O jogo foi otimizado para rodar lisinho em dispositivos móveis (Android e iOS), além de tablets e computadores."
        },
        {
            id: 5,
            question: "É necessário criar uma conta para jogar?",
            answer: "Você pode jogar partidas rápidas como convidado, mas recomendamos fortemente criar uma conta gratuita. Assim, você salva seu progresso, suas conquistas e pode adicionar amigos."
        }
       
    ];

    return (
        <>
            <section className="questions-space">
                <div className="content-up-questions">
                    <h2>Perguntas <span>Frequentes</span></h2>
                    <p>Tem dúvidas sobre como funciona nosso jogo? Reunimos aqui as perguntas mais comuns para que você possa se preparar e embarcar com total confiança.</p>
                </div>

                <div className="container_questions">
                    {faqData.map((item) => (
                        <Component_line_question
                            key={item.id}
                            question_props={item.question}
                            answer_props={item.answer}
                        />
                    ))}
                </div>

            </section>
        </>
    )
}