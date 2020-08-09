import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Container, Section, Header, Spacer } from './style'

import { Link } from 'react-router-dom'

export const Home: React.FC = () => {
    return (
        <Container>
            <Navbar />
            <Header>
                <div>
                    <img src="https://i.pinimg.com/originals/62/e9/c7/62e9c7530375a266c68ea510ac40ff23.gif" alt="" />
                </div>
                <h1>Fazemos <b>jogos</b> e trabalhamos com <b>experiências</b></h1>
                <p>Usando <b>tecnologias recentes</b> do mercado</p>
                <p>porque você <b>confia na gente</b></p>

                <Link to={`${process.env.PUBLIC_URL}/tbw`}>
                    <button>
                        <h2>Nosso último jogo</h2>
                    </button>
                </Link>
            </Header>
            <Section>
                <img src="https://media.discordapp.net/attachments/419872942105559046/453265592271503371/unity-icon.png?width=475&height=475" alt="" />
                <div>
                    <h1>Usamos <b>Unity</b></h1>
                    <p> Um dos <b>melhores motores gráficos</b> reconhecidos do mercado, utilizada<br />
                        por diversos jogos famosos como Saiyan Arena, Superhot, Crossy Road,<br />
                        Super Mario Run, Subway Surfers e <b>muito mais</b>!
                    </p>
                </div>
            </Section>
            <Spacer />
            <Section>
                <div>
                    <h1>Seja um <b>divulgador</b></h1>
                    <p> <b>Acreditamos</b> naqueles que divulgam nossa marca.<br />
                        Seja um youtuber ou divulgador de nossos jogos e<br />
                        <b>ganhe recompensas</b> com isso!
                    </p>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="" />
            </Section>
            <Footer />
        </Container>
    )
}