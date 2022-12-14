import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import styled from "styled-components";
import UserContext from "../../context/UserContext";
import { postValue } from "../../service/myWalletService";

export default function NewInput() {
    const { cash, setCash, text, setText } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();
        setLoading(true);

        const body = {
            value: Number(cash),
            text,
            type: "input"
        }

        postValue(body)
            .then(() => {
                resetForm();
                navigate("/wallet");
                setLoading(false);
            })
            .catch((err) => {
                resetForm();
                console.log(err);
                alert("Algo deu errado. Tente novamente.");
                setLoading(false);
            })
    }

    function resetForm() {
        setCash("");
        setText("");
    }

    return (
        <NewValueContainer>
            <div className="top">
                <h1>Nova entrada</h1>
                
                <ion-icon name="return-down-forward-outline" onClick={() => {
                    resetForm();
                    navigate("/wallet");
                }}></ion-icon>
            </div>

            <form onSubmit={sendForm}>
                <input
                    placeholder="Valor"
                    type="number"
                    value={cash}
                    onChange={(e) => setCash(e.target.value)}
                    required
                    disabled={loading}
                />

                <input
                    placeholder="Descrição"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    disabled={loading}
                />

                <button disabled={loading}>
                    {loading ?
                        (<ThreeDots color="#ffffff" height={40} width={40} />) :
                        ("Salvar entrada")}
                </button>
            </form>
        </NewValueContainer>
    )
}

const NewValueContainer = styled.div`
    min-width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding-top: 50px;

    .top {
        width: 326px;
        height: 40px;
        margin: 0 auto;
        margin-bottom: 10px;
        text-align: left;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ion-icon {
            font-size: 26px;
            cursor: pointer;
        }
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
`
export { NewValueContainer };