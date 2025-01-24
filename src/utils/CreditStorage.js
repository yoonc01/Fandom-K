export const initCredits = () => {
  if (!localStorage.getItem('credits')) {
    localStorage.setItem('credits', 50);
  }
};
