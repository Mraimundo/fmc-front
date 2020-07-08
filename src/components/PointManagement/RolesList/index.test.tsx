import React from 'react';
import { render, getByTestId } from '@testing-library/react';

import RolesList, { Role } from '.';

describe('<RolesList />', () => {
  it('should render correctly', () => {
    const roles: Role[] = [
      { id: 1, name: 'Supervisor', identifier: 'supervisor' },
      { id: 2, name: 'Gerente Comercial', identifier: 'gerente-comercial' },
    ];

    const { getByText, container } = render(<RolesList roles={roles} />);

    roles.map((role: Role) => expect(getByText(role.name)).toBeInTheDocument());
    expect(getByTestId(container, 'roles-list')).toBeInTheDocument();
  });
});
