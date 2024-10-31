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

                    <Dialog.Portal>
                        <Dialog.Overlay />
                        <Dialog.Content>
                            <Dialog.Title>Nova transação</Dialog.Title>

                            <Dialog.Close />
                        </Dialog.Content>
                    </Dialog.Portal>

                </Dialog.Root>
                
            </HeaderContent>
        </HeaderContainer>
    )
}