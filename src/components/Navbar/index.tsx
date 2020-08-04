import React from 'react'
import { Container } from './styles'

import { BsFillHouseFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { FaInfoCircle } from 'react-icons/fa'

import logo from '../../assets/logo.png'

export const Navbar: React.FC = () => {
    return (
        <Container>
            <img src={logo} alt="" />
            <p>Kappa Fire</p>

            <ul>
                <BsFillHouseFill />
                <li>Home</li>
                <FaShoppingCart />
                <li>Loja</li>
                <FaInfoCircle />
                <li>Sobre</li>
            </ul>
        </Container >
    )
}