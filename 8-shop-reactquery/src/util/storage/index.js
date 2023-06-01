export const saveUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getStoredUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : undefined;
};

export const clearStoredUser = () => {
  localStorage.removeItem("user");
};
