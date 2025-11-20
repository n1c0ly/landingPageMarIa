import './style.css';
import LogoMarIA from "../../../images/MarIa.svg"
import avatarMarIa from '../../../images/avatarMarIa.svg';


export const Footer = () => {
    return (
        <footer>
            <div className="container-footer1">
                <img src={LogoMarIA} alt="" />
                <div className="list-footer-content">
                    <h2>Quick links</h2>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Features</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}