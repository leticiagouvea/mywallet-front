import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { updateValue } from "../../service/myWalletService";
import { NewValueContainer } from "./NewInput";

export default function UpdateOutput() {
    const { cash, setCash, text, setText, id } = useContext(UserContext);
    console.log(id);

    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();

        const body = {
            value: Number(cash),
            text
        }

        updateValue(id, body)
            .then(() => {
                resetForm();
                navigate("/wallet");
            })
            .catch((err) => {
                resetForm();
                console.log(err);
                alert("Algo deu errado. Tente novamente.")
            })
    }

    function resetForm() {
        setCash("");
        setText("");
    }

    return (
        <NewValueContainer>
            <div className="top">
                <h1>Editar saída</h1>

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
                />

                <input
                    placeholder="Descrição"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                />

                <button>Atualizar saída</button>
            </form>
        </NewValueContainer>
    )
}