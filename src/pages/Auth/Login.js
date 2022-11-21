import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../components/Logo";
import { postLogin } from "../../service/myWalletService";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();

        const body = {
            email,
            password
        }

        postLogin(body)
            .then((res) => {
                resetForm();
                localStorage.setItem("user", JSON.stringify(res.data.name));
                localStorage.setItem("token", JSON.stringify(res.data.token));
                navigate("/wallet");
            })
            .catch((err) => {
                resetForm();
                alert("Algo deu errado. Tente novamente.");
                console.log(err);
            })
    }

    function resetForm() {
        setEmail("");
        setPassword("");
    }

    return (
        <LoginContainer>
            <Logo />

            <form onSubmit={sendForm}>
                <input
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <div className="button-login">
                    <button>
                        Entrar
                    </button>
                </div>
            </form>

            <Link to="/sign-up">
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