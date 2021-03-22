import React from 'react'
import SavingsReason from '../SavingsReason/SavingsReason.component';

const RegularVaultContent = ({ values, handleChange }) => {
  switch (values.step) {
    case 1:
      return (
        <SavingsReason />
      );
    case 2:
      return (
        <h1>hello content 2</h1>
      )
    default:
      return (
        <h1>Hello world</h1>
      )
  }
}

export default RegularVaultContent
