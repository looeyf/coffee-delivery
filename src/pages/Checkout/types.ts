import zod from 'zod';
import { PAYMENT_METHOD_ENUM } from '../../mocks/paymentMethods';

const zipCodeRegEx = /^\d{5}-\d{3}$/; // RegEx for the following pattern 00000-000
export const confirmOrderFormSchema = zod.object({
  zip: zod.string().min(1).regex(zipCodeRegEx),
  street: zod.string().min(1),
  number: zod.string().min(1),
  additional: zod.string().optional(),
  neighborhood: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().min(1),
  paymentMethod: zod.enum(PAYMENT_METHOD_ENUM),
});

export type ConfirmOrderFormData = zod.infer<typeof confirmOrderFormSchema>;
