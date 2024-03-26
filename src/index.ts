export const clearRut = (rut: number | string) => {
  if (typeof rut === "number") return `${rut}`;

  return rut
    .replace(/\./g, "")
    .replace("-", "")
    .replace(/^0+/, "")
    .toLowerCase();
};

export const splitRut = (cleanRut: string) => {
  const [checkDigit, ...inverseRut] = cleanRut.split("").reverse();

  return { checkDigit, inverseRut };
};

const DIGITS_TO_SUM = [2, 3, 4, 5, 6, 7];

export const getRutSum = (stringDigitArray: string[]) => {
  return stringDigitArray.reduce((accumulator, digit, index) => {
    const multiplication =
      DIGITS_TO_SUM[index % DIGITS_TO_SUM.length] * Number(digit);

    return accumulator + multiplication;
  }, 0);
};

export const getCheckDigitFromSum = (sum: number): string => {
  const remainder = (11 - (sum % 11)) % 11;
  if (remainder === 10) return "k";

  return String(remainder);
};

export const getCheckDigit = (
  rutWithoutCheckDigit: number | string
): string => {
  const cleanRut = clearRut(rutWithoutCheckDigit);
  const inverseRut = cleanRut.split("").reverse();

  const sum = getRutSum(inverseRut);

  return getCheckDigitFromSum(sum);
};

export const validateRut = (rut: number | string) => {
  const cleanRut = clearRut(rut);
  const { checkDigit, inverseRut } = splitRut(cleanRut);

  const sum = getRutSum(inverseRut);
  const calculatedCheckDigit = getCheckDigitFromSum(sum);

  return checkDigit === calculatedCheckDigit;
};

export const formatRut = (rut: number | string): string => {
  const cleanRut = clearRut(rut);
  const regex = /^(\d{1,2})(\d{3})(\d{3})([\dkK]{1})$/;
  const replacement = "$1.$2.$3-$4";
  return cleanRut.replace(regex, replacement);
};
