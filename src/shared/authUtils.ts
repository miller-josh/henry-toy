import { users } from "../mock/mockdata";
import { delay } from "./utils";

type Role = "client" | "provider";

const login = async (userId: string): Promise<boolean> => {
  await delay(1000);
  const currentUser = users.find((user: any) => user.id === userId);
  if (!currentUser) {
    return false;
  }

  sessionStorage.setItem("user", JSON.stringify(currentUser));
  return true;
};

const isAuthenticated = () => {
  return sessionStorage.getItem("user") !== null;
};

const getUserRole = (): Role => {
  return sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user")!).role
    : "client";
};

const getCurrentUser = () => {
  return sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user")!)
    : null;
};

const logout = () => {
  sessionStorage.removeItem("user");
};

export { isAuthenticated, getUserRole, login, logout, getCurrentUser };
