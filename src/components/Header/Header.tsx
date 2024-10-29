import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <h1>Personal Finances</h1>

                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}