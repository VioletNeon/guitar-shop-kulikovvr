const MODAL_CLASS_NAME = 'modal';
const KEY_ESCAPE_CODE = 27;
const DEFAULT_PAGE = 1;

const SortTypes = {
  DEFAULT: 'Default',
  POPULARITY: 'Popularity',
  PRICE: 'Price',
  HIGH_TO_LOW: 'High to low',
  LOW_TO_HIGH: 'Low to high',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  POPULAR_LOW_TO_HIGH: 'Popular: low to high',
  POPULAR_HIGH_TO_LOW: 'Popular: high to low',
};

const PromoCodes = {
  GITARAHIT: 'GITARAHIT',
  SUPERGITARA: 'SUPERGITARA',
  GITARA2020: 'GITARA2020',
};

const AppRoute = {
  MAIN: '/',
  BASKET: '/basket',
};

export {MODAL_CLASS_NAME, KEY_ESCAPE_CODE, DEFAULT_PAGE, SortTypes, AppRoute, PromoCodes};
