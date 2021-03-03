import React from 'react';
import {AiOutlineStar} from 'react-icons/ai';

// import { pluginApi } from '../../services/api';

import { 
  Container,
  FormStarColumn,
  FormGroup 
  
} from './styles';



const StarButtonsColumn: React.FC = ()  => {

  return ( 
    <Container>
      <FormStarColumn>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ex rerum, voluptatem eum a, perferendis, voluptas officia ullam repellendus excepturi 
          necessitatibus iusto labore eos aperiam fugiat ipsam harum! Amet, non mollitia.
        </p>
          <FormGroup>
            <div>
              <span>Lorem ipsum dolor sit amnet</span>
              <strong>
                <AiOutlineStar/>
              </strong>
              <strong>
                <AiOutlineStar/>
              </strong>
              <strong>
                <AiOutlineStar/>
              </strong>
              <strong>
                <AiOutlineStar/>
              </strong>
              <strong>
                <AiOutlineStar/>
              </strong>
            </div>

            <div>
              <span>Lorem ipsum dolor sit amnet</span>
              <strong>
                <AiOutlineStar/>
              </strong>
              <strong>
                <AiOutlineStar/>
              </strong>
              <strong>
                <AiOutlineStar/>
              </strong>
              <strong>
                <AiOutlineStar/>
              </strong>
              <strong>
                <AiOutlineStar/>
              </strong>
            </div>

            <div>
              <span>Lorem ipsum dolor sit amnet</span>
              <strong>
                <AiOutlineStar/>
              </strong>
              <strong>
                <AiOutlineStar/>
              </strong>
              <strong>
                <AiOutlineStar/>
              </strong>
              <strong>
                <AiOutlineStar/>
              </strong>
              <strong>
                <AiOutlineStar/>
              </strong>
            </div>
            <div>
              <span>Lorem ipsum dolor sit amnet</span>
              <strong>
                <AiOutlineStar/>
              </strong>
              <strong>
                <AiOutlineStar/>
              </strong>
              <strong>
                <AiOutlineStar/>
              </strong>
              <strong>
                <AiOutlineStar/>
              </strong>
              <strong>
                <AiOutlineStar/>
              </strong>
            </div>
          </FormGroup>
      </FormStarColumn>
    </Container>
  );
};

export default StarButtonsColumn;
