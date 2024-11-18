import { Header } from "../../components/Header/Header";
import { Pesquisa } from "../../components/Pesquisa/Pesquisa";
import { Resumo } from "../../components/Resumo/resumo";
import { PriceHighlight, TransacoesContainer, TransacoesTable } from "./styles";
import { TransacaoContext } from "../../contexts/TransacoesContext";
import { dateFormatter, PriceFormatter } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";

export function Transactions() {
  const transactions  = useContextSelector(TransacaoContext, (context) => {
    return context.transactions
  })


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
                      {transaction.type === 'saida' && '-'}
                      {PriceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </TransacoesTable>
      </TransacoesContainer>
    </div>
  );
}
