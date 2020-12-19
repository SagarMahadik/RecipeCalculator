import React from 'react';

import Enzyme, { shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

Enzyme.configure({ adapter: new Adapter() });

import ApplicationState, {
  util
} from 'Context/ApplicationContext/ApplicationState.js';
import applicationContext from 'Context/ApplicationContext/applicationContext.js';

const wrapper = shallow(<ApplicationState />);
console.log(wrapper);

describe('ApplicationState component', () => {
  test('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Application state', () => {
  it('authed is false by default', () => {
    const { getByText } = render(
      <ApplicationState>
        <applicationContext.Consumer>
          {value => (
            <span>Is logged in: {value.isAuthenticated.toString()}</span>
          )}
        </applicationContext.Consumer>
      </ApplicationState>
    );

    expect(getByText('Is logged in: false')).toBeTruthy();
  });
});

describe('.loginUser', () => {
  it('Logs in user post validating', () => {
    const { getByText, getByLabelText } = render(
      <ApplicationState>
        <applicationContext.Consumer>
          {value => (
            <>
              <label htmlFor="my-email">Email:</label>
              <input
                id="my-email"
                data-testid="email-field"
                type="text"
                name="loginEmail"
                value={value.loginEmail}
                onChange={value.handleChangeFor('loginEmail')}
              />
              <label htmlFor="my-password">Password:</label>
              <input
                id="my-password"
                data-testid="password-field"
                type="text"
                name="loginPassword"
                value={value.loginPassword}
                onChange={value.handleChangeFor('loginPassword')}
              />
              <span>Is logged in: {value.isAuthenticated.toString()}</span>
              <span>Is loading in: {value.loading.toString()}</span>
              <span>
                Is validation initiated:{' '}
                {value.loginValidationInitiated.toString()}
              </span>

              <span>Is form validated: {value.formValidated.toString()}</span>
              <span>
                Is making login request: {value.sendingLoginRequest.toString()}
              </span>
              <button onClick={value.loginUser}>Login</button>
            </>
          )}
        </applicationContext.Consumer>
      </ApplicationState>
    );

    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(emailInput, 'sgrmhdk51@gmail.com');

    const passwordInput = screen.getByLabelText(/password/i);
    userEvent.type(passwordInput, '12345678');

    fireEvent.click(getByText('Login'));

    expect(getByText('Is logged in: false')).toBeTruthy();
    expect(getByText('Is validation initiated: true')).toBeTruthy();
    expect(getByText('Is loading in: true')).toBeTruthy();
    //expect(emailInput.value).toBe('sgrmhdk51@gmail.com');
    expect(getByText('Is form validated: true')).toBeTruthy();
    expect(getByText('Is making login request: true')).toBeTruthy();
  });
});

describe('.registerUser', () => {
  it('Register user post validating', () => {
    const { getByText, getByLabelText } = render(
      <ApplicationState>
        <applicationContext.Consumer>
          {value => (
            <>
              <label htmlFor="my-email">Email:</label>
              <input
                id="my-email"
                type="text"
                name="email"
                value={value.email}
                onChange={value.handleChangeFor('email')}
              />
              <label htmlFor="my-password">Password:</label>
              <input
                id="my-password"
                type="text"
                name="password"
                value={value.password}
                onChange={value.handleChangeFor('password')}
              />
              <label htmlFor="passwordConfirm">confirm:</label>
              <input
                id="passwordConfirm"
                type="text"
                name="passwordConfirm"
                value={value.passwordConfirm}
                onChange={value.handleChangeFor('passwordConfirm')}
              />
              <label htmlFor="brandName">Brand Name:</label>
              <input
                id="brandName"
                type="text"
                name="brandName"
                value={value.brandName}
                onChange={value.handleChangeFor('brandName')}
              />
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                id="mobileNumber"
                type="text"
                name="mobileNumber"
                value={value.mobileNumber}
                onChange={value.handleChangeFor('mobileNumber')}
              />
              <span>Is logged in: {value.isAuthenticated.toString()}</span>
              <span>Is loading in: {value.loading.toString()}</span>
              <span>
                Is validation initiated: {value.regValIntitiated.toString()}
              </span>

              <span>
                Is form validated: {value.registrationFromValidated.toString()}
              </span>
              <span>
                Is making register request: {value.sendingRegRequest.toString()}
              </span>
              <button onClick={value.registerUser}>Register</button>
            </>
          )}
        </applicationContext.Consumer>
      </ApplicationState>
    );

    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(emailInput, 'sgrmhdk51@gmail.com');

    const passwordInput = screen.getByLabelText(/password/i);
    userEvent.type(passwordInput, '12345678');

    const passwordConfirmInput = screen.getByLabelText(/confirm/i);
    userEvent.type(passwordConfirmInput, '12345678');

    const brandNameInput = screen.getByLabelText(/brand name/i);
    userEvent.type(brandNameInput, 'Benny');

    const mobileNumberInput = screen.getByLabelText(/mobile number/i);
    userEvent.type(mobileNumberInput, '9967531992');

    fireEvent.click(getByText('Register'));

    expect(getByText('Is logged in: false')).toBeTruthy();
    expect(getByText('Is loading in: true')).toBeTruthy();
    expect(getByText('Is validation initiated: true')).toBeTruthy();

    //expect(emailInput.value).toBe('sgrmhdk51@gmail.com');
    expect(getByText('Is form validated: true')).toBeTruthy();
    expect(getByText('Is making register request: true')).toBeTruthy();
  });
});
