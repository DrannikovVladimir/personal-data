import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import App from './App';
import ru from './locales/locales';

const init = async () => {
  i18next
    .use(initReactI18next)
    .init({
      lng: 'ru',
      resources: {
        ru
      },
      debug: false,
      fallbackLng: 'ru',
    });

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};

export default init;

