/* ---  LOAD ACTIONS --- */

/* Action Types */
export const FIRST_LOAD = 'FIRST_LOAD';
export const APP_IS_LOADED = 'APP_IS_LOADED';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

/* Action creators */
export const firstLoad = () => ({
  type: FIRST_LOAD,
});

export const appIsLoaded = (appIsLoadedValue) => ({
  type: APP_IS_LOADED,
  appIsLoadedValue: true,
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});
