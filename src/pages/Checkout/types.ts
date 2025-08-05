import zod from 'zod';

export enum PAYMENT_METHOD_ENUM {
  CREDIT_CARD = 'creditCard',
  DEBIT_CARD = 'debitCard',
  MONEY = 'money',
}

const zipCodeRegEx = /^\d{5}-\d{3}$/; // RegEx for the following pattern 00000-000
export const confirmOrderFormSchema = zod.object({
  zip: zod.string().min(1).regex(zipCodeRegEx),
  street: zod.string().min(1),
  number: zod.string().min(1),
  additional: zod.string(),
  neighborhood: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().min(1),
  paymentMethod: zod.enum(PAYMENT_METHOD_ENUM),
});

export type ConfirmOrderFormData = zod.infer<typeof confirmOrderFormSchema>;
