export const initCredits = (initialCreditValue = 50) => {
  if (!localStorage.getItem('credits')) {
    localStorage.setItem('credits', initialCreditValue);
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
