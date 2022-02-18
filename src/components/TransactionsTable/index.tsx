import { useContext, useEffect, useState } from "react";
import { api } from "../../Services/api";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./style";

export function Transactions() {
  const { transaction } = useContext(TransactionsContext)

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>{new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}