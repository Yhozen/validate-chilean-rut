export const clearRut = (rut: number | string) => {
  if (typeof rut === "number") return `${rut}`;

  return rut.replace(/\./g, "").replace("-", "");
};
