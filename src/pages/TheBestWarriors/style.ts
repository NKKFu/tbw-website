import styled from 'styled-components'

export const Container = styled.div`
    overflow: hidden;
    max-width: 100vw;
`;

export const Spacer = styled.hr`
    margin: 50px auto;
    width: 65vw;
    border-color: rgba(255,255,255,0.3);
`;

export const Header = styled.div`
    position: relative;
    padding-top: 256px;
    height: 100vh;
    width: 100vw;
    text-align: center;
    color: #FFF;
    display: flex;
    flex-direction: column;

    div {
        background-color: black;
        background: no-repeat center center fixed; 
        background-size: cover;
        display: block;
        left:-50px;
        top:-50px;
        bottom:-50px;
        position: fixed;
        right: -50px;
        z-index: -1;
        img {
            /* clip-path: inset(0); */
            filter: blur(15px) brightness(0.3);
            height: 120%;
            width: 120%;
        }   
    }

    h1 {
        margin-bottom: 10px;
    }
    p {
        font-size: 20px;
    }
    b { 
        color: #ff9900;
    }

    a {
        margin: 0 auto;
        margin-top: 10vh;
        width: 250px;
        text-decoration: none;

        button {
            justify-items: stretch;
            align-items: center;
            display: flex;
            width: 100%;
            border: 0;
            border-radius: 3px;
            padding: 20px;
            background-color: #ff9900;
            color: #FFF;
            text-shadow: 0px 0px 20px #fff;
            transition: all 0.3s;
            cursor: pointer;

            &:hover {
                transform: translateY(-10px) scale(1.1);
                text-shadow: 0px 0px 5px #fff;
                background-color: #e88b00;
                box-shadow: 0px 5px 25px 3px rgba(232, 139, 0,0.8);
            }
            
            h2 {
                text-align: center;
                margin-left: auto;
                margin-right: 5px;
            }
            svg {
                margin-right: auto;
                margin-left: 5px;
            }
        }
    }
`;

export const Section = styled.div`
    background-color: #fff;
    display: flex;
    width: 100vw;
    padding: 100px 150px;
    
    img {
        width: 300px;   
        transition: transform 1s ease-in-out;

        &:hover {
            transform: rotate(320deg);
        }
        margin: 0 auto;
    }

    div {
        margin: 0 auto;
        /* margin: 0 100px; */
        /* margin-left: auto;    */

        h1 {
            margin-bottom: 20px;
        }

        p {
            font-size: 19px;
            line-height: 25px;
        }
        
        b { 
            color: #ff9900;
            text-shadow: 0px 0px 5px rgba(255, 153, 0, 0.5);
        }

        a {
            display: flex;
            width: max-content;
            background: #ffddab;
            padding: 20px 40px;
            text-decoration: none;
            color: #9c5d00;
            text-shadow: 0px 0px 10px rgba(255, 153, 0, 1);
            transition: background-color 0.3s, color 0.3s;
            border-radius: 5px;

            &:hover {
                color: #d18b24;
                background: #ffc775;
            }
        }
    }

    @media (max-width: 1100px) {
        padding: 20px;
        flex-direction: column;

        img {
            margin: 100px auto;
            /* display: none; */
        }

        div {
            margin: 0;
        }
    }
`;