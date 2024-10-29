import { Header } from "../../components/Header/Header";
import { Resumo } from "../../components/Resumo/resumo";
import { PriceHighlight, TransacoesContainer, TransacoesTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Resumo />

      <TransacoesContainer>
        <TransacoesTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="entrada">R$ 1.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>29/10/2024</td>
            </tr>
            <tr>
              <td width="50%">Roupas</td>
              <td>
                <PriceHighlight variant="saida">- R$ 500,00</PriceHighlight>
              </td>
              <td>Pessoal</td>
              <td>27/10/2024</td>
            </tr>
          </tbody>
        </TransacoesTable>
      </TransacoesContainer>
    </div>
  );
}
