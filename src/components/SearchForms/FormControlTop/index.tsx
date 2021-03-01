import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


// import { pluginApi } from '../../services/api';

import { 
  Container,
  FormControlTop 
  
} from './styles';



const ControlTop: React.FC = ()  => {

  return ( 
    <Container>
      <FormControlTop>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ex rerum, voluptatem eum a, perferendis, voluptas officia ullam repellendus excepturi 
          necessitatibus iusto labore eos aperiam fugiat ipsam harum! Amet, non mollitia.
        </p>
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormLabel component="legend">Label Placement</FormLabel>
            <FormControlLabel
              value="top"
              control={<Checkbox color="primary" />}
              label="Top"
              labelPlacement="top"
            />
            <FormLabel component="legend">Label Placement</FormLabel>
            <FormControlLabel
              value="start"
              control={<Checkbox color="primary" />}
              label="Start"
              labelPlacement="start"
            />
          </FormGroup>
        </FormControl>
      </FormControlTop>
    </Container>
  );
};

export default ControlTop;
