export const isEmpty = (value) => value.trim().length === 0;
export const isEmail = (value) => value.trim().includes("@");
export const minLength = (value, min = 5) => value.trim().length >= min;
export const isPast = (value) => {
  if (!value) return false;
  const selectedDate = new Date(value);
  const today = new Date();
  return selectedDate < today;
};