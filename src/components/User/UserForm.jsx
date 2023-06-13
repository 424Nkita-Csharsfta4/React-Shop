import React from "react";
import { useDispatch, useSelector } from "react-redux";

import UserSignupForm from "./UserSignupForm";
import UserLoginForm from "./UserLoginForm";

import styles from "../../styles/User.module.css";
import { toggleForm, toggleFormType } from "../../features/user/userSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user);

  const closeForm = () => dispatch(toggleForm(false));
  const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));

  return showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm} />
      {formType === "signup" ? (
        <UserSignupForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      ) : (
        <UserLoginForm
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      )}
    </>
  ) : (
    <></>
  );
};

export default UserForm;
