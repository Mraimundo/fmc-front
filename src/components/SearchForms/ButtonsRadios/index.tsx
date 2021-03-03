import React, { useState } from 'react';
// import {FiSquare} from 'react-icons/fi';

// import { pluginApi } from '../../services/api';

import {
  Container,
  SquareContent,
  FormGroupSquare
} from './styles';


const ButtonsSquareNumber: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState("");


  function handleCheckboxChange() {
    setChecked(!checked);
  }

  return (
    <Container>
      <SquareContent>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ex rerum, voluptatem eum a, perferendis, voluptas officia ullam repellendus excepturi
        necessitatibus iusto labore eos aperiam fugiat ipsam harum! Amet, non mollitia.
        </p>
        <FormGroupSquare>
          <form action="" method="post">
            <div className="square-info">
              <span>Lorem ipsum dolor sit amnet</span>
              <span>Lorem ipsum dolor sit amnet</span>
              <span>Lorem ipsum dolor sit amnet</span>
              <span>Lorem ipsum dolor sit amnet</span>
            </div>
            <div className="input-group">
              <div className="children-one">
                <label>Ótimo</label>
                <div>
                  <input
                    type="radio"
                    checked={radio === "first-option"}
                    onClick={handleCheckboxChange}
                    value="first-option"
                    onChange={(e) => { setRadio(e.target.value) }}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    checked={radio === "second-option"}
                    onClick={handleCheckboxChange}
                    value="second-option"
                    onChange={(e) => { setRadio(e.target.value) }}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    checked={radio === "third-option"}
                    onClick={handleCheckboxChange}
                    value="third-option"
                    onChange={(e) => { setRadio(e.target.value) }}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    checked={radio === "fourth-option"}
                    onClick={handleCheckboxChange}
                    value="fourth-option"
                    onChange={(e) => { setRadio(e.target.value) }}
                  />
                </div>
              </div>
              <div className="children-two">
                <label>Bom</label>
                <div>
                  <input
                    type="radio"
                    checked={radio === "fifth-option"}
                    onClick={handleCheckboxChange}
                    value="fifth-option"
                    onChange={(e) => { setRadio(e.target.value) }}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    checked={radio === "sixth-option"}
                    onClick={handleCheckboxChange}
                    value="sixth-option"
                    onChange={(e) => { setRadio(e.target.value) }}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    checked={radio === "eighth-option"}
                    onClick={handleCheckboxChange}
                    value="eighth-option"
                    onChange={(e) => { setRadio(e.target.value) }}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    checked={radio === "ninth-option"}
                    onClick={handleCheckboxChange}
                    value="ninth-option"
                    onChange={(e) => { setRadio(e.target.value) }}
                  />
                </div>
              </div>
              <div className="children-tree">
                <label>Ruim</label>
                <div>
                  <input
                    type="radio"
                    checked={radio === "tenth-option"}
                    onClick={handleCheckboxChange}
                    value="tenth-option"
                    onChange={(e) => { setRadio(e.target.value) }}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    checked={radio === "eleventh-option"}
                    onClick={handleCheckboxChange}
                    value="eleventh-option"
                    onChange={(e) => { setRadio(e.target.value) }}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    checked={radio === "twelfth-option"}
                    onClick={handleCheckboxChange}
                    value="twelfth-option"
                    onChange={(e) => { setRadio(e.target.value) }}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    checked={radio === "Thirteenth-option"}
                    onClick={handleCheckboxChange}
                    value="Thirteenth-option"
                    onChange={(e) => { setRadio(e.target.value) }}
                  />
                </div>
              </div>
            </div>
          </form>
        </FormGroupSquare>
      </SquareContent>
    </Container>
  );
};

export default ButtonsSquareNumber;
