import React, { useState } from 'react';
// import {FiSquare} from 'react-icons/fi';

// import { pluginApi } from '../../services/api';

import {
  Container,
  FormSquare,
  FormGroupSquare
} from './styles';


const ButtonsSquareNumber: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [isChecked, setIsChecked] = useState("");

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
          <form action="" method="post">
            <div className="square-info">
              <span>Lorem ipsum dolor sit amnet</span>
              <span>Lorem ipsum dolor sit amnet</span>
              <span>Lorem ipsum dolor sit amnet</span>
              <span>Lorem ipsum dolor sit amnet</span>
            </div>
            <div className="input-group">
              <div className="children-one">
                <label>1</label>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked === "first-option"}
                    onClick={handleCheckboxChange}
                    value="first-option"
                    onChange={(e) => { setIsChecked(e.target.value) }} />
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked === "second-option"}
                    onClick={handleCheckboxChange}
                    value="second-option"
                    onChange={(e) => { setIsChecked(e.target.value) }} />
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked === "third-option"}
                    onClick={handleCheckboxChange}

                    value="third-option"
                    onChange={(e) => { setIsChecked(e.target.value) }} />
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked === "fourth-option"}
                    onClick={handleCheckboxChange}
                    value="fourth-option"
                    onChange={(e) => { setIsChecked(e.target.value) }} />
                </div>
              </div>
              <div className="children-two">
                <label>2</label>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked === "fifth-option"}
                    onClick={handleCheckboxChange}
                    value="fifth-option"
                    onChange={(e) => { setIsChecked(e.target.value) }} />
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked === "sixth-option"}
                    onClick={handleCheckboxChange}
                    value="sixth-option"
                    onChange={(e) => { setIsChecked(e.target.value) }} />
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked === "seventh-option"}
                    onClick={handleCheckboxChange}
                    value="seventh-option"
                    onChange={(e) => { setIsChecked(e.target.value) }} />
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked === "eighth-option"}
                    onClick={handleCheckboxChange}
                    value="eighth-option"
                    onChange={(e) => { setIsChecked(e.target.value) }} />
                </div>
              </div>
              <div className="children-tree">
                <label>3</label>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked === "ninth-option"}
                    onClick={handleCheckboxChange}
                    value="ninth-option"
                    onChange={(e) => { setIsChecked(e.target.value) }} />
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked === "tenth-option"}
                    onClick={handleCheckboxChange}
                    value="tenth-option"
                    onChange={(e) => { setIsChecked(e.target.value) }} />
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked === "eleventh-option"}
                    onClick={handleCheckboxChange}
                    value="eleventh-option"
                    onChange={(e) => { setIsChecked(e.target.value) }} />
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked === "twelfth-option"}
                    onClick={handleCheckboxChange}
                    value="twelfth-option"
                    onChange={(e) => { setIsChecked(e.target.value) }} />
                </div>
              </div>

              <div className="children-for">
                <label>4</label>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked === "Thirteenth-option"}
                    onClick={handleCheckboxChange}
                    value="Thirteenth-option"
                    onChange={(e) => { setIsChecked(e.target.value) }} />
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked === "fourteenth-option"}
                    onClick={handleCheckboxChange}
                    value="fourteenth-option"
                    onChange={(e) => { setIsChecked(e.target.value) }} />
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked === "fifteenth-option"}
                    onClick={handleCheckboxChange}
                    value="fifteenth-option"
                    onChange={(e) => { setIsChecked(e.target.value) }} />
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={isChecked === "sixteenth-option"}
                    onClick={handleCheckboxChange}
                    value="sixteenth-option"
                    onChange={(e) => { setIsChecked(e.target.value) }} />
                </div>
              </div>
            </div>
          </form>
        </FormGroupSquare>
      </FormSquare>
    </Container>
  );
};

export default ButtonsSquareNumber;
