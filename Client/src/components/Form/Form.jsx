import React, { useState } from "react";
import validator from "./validation";
import styles from '../Form/Form.module.css'

function Form(props) {
  const { login } = props;
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [guestAccess, setGuestAccess] = useState(false);


  const handleChange = (e) => {
    setErrors(validator({ ...userData, [e.target.name]: e.target.value }));
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   login(userData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestAccess) {
      login(userData);
    } else {
      const guestData = {
        email: "jpereyra1979@gmail.com",
        password: "abc123",
      };
      login(guestData);
    }
  };
  


  const handleGuestAccess = () => {
    setGuestAccess(true);
  };
  



return (
  <div className={styles.centeredContainer}>
    <form onSubmit={handleSubmit} className={styles.centeredForm}>
      <div className={styles.formGroup}>
        <label>Email</label>
        <input
          type="text"
          value={userData.email}
          name="email"
          onChange={handleChange}
          className={styles.formInput}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className={styles.formGroup}>
        <label>Password</label>
        <input
          type="password"
          value={userData.password}
          name="password"
          onChange={handleChange}
          className={styles.formInput}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div className={styles.formGroup}>
        <button type="submit" className={styles.formSubmit}>Submit</button>
      </div>
      <button onClick={handleGuestAccess} className={styles.buttonInvitado}>Invitado</button>

    </form>
  </div>
);
  }

export default Form;
