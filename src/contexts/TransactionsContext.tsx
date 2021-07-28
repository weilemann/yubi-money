import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from '../services/api';

type Transaction = {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}

type TransactionsProviderProps = {
    children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions))
    }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}