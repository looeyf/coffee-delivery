import { Bank, CreditCard, Money } from 'phosphor-react';

export enum PAYMENT_METHOD_ENUM {
  CREDIT_CARD = 'creditCard',
  DEBIT_CARD = 'debitCard',
  MONEY = 'money',
}

export const paymentMethodOptions = [
  {
    label: 'Cartão de Crédito',
    value: PAYMENT_METHOD_ENUM.CREDIT_CARD,
    Icon: CreditCard,
  },
  {
    label: 'Cartão de Débito',
    value: PAYMENT_METHOD_ENUM.DEBIT_CARD,
    Icon: Bank,
  },
  {
    label: 'Dinheiro',
    value: PAYMENT_METHOD_ENUM.MONEY,
    Icon: Money,
  },
];
