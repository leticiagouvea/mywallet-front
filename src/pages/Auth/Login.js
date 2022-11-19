import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../components/Logo";

export default function Login() {
    return (
        <LoginContainer>
            <Logo />

            <form>
                <input
                    placeholder="E-mail"
                    type="email"
                    required
                />

                <input
                    placeholder="Senha"
                    type="password"
                    required
                />

                <Link to="/mainpage">
                    <div className="button-login">
                        <button>
                            Entrar
                        </button>
                    </div>
                </Link>
            </form>

            <Link to="/signup">
                <h2>Não tem uma conta? Cadastre-se!</h2>
            </Link>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    min-width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 50px;

    &:hover {
        h1 {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        }

        img {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
        }
    }

    form {
        margin-top: 30px;
    }

    h2 {
        margin-top: 30px;
        font-size: 15px;
        text-decoration: underline;
    }
`