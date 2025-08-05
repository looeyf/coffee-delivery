import {
  PAYMENT_METHOD_ENUM,
  paymentMethodOptions,
} from '../../mocks/paymentMethods';

export const getPaymentMethodLabel = (paymentMethod: PAYMENT_METHOD_ENUM) => {
  return paymentMethodOptions.find(
    (paymentMethodOption) => paymentMethodOption.value === paymentMethod,
  );
};
