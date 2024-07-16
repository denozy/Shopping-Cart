import React from "react";

const AccountPage = ({ setSignIn, signIn }) => {
  return (
    <div>
      <button onClick={() => setSignIn(!signIn)}>Sign in please?</button>
    </div>
  );
};

export default AccountPage;
