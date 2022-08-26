import React from "react";
import { Controller, useForm } from "react-hook-form";
import InputForm from "./InputForm";
import "./Form.scss";
import UsersContext from "../context/UsersContext";
import { Link } from "react-router-dom";

function Form() {
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
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h1 className="text-new-user">Nuevo Usuario</h1>
      <Controller
        control={control}
        rules={{ required: "Este campo es requerido" }}
        name="nombre"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <InputForm
            autoFocus
            onChange={onChange}
            value={value}
            error={error?.message}
            placeholder="Nombre"
          />
        )}
      />
      <Controller
        control={control}
        rules={{ required: "Este campo es requerido" }}
        name="edad"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <InputForm
            onChange={onChange}
            value={value}
            error={error?.message}
            placeholder="Edad"
            type="number"
            min={1}
          />
        )}
      />
      <Controller
        control={control}
        rules={{ required: "Este campo es requerido" }}
        name="carrera"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <InputForm
            onChange={onChange}
            value={value}
            error={error?.message}
            placeholder="Carrera"
          />
        )}
      />
      <Controller
        control={control}
        rules={{ required: "Este campo es requerido" }}
        name="hobbie"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <InputForm
            onChange={onChange}
            value={value}
            error={error?.message}
            placeholder="Hobbie"
          />
        )}
      />
      <button className="submit-button">Agregar Usuario</button>
      {isSubmitSuccessful && (
        <Link to="/" className="successful-user">
          Usuario creado con exito! Ver usuarios
        </Link>
      )}
    </form>
  );
}

export default Form;
