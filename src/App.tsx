import styled from 'styled-components'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header/Index'
import Modal from 'react-modal'
import { Global } from './styles/GlobalStyle'
import { useState } from 'react'
import {NewTransactionModal} from './components/NewTransactionModal/index'
import { TransactionProvider} from './hooks/useTransactionsContext'

Modal.setAppElement('#root')

function App() {

  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)

  function handleOpenNewTransactionsModal(){
    setIsNewTransactionsModalOpen(true)
  }
  function handleCloseNewTransactionsModal(){
    setIsNewTransactionsModalOpen(false)
  }
  
  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionsModal}/>
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionsModal}
      ></NewTransactionModal>

      <Global />
    </TransactionProvider>
  )
}

export default App
