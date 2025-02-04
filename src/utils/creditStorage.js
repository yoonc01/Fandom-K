export const initCredits = (initialCreditValue = 50) => {
  if (!localStorage.getItem('credits')) {
    localStorage.setItem('credits', initialCreditValue);
  }
};

export const setCredits = (creditValue) => {
  if (localStorage.getItem('credits')) {
    localStorage.setItem('credits', creditValue);
  } else {
    initCredits(creditValue);
  }
};

export const getCredits = () => {
  return parseInt(localStorage.getItem('credits'), 10) || 0;
};

export const rechargeCredits = (amount) => {
  if (amount > 0) {
    const currentCredits = getCredits();
    const newCredits = currentCredits + amount;
    localStorage.setItem('credits', newCredits.toString());
  }
};

export const spendCredits = (amount) => {
  if (amount > 0) {
    const currentCredits = getCredits();
    if (amount > currentCredits) {
      return 'NOT-ENOUGH';
    }

    const newCredits = Math.max(currentCredits - amount, 0);
    localStorage.setItem('credits', newCredits);
  }
};
