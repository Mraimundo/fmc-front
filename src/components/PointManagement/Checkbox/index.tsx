import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckboxMaterial, { CheckboxProps } from '@material-ui/core/Checkbox';

const StyledCheckbox = withStyles({
  root: {
    color: '#193B4E',
    '&$checked': {
      color: '#193B4E',
    },
  },
  checked: {},
})((props: CheckboxProps) => <CheckboxMaterial color="default" {...props} />);

interface Props {
  checked?: boolean;
  disabled?: boolean;
  onChange(): void;
  label: string;
}
const Checkbox: React.FC<Props> = ({
  checked = false,
  disabled = false,
  onChange,
  label,
}) => {
  const teste = (
    <StyledCheckbox checked={checked} disabled={disabled} onChange={onChange} />
  );

  return (
    <FormGroup row>
      <FormControlLabel
        control={teste}
        label={<span style={{ color: '#193B4E' }}>{label}</span>}
      />
    </FormGroup>
  );
};

export default Checkbox;
