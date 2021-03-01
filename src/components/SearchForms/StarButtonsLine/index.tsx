import React from 'react';
import {AiOutlineStar} from 'react-icons/ai';

// import { pluginApi } from '../../services/api';

import { 
  Container,
  FormControlStar,
  FormGroup 
  
} from './styles';


const StarButtonsNumber: React.FC = ()  => {

  return ( 
    <Container>
      <FormControlStar>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ex rerum, voluptatem eum a, perferendis, voluptas officia ullam repellendus excepturi 
          necessitatibus iusto labore eos aperiam fugiat ipsam harum! Amet, non mollitia.
        </p>
          <FormGroup>
            <div>
              <span>1</span>
              <AiOutlineStar/>
            </div>
            <div>
              <span>2</span>
              <AiOutlineStar/>
            </div> 
            <div>
              <span>3</span>
              <AiOutlineStar/>
            </div>  
            <div>
              <span>4</span>
              <AiOutlineStar/>
            </div>  
            <div>
              <span>5</span>
              <AiOutlineStar/>
            </div>
            <div>
              <span>6</span>
              <AiOutlineStar/>
            </div>
            <div>
              <span>7</span>
              <AiOutlineStar/>
            </div> 
            <div>
              <span>8</span>
              <AiOutlineStar/>
            </div>  
            <div>
              <span>9</span>
              <AiOutlineStar/>
            </div>  
            <div>
              <span>10</span>
              <AiOutlineStar/>
            </div>        
          </FormGroup>
      </FormControlStar>
    </Container>
  );
};

export default  StarButtonsNumber;
