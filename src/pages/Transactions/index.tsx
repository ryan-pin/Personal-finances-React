import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Pesquisa } from "../../components/Pesquisa/Pesquisa";
import { Resumo } from "../../components/Resumo/resumo";
import { PriceHighlight, TransacoesContainer, TransacoesTable } from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: "entrada" | "saida";
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

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
