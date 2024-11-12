import { MagnifyingGlass } from "phosphor-react";
import { PesquisaFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransacaoContext } from "../../contexts/TransacoesContext";

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function Pesquisa() {

    const { fetchTransactions } = useContext(TransacaoContext)

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchTransacions (data: SearchFormInputs) {
        await fetchTransactions(data.query)
    }

    return(
        <PesquisaFormContainer onSubmit={handleSubmit(handleSearchTransacions)}>
            <input 
                type="text" 
                placeholder="Procurar transações" 
                {...register('query')}
            />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Pesquisar
            </button>
        </PesquisaFormContainer>
    )
}