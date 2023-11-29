import {
  startLoading,
  stopLoading,
  saveTheme,
  catchError,
  cleanError,
} from "../redux/reducers/theme-reducer";
import { getItemFromLocalStorage, setLocalStorageItem } from "../utils/helpers";

export const setTheme = () => (dispatch) => {
  dispatch(startLoading());
  dispatch(cleanError());
  try {
    const response = getItemFromLocalStorage("theme");
    if (response === "light") {
        dispatch(saveTheme("dark"));
        setLocalStorageItem("theme", "dark");
    } else if (response === "dark") {
        dispatch(saveTheme("light"));
        setLocalStorageItem("theme", "light");
    }
    else  {
      dispatch(saveTheme("light"));
      setLocalStorageItem("theme", "light");
      dispatch(catchError(["Nessun Tema salvato"]));
    }
  } catch (error) {
    dispatch(catchError(error));
  }
  dispatch(stopLoading());
};