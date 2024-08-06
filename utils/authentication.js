const parseCookie = (str) => JSON.parse(decodeURIComponent(str).substring(7));

export const isSessionValid = () => {
  const creds = JSON.parse(localStorage.getItem("user"));
  if (!creds) return;
  const EXPIRATION_TIME = 604800000;
  console.log(creds);
  return Date.now() - creds.lastLogin < EXPIRATION_TIME;
};
