const theme = "themeColor";

export const getTheme = () => {
  const storedTheme = localStorage.getItem(theme);
  if (!storedTheme) {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  return storedTheme === "dark";
};

export const setTheme = (value) => {
  const color = value ? "light" : "dark";
  localStorage.setItem(theme, color);
};

export default getTheme;
