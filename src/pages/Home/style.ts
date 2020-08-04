import styled from 'styled-components'

export const Container = styled.div`
    overflow: hidden;
    max-width: 100vw;
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

    img {
        flex: 1;
        position: absolute;
        left: 0; top: 0;
        z-index: -1;
        object-fit: cover;
        filter: blur(5px) brightness(0.3);
        transform: scale(1.1);
        width: 100%;
        height: 120%;
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

        button {
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