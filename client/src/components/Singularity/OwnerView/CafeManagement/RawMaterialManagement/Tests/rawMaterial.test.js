import React from 'react';

import Enzyme, { mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

Enzyme.configure({ adapter: new Adapter() });

import { RawMaterialManagementState } from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState.js';

import RMrequestPostValidations from './TestComponents/RMrequestPostValidations';
import SupplierRequestPostValidations from './TestComponents/SupplierRequestPostValidations';

const wrapper = mount(<RawMaterialManagementState />);

describe('ApplicationState component', () => {
  test('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe('.onSubmit', () => {
  it('Initiates the validations and posts the RM', () => {
    const { getByText, getByLabelText } = render(
      <>
        <RMrequestPostValidations />
      </>
    );

    const rawMaterialName = screen.getByLabelText(/RawMaterial Name:/i);
    userEvent.type(rawMaterialName, 'sgrmhdk00@gmail.com');

    const rawMaterialType = screen.getByLabelText(/Raw Material type:/i);
    userEvent.type(rawMaterialType, 'Liquid');

    const rawMaterialBaseQuanitiy = screen.getByLabelText(
      /rawMaterialBaseQuanitiy:/i
    );
    userEvent.type(rawMaterialBaseQuanitiy, '10');

    const rawMaterialGST = screen.getByLabelText(/rawMaterialGST:/i);
    userEvent.type(rawMaterialGST, '9%');

    const rawMaterialStatePrice = screen.getByLabelText(
      /rawMaterialStatePrice:/i
    );
    userEvent.type(rawMaterialStatePrice, '10');

    const rawMaterialStatePriceGST = screen.getByLabelText(
      /rawMaterialStatePriceGST:/i
    );
    userEvent.type(rawMaterialStatePriceGST, 'woGST');

    const supplierID = screen.getByLabelText(/supplierID:/i);
    userEvent.type(supplierID, '123');

    const rawMaterialGSTPercent = screen.getByLabelText(
      /rawMaterialGSTPercent:/i
    );
    userEvent.type(rawMaterialGSTPercent, '18');

    fireEvent.click(getByText('Submit'));

    expect(getByText('Is validation initiated: true')).toBeTruthy();
    expect(getByText('Is validation completed: true')).toBeTruthy();
    expect(getByText('Is RM request sent: true')).toBeTruthy();
  });
});

describe('.onSubmit', () => {
  it('Initiates the validations and posts the Supplier', () => {
    const { getByText, getByLabelText } = render(
      <>
        <SupplierRequestPostValidations />
      </>
    );

    const rawMaterialName = screen.getByLabelText(/RawMaterial Name:/i);
    userEvent.type(rawMaterialName, 'sgrmhdk00@gmail.com');

    const rawMaterialType = screen.getByLabelText(/Raw Material type:/i);
    userEvent.type(rawMaterialType, 'Liquid');

    const rawMaterialBaseQuanitiy = screen.getByLabelText(
      /rawMaterialBaseQuanitiy:/i
    );
    userEvent.type(rawMaterialBaseQuanitiy, '10');

    const rawMaterialGST = screen.getByLabelText(/rawMaterialGST:/i);
    userEvent.type(rawMaterialGST, '9%');

    const rawMaterialStatePrice = screen.getByLabelText(
      /rawMaterialStatePrice:/i
    );
    userEvent.type(rawMaterialStatePrice, '10');

    const rawMaterialStatePriceGST = screen.getByLabelText(
      /rawMaterialStatePriceGST:/i
    );
    userEvent.type(rawMaterialStatePriceGST, 'woGST');

    const supplierID = screen.getByLabelText(/supplierID:/i);
    userEvent.type(supplierID, '');

    const rawMaterialGSTPercent = screen.getByLabelText(
      /rawMaterialGSTPercent:/i
    );
    userEvent.type(rawMaterialGSTPercent, '18');

    fireEvent.click(getByText('Submit'));

    expect(getByText('Is validation initiated: true')).toBeTruthy();
    expect(getByText('Is validation completed: true')).toBeTruthy();
    expect(getByText('Is Supplier request sent: true')).toBeTruthy();
  });
});
