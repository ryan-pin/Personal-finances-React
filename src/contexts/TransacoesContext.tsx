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
    transactions: Transaction[]
}

interface TransacoesProviderProps {
    children: ReactNode;
}

export const TransacaoContext = createContext({} as TransacaoContextType)

export function TransacoesProvider({ children }: TransacoesProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function loadTransactions() {
      const response = await fetch("http://localhost:3000/transactions");
      const data = await response.json();
  
      setTransactions(data);
    }
  
    useEffect(() => {
      loadTransactions();
    }, []);
  


    return (
        <TransacaoContext.Provider value={{  transactions }}>
            {children}
        </TransacaoContext.Provider>
    )
}