import { useContext, useEffect, useState } from "react";
import { deleteValue, getValues } from "../service/myWalletService";
import styled from "styled-components";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Records() {
   const [values, setValues] = useState([]);
   const { setId } = useContext(UserContext);

   const navigate = useNavigate();

   useEffect(() => {
      getValues()
         .then((res) => setValues(res.data))
         .catch((err) => {
            console.log(err);
            alert("Algo deu errado.");
         })
   }, [values]);

   const input = values
      .filter(sum => sum.type === "input")
      .reduce((total, value) => total + value.value, 0);

   const output = values
      .filter(sum => sum.type === "output")
      .reduce((total, value) => total + value.value, 0);

   const total = input - output;

   return (
      <ContainerRecords>
         {
            values.length === 0 ? (<h1>Não há registros de entrada ou saída</h1>) :
               (
                  <Extract>
                     {values.map((value, index) => (
                        <Record key={index} type={value.type}>
                           <div className="left">
                              <span className="date">{value.date}</span>
                              <span className="description" onClick={() => {
                                 setId(value._id);

                                 if (value.type === "input") {
                                    navigate("/update-input");
                                 } else {
                                    navigate("/update-output");
                                 }
                              }}>{value.text}</span>
                           </div>

                           <div className="right">
                              <span className="value">{value.value.toFixed(2)}</span>
                              <span className="delete" onClick={() => {
                                 const confirm = window.confirm("Deseja excluir esse valor?");

                                 if (confirm) {
                                    deleteValue(value._id)
                                       .then(() => alert("Valor excluído com sucesso!"))
                                       .catch((err) => {
                                          console.log(err);
                                          alert("Não foi possível apagar o valor.");
                                       })
                                 }
                              }}>x</span>
                           </div>
                        </Record>
                     ))}
                  </Extract>
               )
         }

         <Balance total={total}>
            <span>Saldo</span>
            <span className="value-balance">{total.toFixed(2)}</span>
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

  .value-balance {
      color: ${props => props.total > 0 ? ("#048400") : ("#C70000")};
  }
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
`

const Record = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  .value {
    color: ${props => props.type === "input" ? ("#03AC00") : ("#C70000")};
  }

  .left, .right {
    display: flex;
  }

  .description {
    cursor: pointer;
    font-size: 15px;
  }

  .date {
    color: #C6C6C6;
    margin-right: 8px;
  }

  .delete {
    color: #C6C6C6;
    margin-left: 8px;
    cursor: pointer;
    font-weight: 700;
  }
`