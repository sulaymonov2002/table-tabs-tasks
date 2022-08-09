import React from "react";
import classes from "./user.module.scss";
import cx from "classnames";

const User = ({ user }) => {
  const { id, name, city, age, color, pointer, hover } = user;
  return (
    <tr
      className={cx(
        classes.tr,
        classes[`tr--${color}`],
        hover && classes.hover,
        pointer && classes.pointer
      )}
    >
      <td className={cx(classes.td)}> #{id} </td>
      <td className={cx(classes.td)}> {name} </td>
      <td className={cx(classes.td)}> {age} </td>

      <td className={cx(classes.td)}>
        <div> {city} </div>
        <div> {city} </div>
        <div> {city} </div>
        <div> {city} </div>
        <div> {city} </div>
      </td>

      <td>action</td>
    </tr>
  );
};

export default User;
