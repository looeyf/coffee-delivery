const ONLY_NUMBERS_REGEX = new RegExp(/^[0-9]*$/);
export const isNumber = (value: string) => ONLY_NUMBERS_REGEX.test(value);
