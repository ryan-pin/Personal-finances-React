import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Pesquisa } from "../../components/Pesquisa/Pesquisa";
import { Resumo } from "../../components/Resumo/resumo";
import { PriceHighlight, TransacoesContainer, TransacoesTable } from "./styles";
import { TransacaoContext } from "../../contexts/TransacoesContext";

export function Transactions() {
  const { transactions } = useContext(TransacaoContext)


  return (
    <div>
      <Header />
      <Resumo />

      <TransacoesContainer>
        <Pesquisa />

        <TransacoesTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransacoesTable>
      </TransacoesContainer>
    </div>
  );
}
