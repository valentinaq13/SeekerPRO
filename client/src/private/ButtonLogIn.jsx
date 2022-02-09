import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const ButtonLogIn = ({ estilo }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="p-4 py-1 inline-block bg-gradient-to-r from-verdeClaro to-verdeMedio text-white font-bold rounded-3xl filter hover:drop-shadow"
      onClick={() => loginWithRedirect()}
      id="qsLoginBtn"
    >
      Log In
    </button>
  );
};

export const ButtonLogOutLanding = ({ estilo }) => {
  const { logout } = useAuth0();
  return (
    <div className="flex m-0 justify-center">
      <button
        className="p-4 py-1 bg-gradient-to-r from-verdeClaro to-red-500 text-white font-bold rounded-3xl filter hover:drop-shadow"
        onClick={() => logout()}
        id="qsLoginBtn"
      >
        Log Out
      </button>
    </div>
  );
};