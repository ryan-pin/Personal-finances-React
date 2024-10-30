import { MagnifyingGlass } from "phosphor-react";
import { PesquisaFormContainer } from "./styles";

export function Pesquisa() {
    return(
        <PesquisaFormContainer>
            <input type="text" placeholder="Procurar transações" />
            <button type="submit">
                <MagnifyingGlass size={20} />
                Pesquisar
            </button>
        </PesquisaFormContainer>
    )
}