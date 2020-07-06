import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

import { Subsidiary } from 'state/modules/point-management/team-awards/types';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type Props = {
  subsidiaries: Subsidiary[] | null;
  selectedSubsidiaries: number[] | null;
  onSelect: (values: number[]) => void;
};
const SubsidiarySelect: React.FC<Props> = ({
  subsidiaries = [],
  selectedSubsidiaries,
  onSelect,
}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="filter-branch">Filtrar Filial</InputLabel>
      <Select
        multiple
        value={selectedSubsidiaries || []}
        onChange={({ target }: any) => onSelect(target.value)}
        input={<Input />}
        renderValue={(selected: any) => (
          <>{selected.length} filiais selecionadas</>
        )}
        MenuProps={MenuProps}
      >
        {!!subsidiaries &&
          subsidiaries.map(({ id, label }: Subsidiary) => (
            <MenuItem key={id} value={id}>
              <Checkbox
                checked={
                  selectedSubsidiaries
                    ? selectedSubsidiaries.includes(id)
                    : false
                }
              />
              <ListItemText primary={label} />
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default SubsidiarySelect;
