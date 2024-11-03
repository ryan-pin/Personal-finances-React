import * as Dialog from '@radix-ui/react-dialog';
import { Overlay, Content, CloseButton, TransacaoType, TransacaoTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

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

            <TransacaoType>
              <TransacaoTypeButton variant='entrada' value='entrada'>
                <ArrowCircleUp size={24} />
                Entrada
              </TransacaoTypeButton>

              <TransacaoTypeButton variant='saida' value='saida'>
                <ArrowCircleDown size={24} />
                Saida
              </TransacaoTypeButton>
            </TransacaoType>

            <button type="submit">
                Cadastrar
            </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
