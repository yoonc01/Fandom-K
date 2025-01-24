export const initCredits = () => {
  if (!localStorage.getItem('credits')) {
    localStorage.setItem('credits', 50);
  }
};

export const getCredits = () => {
  return parseInt(localStorage.getItem('credits'), 10) || 0;
};

export const rechgCredits = (amount) => {
  if (amount > 0) {
    const currentCredits = getCredits();
    localStorage.setItem('credits', currentCredits + amount);
  }
};
