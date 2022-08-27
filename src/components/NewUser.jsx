import React from "react";
import "./NewUser.scss";
import UsersContext from "../context/UsersContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Form from "../components/Form";

function NewUser() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitSuccessful },
  } = useForm();
  const { usersData, setUsersData } = React.useContext(UsersContext);

  const onSubmit = (data) => {
    const { nombre, edad, carrera, hobbie } = data;
    const newUser = { nombre, edad, carrera, hobbie };
    setUsersData([...usersData, newUser]);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      control={control}
      isSubmitSuccessful={isSubmitSuccessful}
      successfulComponent={
        <Link to="/" className="successful-user">
          Usuario creado con exito! Ver usuarios
        </Link>
      }
    />
  );
}

export default NewUser;
