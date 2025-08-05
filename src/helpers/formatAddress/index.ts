import { Address } from '../../@types/Address';

export const formatAddress = (address: Address) => {
  return `${address.street} ${address.number}, ${address.neighborhood} - ${address.city} / ${address.state}`;
};
