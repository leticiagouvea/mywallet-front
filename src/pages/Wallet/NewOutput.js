import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import UserContext from "../../context/UserContext";
import { postValue } from "../../service/myWalletService";
import { NewValueContainer } from "./NewInput";

export default function NewOutput() {
    const { cash, setCash, text, setText } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();
        setLoading(true);

        const body = {
            value: Number(cash),
            text,
            type: "output"
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
                <h1>Nova saída</h1>

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
                        ("Salvar saída")}
                </button>
            </form>
        </NewValueContainer>
    )
}