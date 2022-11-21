import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import styled from "styled-components";
import Logo from "../../components/Logo";
import { postSignUp } from "../../service/myWalletService";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();
        setLoading(true);

        const body = {
            name,
            email,
            password,
            confirmPassword
        }

        if(password !== confirmPassword) {
            setPassword("");
            setConfirmPassword("");
            alert("Senhas não conferem. Digite novamente.");
        }

        postSignUp(body) 
            .then(() => {
                resetForm();
                navigate("/");
                setLoading(false);
            })
            .catch((err) => {
                resetForm();
                alert("Algo deu errado. Tente novamente.");
                console.log(err);
                setLoading(false);
            });
    }

    function resetForm() {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return (
        <RegisterContainer>
            <Logo />

            <form onSubmit={sendForm}>
                <input
                    placeholder="Primeiro nome"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={loading}
                />

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

                <input
                    placeholder="Confirme a senha"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    disabled={loading}
                />

                <div className="button-signup">
                    <button disabled={loading}>
                        {loading ?
                            (<ThreeDots color="#ffffff" height={40} width={40} />) :
                            ("Cadastrar")}
                    </button>
                </div>
            </form>

            <Link to="/">
                <h2>Já tem uma conta? Entre agora!</h2>
            </Link>
        </RegisterContainer>
    )
}

const RegisterContainer = styled.div`
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