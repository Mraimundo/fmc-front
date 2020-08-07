import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import { ThemeContext } from 'styled-components';

import { defaultTheme } from 'styles/theme';
import { Role } from 'state/modules/point-management/team-awards/types';
import { roles } from 'state/modules/point-management/team-awards/mock';
import RolesList from '.';

describe('<RolesList />', () => {
  test('should render correctly', () => {
    const { getByText, container } = render(
      <ThemeContext.Provider value={defaultTheme}>
        <RolesList
          roles={roles}
          isFetchingRoles={false}
          onSelect={() => jest.fn()}
          selectedRoles={[]}
        />
      </ThemeContext.Provider>,
    );

    roles.map((role: Role) => expect(getByText(role.name)).toBeInTheDocument());
    expect(getByTestId(container, 'roles-list')).toBeInTheDocument();
  });
});
