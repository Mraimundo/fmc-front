import React from 'react';

// import { pluginApi } from '../../services/api';

import AnswersOne from 'assets/images/cards/answers-1.png';
import AnswersTwo from 'assets/images/cards/answers-2.png';
import AnswersTree from 'assets/images/cards/answers-3.png';

import { Container, CardContent } from './styles';


const Cards: React.FC = () => {

  return (

    <Container>
      <CardContent>
        <div className="card__description">
          <div className="card">
            <div className="card-image">
              <img src={AnswersOne} alt="" />
            </div>

            <div className="body-card">
              <h1>Nome da pesquisa</h1>
              <span>De 00/00/2021 até 00/00/2021</span>
              <p>Lorem ipsum dolor sit amet, consectetue adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut Wisi enim ad minim veniam,
              quis nostrud exerci tation ullamcorper suscipit.
              </p>
              <h2>Valor 300 FMC Coins</h2>
              <button>Responder</button>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={AnswersTwo} alt="" />
            </div>

            <div className="body-card">
              <h1>Nome da pesquisa</h1>
              <span>De 00/00/2021 até 00/00/2021</span>
              <p>Lorem ipsum dolor sit amet, consectetue adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut Wisi enim ad minim veniam,
              quis nostrud exerci tation ullamcorper suscipit.
              </p>
              <h2>Valor 300 FMC Coins</h2>
              <button>Responder</button>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={AnswersTree} alt="" />
            </div>

            <div className="body-card">
              <h1>Nome da pesquisa</h1>
              <span>De 00/00/2021 até 00/00/2021</span>
              <p>Lorem ipsum dolor sit amet, consectetue adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut Wisi enim ad minim veniam,
              quis nostrud exerci tation ullamcorper suscipit.
              </p>
              <h2>Valor 300 FMC Coins</h2>
              <button>Responder</button>
            </div>
          </div>
        </div>
      </CardContent>
    </Container>
  );
};

export default Cards;
