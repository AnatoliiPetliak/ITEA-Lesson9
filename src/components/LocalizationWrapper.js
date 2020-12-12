import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import App from "./App";
import messages from "../translations/common";
import { changeLang } from "../actions";

const LocalizationWrapper = (props) => {
  const { locale } = props.match.params;

  const dispatch = useDispatch();

  const r_locale = useSelector((state) => state.locale);

  useEffect(() => {
    dispatch(changeLang(locale));
  }, [locale, dispatch]);
  //Тут не докінця розібрався з помилками, ще раз відос подивлюсь...
  // src\config.js
  // Line 1:1:  Assign object to a variable before exporting as module default

  // src\translations\common.js
  // Line 1:1:  Assign object to a variable before exporting as module default

  return (
    <>
      <h1> Localized App </h1>
      <IntlProvider locale={r_locale} messages={messages[r_locale]}>
        <App />
      </IntlProvider>
    </>
  );
};

export default LocalizationWrapper;
