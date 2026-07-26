import api from "./api";

export const registerUser = (user) =>
    api.post("/register", user);

export const loginUser = (user) =>
    api.post("/login", user);