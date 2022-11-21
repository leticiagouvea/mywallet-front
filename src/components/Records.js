import styled from "styled-components";

export default function Records() {
    return (
        <ContainerRecords>
            {/* <h1>Não há registros de entrada ou saída</h1> */}

            <Extract>
                <div className="record">
                    <div className="left">
                        <div className="date">18/11</div>
                        <div className="description">Título</div>
                    </div>
                    <div className="value">434300</div>
                </div>
            </Extract>

            <Balance>
                <p>Saldo</p>
                <p>R$ 3547</p>
            </Balance>
        </ContainerRecords>
    )
}

const ContainerRecords = styled.div`
    width: 326px;
    height: 400px;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 10px;
    position: relative;
    background: linear-gradient(180deg, white 65%, #87c0f2 100%);

    h1 {
        width: 180px;
        color: #868686;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        position: absolute;
        left: 70px;
        top: 180px;
        line-height: 1.4;
    }
`

const Balance = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    color: #000000;
    position: absolute;
    bottom: 15px;
    left: 14px;
`

const Extract = styled.div`
    width: 320px;
    height: 340px;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    overflow-y: scroll;
    padding: 15px;
    margin: 0 auto;

    .record {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .left {
        display: flex;
    }

    .date {
        color: #C6C6C6;
        margin-right: 8px;
    }

    .green {
        color: #03AC00;
    }
    
    .red {
        color: #C70000;
    }
`