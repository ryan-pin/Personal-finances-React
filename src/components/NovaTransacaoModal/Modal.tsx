import * as Dialog from '@radix-ui/react-dialog';
import { Overlay, Content, CloseButton } from './styles';
import { X } from 'phosphor-react';

export function NovaTransacaoModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
            <X size={24} />
        </CloseButton>

        <form>
            <input type="text" placeholder="Descrição" required/>
            <input type="number" placeholder="Valor" required/>
            <input type="text" placeholder="Categoria" required/>

            <button type="submit">
                Cadastrar
            </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
