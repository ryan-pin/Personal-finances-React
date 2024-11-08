import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { ResumoContainer, ResumoCard } from "./styles";
import { useContext } from "react";
import { TransacaoContext } from "../../contexts/TransacoesContext";

export function Resumo() {
    const { transactions } = useContext(TransacaoContext)

    console.log(transactions)

    return(
        <ResumoContainer>
            <ResumoCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp  size={32} color="#00b37e" />
                </header>
                <strong>R$ 1.000,00</strong>
            </ResumoCard>

            <ResumoCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown  size={32} color="#f75a68" />
                </header>
                <strong>R$ 500,00</strong>
            </ResumoCard>

            <ResumoCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar  size={32} color="#fff" />
                </header>
                <strong>R$ 500,00</strong>
            </ResumoCard>
        </ResumoContainer>
    )
}