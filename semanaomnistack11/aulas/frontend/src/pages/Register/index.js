import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a 
                        encontrarem os casos de sua ONG.</p>

                    <Link className="back-link" to="/register">
                    < FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </section>
                <form>


                </form>
            </div>
        </div>
    );
}