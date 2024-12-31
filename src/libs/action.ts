export const deleteToken = (key: string) => {
  localStorage.removeItem(key);
};
