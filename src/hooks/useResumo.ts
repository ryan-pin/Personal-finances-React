import { TransacaoContext } from "../contexts/TransacoesContext";
import { useContextSelector } from "use-context-selector";

export function useResumo() {
    const transactions  = useContextSelector(TransacaoContext, (context) => {
        return context.transactions
    })

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