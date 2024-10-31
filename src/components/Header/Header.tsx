import { NovaTransacaoModal } from "../NovaTransacaoModal/Modal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <h1>Personal Finances</h1>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                       <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NovaTransacaoModal />                    

                </Dialog.Root>
                
            </HeaderContent>
        </HeaderContainer>
    )
}