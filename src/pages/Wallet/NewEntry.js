import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NewEntry() {
    return (
        <NewEntryContainer>
            <div className="top">
                <h1>Nova entrada</h1>
                <Link to="/mainpage">
                    <ion-icon name="return-down-forward-outline"></ion-icon>
                </Link>
            </div>

            <form>
                <input
                    placeholder="Valor"
                    type="number"
                    required
                />

                <input
                    placeholder="Descrição"
                    type="text"
                    required
                />

                <button>Salvar entrada</button>
            </form>
        </NewEntryContainer>
    )
}

const NewEntryContainer = styled.div`
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
`