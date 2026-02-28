export const isEmpty = (value) => value.trim().length === 0;
export const isEmail = (value) => value.trim().includes("@");
export const isMinLength = (value, min = 5) => value.trim().length < min;