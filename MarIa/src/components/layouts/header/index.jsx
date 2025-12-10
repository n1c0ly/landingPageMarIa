import React, { useState } from 'react';
import avatarMarIa from '../../../assets/images/avatarMarIa.svg';
import './style.css';

export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const navClass = `nav-header ${isMenuOpen ? 'active' : ''}`;

    return (
        <header>
            <h1>Mar<span>Ia</span></h1>

            {/* BOTÃO TOGGLE: Visível apenas no Mobile */}
            <button
                className='menu-toggle'
                onClick={handleToggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="nav-menu-list"
            >

                {isMenuOpen ? '✕' : '☰'}
            </button>

            <nav className={navClass} id="nav-menu-list">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre nós</a></li>
                    <li><a href="">Jogos</a></li>
                    <li><a href="">Serviços</a></li>
                </ul>
            </nav>

            <img src={avatarMarIa} alt="Avatar personagem MarIa" loading='lazy'/>
    
        </header>
    );
};