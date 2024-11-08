import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { ResumoContainer, ResumoCard } from "./styles";
import { useContext } from "react";
import { TransacaoContext } from "../../contexts/TransacoesContext";
import { PriceFormatter } from "../../utils/formatter";

export function Resumo() {
    const { transactions } = useContext(TransacaoContext)

    const resumo = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type == 'entrada') {
                acc.entrada += transaction.price
                acc.total += transaction.price
            } else {
                acc.saida += transaction.price;
                acc.total -= transaction.price;
            }
            return acc;
        }, 
        { 
            entrada: 0, 
            saida: 0, 
            total: 0 
        }
    )

    return(
        <ResumoContainer>
            <ResumoCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp  size={32} color="#00b37e" />
                </header>
                <strong>{PriceFormatter.format(resumo.entrada)}</strong>
            </ResumoCard>

            <ResumoCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown  size={32} color="#f75a68" />
                </header>
                <strong>{PriceFormatter.format(resumo.saida)}</strong>
            </ResumoCard>

            <ResumoCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar  size={32} color="#fff" />
                </header>
                <strong>{PriceFormatter.format(resumo.total)}</strong>
            </ResumoCard>
        </ResumoContainer>
    )
}