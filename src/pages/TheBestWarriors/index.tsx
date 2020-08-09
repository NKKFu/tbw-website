import React, { useState, useEffect } from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { Container, Section, Header, Spacer } from './style'

import { FcAndroidOs } from 'react-icons/fc'

export const TheBestWarriors: React.FC = () => {
    const [appUrl, setAppUrl] = useState('');

    useEffect(() => {
        fetch('https://api.npoint.io/e364881421684c93b17c')
            .then(response => response.json())
            .then(data => setAppUrl(data.appUrl));
    });

    return (
        <Container>
            <Navbar />
            <Header>
                <div>
                    <img src="https://i.pinimg.com/originals/62/e9/c7/62e9c7530375a266c68ea510ac40ff23.gif" alt="" />
                </div>
                <h1><b>The Best Warriors</b></h1>
                <p>Batalhe, lute, divirta-se! <b>Junte-se à</b> esta comunidade</p>

                {appUrl && <>
                    <a href={`${appUrl}`}>
                        <button>
                            <h2>Download</h2>
                            <FcAndroidOs size={40} />
                        </button>
                    </a>
                    <i style={{ color: 'gray', marginTop: 20 }}>Versão em pré-alpha, em desenvolvimento</i>
                </>}
            </Header>
            <Section>
                <img src="https://cdn.iconscout.com/icon/free/png-512/discord-3-569463.png" alt="" />
                <div>
                    <h1>Nossa <b>Comunidade</b></h1>
                    <p> Fique por dentro de todas as notícias do nosso jogo, <br />
                        reporte falhas, dê sugestões, faça amigos,<br />
                        <b>entre em nossa comunidade</b> do Discord agora mesmo!
                    </p>
                    <br />
                    <a href="https://discord.gg/3yFNMtK">
                        <p>Entrar na comunidade</p>
                    </a>
                </div>
            </Section>
            <Spacer />
            <Section>
                <div>
                    <h1>Seja um <b>divulgador</b></h1>
                    <p> <b>Acreditamos</b> naqueles que divulgam nossa marca.<br />
                        Seja um youtuber ou divulgador de nossos jogos e<br />
                        <b>ganhe recompensas</b> em nossos jogos!
                    </p>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="" />
            </Section>
            <Footer />
        </Container>
    )
}