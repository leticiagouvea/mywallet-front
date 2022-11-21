import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import styled from "styled-components";
import Logo from "../../components/Logo";
import { postLogin } from "../../service/myWalletService";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();
        setLoading(true);

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
                setLoading(false);
            })
            .catch((err) => {
                resetForm();
                alert("Algo deu errado. Tente novamente.");
                console.log(err);
                setLoading(false);
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
                    disabled={loading}
                />

                <input
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                />

                <div className="button-login">
                    <button disabled={loading}>
                        {loading ?
                            (<ThreeDots color="#ffffff" height={40} width={40} />) :
                            ("Entrar")}
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

    button {
        &:disabled {
        opacity: 0.7;
        cursor: default;
        display: flex;
        justify-content: center;
        align-items: center;
        }
    }

    h2 {
        margin-top: 30px;
        font-size: 15px;
        text-decoration: underline;
    }
`