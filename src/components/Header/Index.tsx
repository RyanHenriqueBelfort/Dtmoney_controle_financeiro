import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface headerProps {
  onOpenNewTransactionModal: () => void
}

export function Header({onOpenNewTransactionModal}: headerProps) {
 
   return(
    <Container>
      <Content>
        <img alt="dt money" src={logoImg}></img>
        <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
      </Content>
    </Container>
  )
}