export const getItemFromLocalStorage = (key) => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    return null;
  };
  
  export const setLocalStorageItem = (key, item) => {
    if (item && typeof key === "string") {
      localStorage.setItem(key, JSON.stringify(item));
    }
  };

// Persisted store functions
  export const localStorageMiddleware = (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  };
  
  export const loadStateFromLocalStorage = () => {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  };
  // Persisted store functions end