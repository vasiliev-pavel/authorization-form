import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/auth/actions/operatorAuthAct";

const Home = () => {
  const dispatch = useDispatch();
  console.log(auth);
  return (
    <div>
      <h1>Welcome to the chat</h1>
      <h1>{auth.currentUser ? auth.currentUser.email : ""}</h1>
      <button
        onClick={() => {
          signOut(auth)
            .then(() => {
              dispatch(userLogout());
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        Log Out
      </button>
    </div>
  );
};
export default Home;
