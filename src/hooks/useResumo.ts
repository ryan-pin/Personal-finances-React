import { useContext } from "react";
import { TransacaoContext } from "../contexts/TransacoesContext";

export function useResumo() {
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

    return resumo
}