import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { ResumoContainer, ResumoCard } from "./styles";
import { PriceFormatter } from "../../utils/formatter";
import { useResumo } from "../../hooks/useResumo";

export function Resumo() {
    const resumo = useResumo();

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