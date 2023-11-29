import {
  startLoading,
  stopLoading,
  saveData,
  catchError,
  cleanError,
} from "../redux/reducers/data-reducer";
import { getItemFromLocalStorage } from "../utils/helpers";

export const fetchData = () => (dispatch) => {
  dispatch(startLoading());
  dispatch(cleanError());
  try {
    const response = getItemFromLocalStorage("data");
    dispatch(saveData(response));
    if (response == null) {
      dispatch(catchError(["Nessun File salvato"]));
    }
  } catch (error) {
    dispatch(catchError(error));
  }
  dispatch(stopLoading());
};
