import React from "react";
import { Controller } from "react-hook-form";
import InputForm from "./InputForm";

function Form({ onSubmit, control, isSubmitSuccessful, successfulComponent }) {
  return (
    <form onSubmit={onSubmit} className="form-container">
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
        rules={{
          required: "Este campo es requerido",
        }}
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
      {isSubmitSuccessful && successfulComponent}
    </form>
  );
}

export default Form;
