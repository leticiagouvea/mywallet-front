import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Records from "../../components/Records";

export default function Main() {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <Page>
            <div className="top">
                <h1>Olá, {user}</h1>
            
                <ion-icon name="log-out-outline" onClick={() => {
                    localStorage.clear();
                    navigate("/");
                }}></ion-icon>
                
            </div>

            <Records />

            <div className="buttons">
                <Link to="/new-input">
                    <button className="new-record">
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova <br /> entrada</p>
                    </button>
                </Link>

                <Link to="/new-output">
                    <button className="new-record">
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <p>Nova <br /> saída</p>
                    </button>
                </Link>
            </div>
        </Page>
    )
}

const Page = styled.div`
    padding-top: 50px;
    min-width: 375px;

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 326px;
        height: 60px;
        margin: 0 auto;

        h1 {
            width: 290px;
            font-size: 26px;
        }

        ion-icon {
            font-size: 30px;
            cursor: pointer;
        }
    }

    .buttons {
        width: 326px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding-bottom: 50px;

        .new-record {
            width: 155px;
            height: 100px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            padding: 10px;
            font-size: 16px;
            text-align: left;

            ion-icon {
                font-size: 26px;
            }
        }
    }
`