import * as Dialog from '@radix-ui/react-dialog';
import { Overlay, Content, CloseButton, TransacaoType, TransacaoTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['entrada', 'saida']),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema >;

export function NovaTransacaoModal() {
  
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  function handleCreateNewTransaction(data: newTransactionFormInputs ){
    console.log(data)
  }
  
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
            <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input 
              type="text" 
              placeholder="Descrição" 
              required
              {...register('description')}
            />
            <input 
              type="number" 
              placeholder="Valor" 
              required
              {...register('price', { valueAsNumber: true })}
            />
            <input 
              type="text" 
              placeholder="Categoria" 
              required
              {...register('category')}
            />

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

            <button type="submit" disabled={ isSubmitting }>
                Cadastrar
            </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
