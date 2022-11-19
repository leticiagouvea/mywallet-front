import styled from "styled-components";
import LogoIcon from "../assets/img/purplemoney.png";

export default function Logo() {
    return (
        <LogoContainer>
            <img src={LogoIcon} alt="money-icon" />
            <h1>MyWallet</h1>
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        font-weight: 400;
        margin-top: 15px;
        text-shadow: 1px 1px 1px #000000;
        transition: all 0.5s;
    }

    img {
        width: 50px;
        transition: all 0.5s;
    }
`

