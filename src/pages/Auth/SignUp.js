import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../components/Logo";
import { postSignUp } from "../../service/myWalletService";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();

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
            })
            .catch((err) => {
                resetForm();
                alert("Algo deu errado. Tente novamente.");
                console.log(err);
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
                />

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

                <input
                    placeholder="Confirme a senha"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <div className="button-signup">
                    <button>
                        Cadastrar
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

    h2 {
        margin-top: 30px;
        font-size: 15px;
        text-decoration: underline;
    }
`