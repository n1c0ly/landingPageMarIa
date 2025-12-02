import "./style.css"
import EnemyMetal from "../../../assets/images/enemymetal.svg"
import EnemyGlass from "../../../assets/images/enemyGlass.svg"
import EnemyPlast from "../../../assets/images/enemyPlast.svg"
export const Enemys = () => {
    return(
        <section className="enemyssection">
        <h2>Explore <span> Desafios e inimigos</span> variados</h2>
        <div className="container-img-enemy">
            <img src={EnemyMetal} alt="" loading='lazy'/>
            <img src={EnemyGlass} alt="" loading='lazy'/>
            <img src={EnemyPlast} alt="" loading='lazy' />
        </div>
        </section>
    )
}