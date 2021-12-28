import {PromoCodes} from './const';

const KEYCODE_TAB = 9;
const NAME_KEYBOARD_TAB = 'Tab';
const TEN_PERCENT_DISCOUNT = 0.1;
const THIRTY_PERCENT_DISCOUNT = 0.3;
const SEVEN_HUNDRED_DISCOUNT = 700;
const THREE_THOUSAND_DISCOUNT = 3000;

const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (evt) => {
    const isTabPressed = (evt.key === NAME_KEYBOARD_TAB || evt.keyCode === KEYCODE_TAB);

    if (!isTabPressed) {
      return;
    }

    if (evt.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        evt.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        evt.preventDefault();
      }
    }
  });
};

const promoCalculating = {
  [PromoCodes.GITARAHIT]: (totalAmount) => totalAmount - totalAmount * TEN_PERCENT_DISCOUNT,
  [PromoCodes.SUPERGITARA]: (totalAmount) => totalAmount - SEVEN_HUNDRED_DISCOUNT,
  [PromoCodes.GITARA2020]: (totalAmount) => {
    if ((totalAmount * THIRTY_PERCENT_DISCOUNT) <= THREE_THOUSAND_DISCOUNT) {
      return totalAmount - totalAmount *  THIRTY_PERCENT_DISCOUNT;
    }
    return totalAmount - THREE_THOUSAND_DISCOUNT;
  },
};

const getTernaryItem = (item) => item.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export {trapFocus, getTernaryItem, promoCalculating};
