import { CHANGE_LOCALE } from "../constants";

export const changeLang = (locale) => (dispatch) => {
  dispatch({ type: CHANGE_LOCALE, payload: locale });
  console.log(locale);
};
