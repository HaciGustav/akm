import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",

  initialState: {
    loading: false,
    error: false,
    errorMsg: "",
    isSessionValid: false,
    data: {},
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { data, dataName } }) => {
      state.error = false;
      state.errorMsg = "";
      state.data[dataName] = data;
    },

    fetchFail: (state, { payload: { message } }) => {
      state.error = true;
      state.errorMsg = message;
    },

    stopLoading: (state) => {
      state.loading = false;
    },
    setSessionValidity: (state, { payload: { isValid } }) => {
      state.isSessionValid = isValid;
    },
  },
});

export const {
  fetchStart,
  getSuccess,
  fetchFail,
  stopLoading,
  setSessionValidity,
} = settingsSlice.actions;
export default settingsSlice.reducer;
