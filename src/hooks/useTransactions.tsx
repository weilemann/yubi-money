import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

type Transaction = {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}

type TransactionInpput = Omit<Transaction, 'id' | 'createdAt'>;

type TransactionsProviderProps = {
    children: ReactNode;
}

type TransactionsContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInpput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInpput) {
      const response = await api.post('/transactions', {
        ...transactionInput, createdAt: new Date()
      });
      const { transaction } = response.data;

      setTransactions([...transactions, transaction]);
    }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}