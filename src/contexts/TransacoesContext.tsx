import { createContext, ReactNode, useEffect, useState } from "react";

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
      const url = new URL("http://localhost:3000/transactions");

      if (query) {
        url.searchParams.append('q', query);
      }

      const response = await fetch(url);
      const data = await response.json();
  
      setTransactions(data);
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