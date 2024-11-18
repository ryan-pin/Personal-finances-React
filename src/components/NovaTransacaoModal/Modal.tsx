import * as Dialog from "@radix-ui/react-dialog";
import {
  Overlay,
  Content,
  CloseButton,
  TransacaoType,
  TransacaoTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransacaoContext } from "../../contexts/TransacoesContext";
import { useContextSelector } from "use-context-selector";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["entrada", "saida"]),
});

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NovaTransacaoModal() {
  const createTransaction  = useContextSelector(TransacaoContext, (context) => {
    return context.createTransaction;
  })

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'entrada'
    }
  });

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    const { description, category, price, type } = data;
    
    await createTransaction({
      description,
      category,
      price,
      type,
    })

    reset();
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
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Valor"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransacaoType onValueChange={field.onChange} value={field.value}>
                  <TransacaoTypeButton variant="entrada" value="entrada">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransacaoTypeButton>

                  <TransacaoTypeButton variant="saida" value="saida">
                    <ArrowCircleDown size={24} />
                    Saida
                  </TransacaoTypeButton>
                </TransacaoType>
              );
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
