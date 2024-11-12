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

interface TransacaoContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
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
          q: query,
        }
      })
  
      setTransactions(response.data);
    }
  
    useEffect(() => {
      fetchTransactions();
    }, []);
  


    return (
        <TransacaoContext.Provider value={{  transactions, fetchTransactions, }}>
            {children}
        </TransacaoContext.Provider>
    )
}