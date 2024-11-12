import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
    id: number;
    description: string;
    type: "entrada" | "saida";
    price: number;
    category: string;
    createdAt: string;
  }

  interface CreateTransactionInput {
    description: string;
    price: number;
    category: string;
    type: 'entrada' | 'saida';
  }  

interface TransacaoContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface TransacoesProviderProps {
    children: ReactNode;
}

export const TransacaoContext = createContext({} as TransacaoContextType)

export function TransacoesProvider({ children }: TransacoesProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function fetchTransactions(query?: string) {
      const response = await api.get('/transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        }
      })
  
      setTransactions(response.data);
    }
  
    async function createTransaction(data: CreateTransactionInput ) {
      const { description, category, price, type } = data;

      const response = await api.post('transactions', {
        description,
        category,
        price,
        type,
        createdAt: new Date(),
      })
      
      setTransactions(state => [response.data, ...state])
    }

    useEffect(() => {
      fetchTransactions();
    }, []);
  


    return (
        <TransacaoContext.Provider value={{  transactions, fetchTransactions, createTransaction, }}>
            {children}
        </TransacaoContext.Provider>
    )
}