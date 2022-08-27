import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from "../components/Form";
import { useForm } from "react-hook-form";

const MockFormComponent = ({ onSubmit = () => { } }) => {
  const { control, handleSubmit,
    formState: { isSubmitSuccessful }, } = useForm();

  return <Form
    onSubmit={handleSubmit(onSubmit)}
    control={control}
    isSubmitSuccessful={isSubmitSuccessful}
    successfulComponent={<span>Usuario Creado</span>}
  />
};

describe('Form', () => {
  it('should validate all required field', async () => {
    render(<MockFormComponent />);
    const addUserButton = screen.getByText('Agregar Usuario');
    userEvent.click(addUserButton);

    await waitFor(() => {
      expect(screen.getAllByText('Este campo es requerido')).toHaveLength(4);
    })
  });

  it("should show confirmation message", async () => {
    render(<MockFormComponent />);
    const inputName = screen.getByPlaceholderText("Nombre");
    const inputAge = screen.getByPlaceholderText("Edad");
    const inputCareer = screen.getByPlaceholderText("Carrera");
    const inputHobbie = screen.getByPlaceholderText("Hobbie");
    userEvent.type(inputName, "Leo")
    userEvent.type(inputAge, "22")
    userEvent.type(inputCareer, "Dev")
    userEvent.type(inputHobbie, "Paddel")
    const addUserButton = screen.getByText('Agregar Usuario');
    userEvent.click(addUserButton)

    await waitFor(() => {
      expect(screen.getByText("Usuario Creado")).toBeInTheDocument()
    });
  });

  it("should call onSubmit", async () => {
    const onSubmit = jest.fn();
    render(<MockFormComponent onSubmit={onSubmit} />)
    const inputName = screen.getByPlaceholderText("Nombre");
    const inputAge = screen.getByPlaceholderText("Edad");
    const inputCareer = screen.getByPlaceholderText("Carrera");
    const inputHobbie = screen.getByPlaceholderText("Hobbie");
    userEvent.type(inputName, "Leo")
    userEvent.type(inputAge, "22")
    userEvent.type(inputCareer, "Dev")
    userEvent.type(inputHobbie, "Paddel")
    const addUserButton = screen.getByText('Agregar Usuario');
    userEvent.click(addUserButton);

    await waitFor(() => {
      expect(onSubmit).toBeCalled();
    })
  });
});