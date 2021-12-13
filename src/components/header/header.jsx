import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <Link className="page-header__logo-link" to="/">
          <svg className="page-header__logo-image" width="67" height="70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#logo"/>
          </svg>
        </Link>
        <nav className="main-nav">
          <div className="main-nav__list-wrapper">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <Link className="main-nav__link" to="/">Каталог</Link>
              </li>
              <li className="main-nav__item">
                <Link className="main-nav__link" to="/">Где купить?</Link>
              </li>
              <li className="main-nav__item">
                <Link className="main-nav__link" to="/">О компании</Link>
              </li>
              <li className="main-nav__item">
                <Link className="main-nav__link" to="/">Сервис-центры</Link>
              </li>
            </ul>
          </div>
          <ul className="main-nav__icon-list">
            <li className="main-nav__icon-item">
              <Link className="main-nav__icon-link" to="/">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="main-nav__icon-path main-nav__icon-path--stroke-color" d="M25.875 19.3523C25.875 23.8068 19.875 27.625 19.875 27.625C19.875 27.625 13.875 23.8068 13.875 19.3523C13.875 17.8333 14.5071 16.3766 15.6324 15.3025C16.7576 14.2284 18.2837 13.625 19.875 13.625C21.4663 13.625 22.9924 14.2284 24.1176 15.3025C25.2429 16.3766 25.875 17.8333 25.875 19.3523Z" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="main-nav__icon-path main-nav__icon-path--stroke-color" d="M19.875 21.2615C20.9796 21.2615 21.875 20.4068 21.875 19.3524C21.875 18.2981 20.9796 17.4434 19.875 17.4434C18.7704 17.4434 17.875 18.2981 17.875 19.3524C17.875 20.4068 18.7704 21.2615 19.875 21.2615Z" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <span className="visually-hidden">Карта</span>
            </li>
            <li className="main-nav__icon-item">
              <Link className="main-nav__icon-link" to="/">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="main-nav__icon-path" fillRule="evenodd" clipRule="evenodd" d="M23.0276 22.0289L26.7934 25.7948C26.9257 25.9273 27.0001 26.1069 27 26.2942C26.9999 26.4814 26.9255 26.661 26.793 26.7934C26.6606 26.9257 26.481 27.0001 26.2937 27C26.1064 26.9999 25.9269 26.9255 25.7945 26.793L22.0287 23.0271C20.903 23.8991 19.4873 24.3094 18.0698 24.1746C16.6522 24.0399 15.3393 23.3701 14.398 22.3016C13.4567 21.2332 12.9578 19.8462 13.0028 18.423C13.0478 16.9997 13.6333 15.6471 14.6401 14.6402C15.647 13.6333 16.9996 13.0478 18.4229 13.0028C19.8461 12.9578 21.233 13.4567 22.3014 14.398C23.3699 15.3393 24.0396 16.6523 24.1743 18.0699C24.3091 19.4875 23.8988 20.9031 23.0269 22.0289H23.0276ZM18.6003 22.7996C19.7141 22.7996 20.7824 22.3571 21.57 21.5695C22.3576 20.7818 22.8001 19.7136 22.8001 18.5997C22.8001 17.4858 22.3576 16.4176 21.57 15.6299C20.7824 14.8423 19.7141 14.3998 18.6003 14.3998C17.4864 14.3998 16.4182 14.8423 15.6306 15.6299C14.8429 16.4176 14.4005 17.4858 14.4005 18.5997C14.4005 19.7136 14.8429 20.7818 15.6306 21.5695C16.4182 22.3571 17.4864 22.7996 18.6003 22.7996Z" fill="black"/>
                </svg>
              </Link>
              <span className="visually-hidden">Поиск</span>
            </li>
            <li className="main-nav__icon-item main-nav__icon-item--counter">
              <Link className="main-nav__icon-link" to="/">
                <svg width="40" height="40" viewBox="-13 -13 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="main-nav__icon-path" d="M13.3798 4.59316C13.3329 4.5283 13.2746 4.47622 13.209 4.44052C13.1434 4.40482 13.072 4.38633 12.9998 4.38634H9.9998V2.02272C9.9998 1.55256 9.84177 1.10167 9.56046 0.769217C9.27916 0.436768 8.89763 0.25 8.4998 0.25H5.4998C5.10198 0.25 4.72045 0.436768 4.43914 0.769217C4.15784 1.10167 3.9998 1.55256 3.9998 2.02272V4.38634H0.999803C0.927326 4.38537 0.855537 4.40303 0.78941 4.43811C0.723283 4.47318 0.664399 4.52483 0.616838 4.58947C0.569277 4.65411 0.534176 4.73019 0.513968 4.81246C0.493759 4.89472 0.488926 4.98119 0.499803 5.06588L1.4398 12.2454C1.47596 12.5272 1.59709 12.7841 1.78085 12.9687C1.96461 13.1533 2.19864 13.2531 2.4398 13.2499H11.5698C11.811 13.2531 12.045 13.1533 12.2288 12.9687C12.4125 12.7841 12.5336 12.5272 12.5698 12.2454L13.4998 5.06588C13.5098 4.98152 13.5043 4.8956 13.4836 4.814C13.4629 4.73241 13.4275 4.65707 13.3798 4.59316ZM4.9998 2.02272C4.9998 1.866 5.05248 1.7157 5.14625 1.60488C5.24002 1.49407 5.36719 1.43181 5.4998 1.43181H8.4998C8.63241 1.43181 8.75959 1.49407 8.85336 1.60488C8.94712 1.7157 8.9998 1.866 8.9998 2.02272V4.38634H4.9998V2.02272ZM11.5698 12.0681H2.4298L1.5848 5.56815H12.4148L11.5698 12.0681Z" fill="black"/>
                </svg>
              </Link>
              <span className="main-nav__basket-counter">2</span>
              <span className="visually-hidden">Корзина</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="page-header__wrapper-decoration">
        <div className="decoration-lines">
          <img className="decoration-lines__image" src={'img/guitar.png'} width="825" height="282" alt="Гитара для декорации"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
