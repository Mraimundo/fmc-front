import React, { useState } from 'react';
// import {FiSquare} from 'react-icons/fi';

// import { pluginApi } from '../../services/api';

import {
  Container,
  FormSquare,
  FormGroupSquare
} from './styles';


const ButtonsSquare: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [ischecked, setIsChecked] = useState("");

  function handleCheckboxChange() {
    setChecked(!checked);
  }


  return (
    <Container>
      <FormSquare>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ex rerum, voluptatem eum a, perferendis, voluptas officia ullam repellendus excepturi
        necessitatibus iusto labore eos aperiam fugiat ipsam harum! Amet, non mollitia.
        </p>
        <FormGroupSquare>
          <div>
            <strong>
              <input
                type="checkbox"
                checked={ischecked === "first-option"}
                onClick={handleCheckboxChange}
                value="first-option"
                onChange={(e) => { setIsChecked(e.target.value) }}
              />
            </strong>
            <span>Lorem ipsum dolor sit amnet</span>
          </div>

          <div>
            <strong>
              <input
                type="checkbox"
                checked={ischecked === "second-option"}
                value="second-option"
                onClick={handleCheckboxChange}
                onChange={(e) => { setIsChecked(e.target.value) }}
              />
            </strong>
            <span>Lorem ipsum dolor sit amnet</span>
          </div>

          <div>
            <strong>
              <input
                type="checkbox"
                checked={ischecked === "third-option"}
                value="third-option"
                onClick={handleCheckboxChange}
                onChange={(e) => { setIsChecked(e.target.value) }}
              />
            </strong>
            <span>Lorem ipsum dolor sit amnet</span>
          </div>
          <div>
            <strong>
              <input
                type="checkbox"
                checked={ischecked === "fourth-option"}
                value="fourth-option"
                onClick={handleCheckboxChange}
                onChange={(e) => { setIsChecked(e.target.value) }}
              />
            </strong>
            <span>Outro______________________</span>
          </div>
        </FormGroupSquare>
      </FormSquare>
    </Container>
  );
};

export default ButtonsSquare;
