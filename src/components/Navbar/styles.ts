import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    z-index: 1;
    color: #ff9900;
    padding: 20px;
    font-weight: bolder;
    box-shadow: 0 0px 10px 2px #ededed;
    background-color: #fff;

    img {
        height: 20px;
        margin: auto 0;
        margin-right: 10px;
    }

    ul {
        display: flex;
        margin-left: auto;
        list-style-type: none;
        
        li {
            margin-left: 2px;
            margin-right: 20px;
        }
    }
`;