import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import NewUser from '../components/NewUser'
import UsersContext from '../context/UsersContext';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const MockFormComponent = () => {
  const [usersData, setUsersData] = useState([]);

  return (
    <>
      <MemoryRouter>
        <UsersContext.Provider value={{ usersData, setUsersData }}>
          <NewUser />
        </UsersContext.Provider>
      </MemoryRouter>
      <span data-testid='users-data-length'>{usersData.length}</span>
    </>
  );
};

describe("NewUser", () => {
  it('should create user', async () => {
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
    userEvent.click(addUserButton);

    await waitFor(() => {
      expect(screen.getByText("Usuario creado con exito! Ver usuarios")).toBeInTheDocument()
    });
  });

  it('should add user to state', async () => {
    render(<MockFormComponent />);
    expect(screen.getByTestId('users-data-length')).toHaveTextContent('0');

    const inputName = screen.getByPlaceholderText("Nombre");
    const inputAge = screen.getByPlaceholderText("Edad");
    const inputCareer = screen.getByPlaceholderText("Carrera");
    const inputHobbie = screen.getByPlaceholderText("Hobbie");
    const addUserButton = screen.getByText('Agregar Usuario');

    userEvent.type(inputName, "Leo")
    userEvent.type(inputAge, "22")
    userEvent.type(inputCareer, "Dev")
    userEvent.type(inputHobbie, "Paddel")
    userEvent.click(addUserButton);

    await waitFor(() => {
      expect(screen.getByTestId('users-data-length')).toHaveTextContent('1');
    });
  });
});