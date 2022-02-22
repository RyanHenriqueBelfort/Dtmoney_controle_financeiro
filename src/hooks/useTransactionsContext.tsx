import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { api } from '../Services/api'

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionInput{
  title: string;
  amount: number;
  type: string;
  category: string;
}

// TransactionInput herda todas as informações menos id e
// type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transaction: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
  )

export function TransactionProvider({children}: TransactionsProviderProps){
  const [transaction, setTransaction] = useState<Transaction[]>([])

  useEffect(() =>{
    api.get('transactions')
    .then(response => setTransaction(response.data.transactions))
  },[])

  async function createTransaction(transactionInput: TransactionInput){
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const {transactions} = response.data
  
    setTransaction([...transaction,transactions])
  }
  
  return(
    <TransactionsContext.Provider value={{transaction, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions(){
  const context = useContext(TransactionsContext)

  return context
}