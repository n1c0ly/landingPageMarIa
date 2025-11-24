import './style.css';
import innovationIcon from '../../../images/innovationIcon (1).svg';
import simplicityIcon from '../../../images/simplicityIcon (1).svg';
import knowledgeIcon from '../../../images/knowledgeIcon (1).svg';

export const Cards = () => {
    return (
        <section>

            <div className="doubleCardContainer">
                <div className="doubleCard">
                    <img src={simplicityIcon} alt="" />
                    <h3>Simplicidade</h3>
                </div>
                <h4>Diversão Garantida</h4>
                <p>Gráficos minimalistas desenvolvidos com pixel art totalmente artesanal, criando um visual único que combina simplicidade, estilo retrô e personalidade em cada detalhe.</p>
            </div>

            <div className="doubleCardContainer">
                <div className="doubleCard">
                    <img src={innovationIcon} alt="" />
                    <h3>Inovação</h3>
                </div>
                <h4>Conscientização com as ODS</h4>
                <p>Uma integração verdadeira entre conscientização e sustentabilidade, unindo informação, propósito e impacto para criar uma experiência que inspira mudanças reais.</p>
            </div>

            <div className="cardDownContainer">
                <div className="cardDown">
                    <img src={knowledgeIcon} alt="" />
                    <h3>Aprendizagem</h3>
                </div>
                <h4>Gamificação com reciclagem</h4>
                <p>Derrotar o lixo e proteger o planeta? Uma missão irresistível para quem deseja fazer a diferença e devolver a vida aos cantos mais preciosos desse mundo mágico.</p>
            </div>

        </section>
    );
};
