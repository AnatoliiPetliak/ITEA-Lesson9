import { createSelector } from "reselect";

// user selector
export const getUser = (state) => state.auth.userd;
export const getToken = (state) => state.auth.token;
