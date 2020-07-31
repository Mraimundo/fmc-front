import React from 'react';
import { render, getByTestId } from '@testing-library/react';

import { Role } from 'state/modules/point-management/team-awards/types';
import { roles } from 'state/modules/point-management/team-awards/mock';
import RolesList from '.';

describe('<RolesList />', () => {
  it('should render correctly', () => {
    const { getByText, container } = render(
      <RolesList
        roles={roles}
        isFetchingRoles={false}
        onSelect={() => jest.fn()}
        selectedRoles={[]}
      />,
    );

    roles.map((role: Role) => expect(getByText(role.name)).toBeInTheDocument());
    expect(getByTestId(container, 'roles-list')).toBeInTheDocument();
  });
});
