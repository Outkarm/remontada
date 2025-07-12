import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bcrypt from "bcryptjs";
import Button from "../../GeneralAccessoriesComponent/Button.jsx";
import {
  signIn,
  signOut,
} from "../../../redux/adminAccessSlice/actions/adminAccessActions.js";
import "../style/AuthAccessDropDown.css";

const AuthAccessDropDown = ({ isOpen, setIsLogoClicked }) => {
  const [inputPassword, setInputPassword] = useState("");
  const [authResult, setAuthResult] = useState(null);
  const hashedPassword = import.meta.env.VITE_PASSWORD;

  const dispatch = useDispatch();

  const adminAccess = useSelector((state) => state.portfolio.admin.adminAccess);
  console.log(adminAccess);

  const handleSignIn = () => {
    bcrypt.compare(inputPassword, hashedPassword, function (err, result) {
      if (err) {
        console.error(err);
        setAuthResult("An error occurred");
        return;
      }

      if (result) {
        dispatch(signIn("live"));
        setIsLogoClicked(false);
      } else {
        setAuthResult("Incorrect Password ❌");
      }
    });
  };
  const handleLogOut = () => {
    dispatch(signOut(false));
    setIsLogoClicked(false);
  };

  return (
    <div className={`auth-access-dropdown-container ${isOpen ? "open" : ""}`}>
      {adminAccess === "live" ? (
        <Button
          btnText="Log Out"
          btnUse="card"
          costomBlock={true}
          clickFunction={handleLogOut}
        />
      ) : (
        <>
          <div className="label-input-container">
            <label className="password-label" htmlFor="Password">
              Password
            </label>
            <input
              type="password"
              id="Password"
              name="Password"
              placeholder="Password"
              className="Password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              required
            />
          </div>
          {authResult && <p className="auth-message">{authResult}</p>}
          <Button
            btnText="Sign In"
            btnUse="card"
            costomBlock={true}
            clickFunction={handleSignIn}
          />
        </>
      )}
    </div>
  );
};

export default AuthAccessDropDown;
