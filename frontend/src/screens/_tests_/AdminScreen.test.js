import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import AdminScreen from '../AdminScreen'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const newStore = mockStore({
  userLogin: {
    userInfo: true
  },
  userInfo: {
    isAdmin: true
  },
  productList: {
    loading: false,
    error: false,
    products: []
  },
  productDelete: {
    loadingDelete: true,
  },
  productCreate: {
    loadingCreate: true,
  },
})

test('Admin button text Form showing', () => {
  render(
    <Provider store={newStore}>
      <MemoryRouter>
        <AdminScreen />
      </MemoryRouter>
    </Provider>
  );
  const addButton = screen.getByRole("button", { name: "Create a Product" })
  expect(addButton).toBeEnabled();
  expect(addButton).toBeInTheDocument();
  const editButton = screen.queryByRole("button", { name: "edit" });
  expect(editButton).toBeNull();
  expect(editButton).not.toBeInTheDocument();
  const deleteButton = screen.queryByRole("button", { name: "delete" });
  expect(deleteButton).toBeNull();
  expect(deleteButton).not.toBeInTheDocument();
});