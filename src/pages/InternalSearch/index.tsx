import React, { useState, useEffect } from 'react';
import { useForm, FormContext } from 'react-hook-form';

import { pluginApi } from '../../services/api';
import 'date-fns';

import StarButtonLine from '../../components/SearchForms/StarButtonsLine';
import StarButtonColumn from '../../components/SearchForms/StarButtonsColumn';
import ButtonsSquare from '../../components/SearchForms/ButtonsSquareCheck';
import ButtonsSquareNumber from '../../components/SearchForms/ButtonsSquareNumber';
import ButtonsRadios from '../../components/SearchForms/ButtonsRadios';


import {
  Container,
  Content,
  ContentInfo,
  MiniBox,
  Title,
  Form,
  FormControlRadio,
  RadioGroup,
  FormControlBanner,
  FormGrupSelect,
  FormControlData,
  KeyboardDate,
  FormControlHour,
  KeyboardTime,
  Button
} from './styles';

interface SurveysDataForm {
  id: number,
  title: string,
  description: string,
  picture: string,
  status: string,
  is_public: boolean,
  answer_required: boolean,
  show_answer: boolean,
  start_datetime: string,
  end_datetime: string,
  modified: string,
  created: string,
  allow_change_answer: boolean,
  banner_picture: string,
  className?: string;
  event: Event;
  survey_questions: [];
}



interface PropsInpu {
  selectedItems: string;
  item: Item;
}

interface Item {
  id: number;
  item: string
  title: string;
  image_url: string;
}



interface SubmitForm {

}

// Component producer Research
const ProducerResearch: React.FC = () => {

  const [radio, setRadio] = useState("");
  const [youropinion, setYourOpinion] = useState(
    new Array<SurveysDataForm>(),
  );

  // const [getid, setGetId] = useState(
  //   new Array<SurveysDataForm>(),
  // );

  // const CreatePoint = () => {
  //   const [items, setItems] = useState<Item[]>([]);
  //   const [ufs, setUfs] = useState<string[]>([]);
  //   const [selectedUf, setSelectedUf] = useState('0');
  //   const [cities, setCities] = useState<string[]>([]);
  //   const [selectedCity, setSelectedCity] = useState('0');
  //   const [selectedItems, setSelectedItems] = useState<number[]>([]);
  //   const [formData, setFormData] = useState({
  //     name: '',
  //     email: '',
  //     whatsapp: '',
  //   });


  const methods = useForm<SubmitForm>({
    mode: 'onSubmit'
  })

  const { handleSubmit } = methods;
  const onSubmit = handleSubmit(() => {

  });

  useEffect(() => {
    async function fetchSurveys() {
      const response = await pluginApi.get('participants/surveys/');
      setYourOpinion(response.data.available_surveys);
    }
    fetchSurveys();
  }, []);

  // useEffect(() => {
  //   async function fetchSurveys() {
  //     const response = await pluginApi.post('participants/surveys/sendAnswers?survey_id=1');
  //     console.log(response.data.survey_id);
  //     setGetId(response.data.survey_id);
  //   }
  //   fetchSurveys();
  // }, []);

  // function handleSelectItem(id: number) {
  //   const alreadySelected = selectedItems.includes(id);
  //   let selectedItemsAux = [...selectedItems];
  //   if (alreadySelected) {
  //     selectedItemsAux = selectedItemsAux.filter((item) => item !== id);
  //     setSelectedItems([...selectedItemsAux]);
  //   } else {
  //     setSelectedItems([...selectedItems, id]);
  //   }
  // }

  return (
    <Container>
      <h1>Pesquisas</h1>
      {youropinion &&
        youropinion.map(youropinion => (
          <MiniBox key={`key-cards-${youropinion.id}`}>
            <Content>
              <h2>{youropinion.title}</h2>
              <p>{(` De ${youropinion.start_datetime} até ${youropinion.end_datetime}`)}</p>
              <span>Vale 300 FMC Coins</span>
            </Content>
            <ContentInfo>
              <img src={youropinion.picture} alt={youropinion.title} />
              <p>{youropinion.description}</p>
            </ContentInfo>
          </MiniBox>
        ))}
      <hr />
      <Title>Perguntas</Title>
      <FormContext {...methods}>
        <Form onSubmit={onSubmit}>
          <FormControlRadio>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ex rerum, voluptatem eum a, perferendis, voluptas officia ullam repellendus excepturi
            necessitatibus iusto labore eos aperiam fugiat ipsam harum! Amet, non mollitia.
            </p>
            <RadioGroup>
              <div>
                <strong>
                  <input


                    type="radio"
                    checked={radio === "first-option"}
                    value="first-option"
                  // onChange={(e) => { setRadio(e.target.value) }}


                  />
                </strong>
                <span>Lorem ipsum dolor sit amnet</span>
              </div>
              <div>
                <strong >
                  <input
                    type="radio"
                    checked={radio === "second-option"}
                    value="second-option"
                    onChange={(e) => { setRadio(e.target.value) }}
                  />
                </strong>
                <span>Lorem ipsum dolor sit amnet</span>
              </div>
              <div>
                <strong >
                  <input
                    type="radio"
                    checked={radio === "third-option"}
                    value="third-option"
                    onChange={(e) => { setRadio(e.target.value) }}
                  />
                </strong>
                <span>Lorem ipsum dolor sit amnet</span>
              </div>
              <div>
                <strong>
                  <input
                    type="radio"
                    checked={radio === "fourth-option"}
                    value="fourth-option"
                    onChange={(e) => { setRadio(e.target.value) }}
                  />
                </strong>
                <span>Outro__________________________</span>
              </div>
            </RadioGroup>
          </FormControlRadio>
          <StarButtonLine />
          <StarButtonColumn />
          <ButtonsSquare />
          <FormControlBanner>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ex rerum, voluptatem eum a, perferendis, voluptas officia ullam repellendus excepturi
            necessitatibus iusto labore eos aperiam fugiat ipsam harum! Amet, non mollitia.
              </p>
            <div className="banner"></div>
          </FormControlBanner>
          <ButtonsSquareNumber />
          <ButtonsRadios />
          <FormGrupSelect>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ex rerum, voluptatem eum a, perferendis, voluptas officia ullam repellendus excepturi
            necessitatibus iusto labore eos aperiam fugiat ipsam harum! Amet, non mollitia.
              </p>
            <select name="cars" id="cars">
              <option value="volvo">Tipo de produto</option>
              <option value="saab">Tipo de Produto</option>
              <option value="opel">Tipo de produto</option>
              <option value="audi">Tipo de produto</option>
            </select>
          </FormGrupSelect>
          <FormControlData>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ex rerum, voluptatem eum a, perferendis, voluptas officia ullam repellendus excepturi
            necessitatibus iusto labore eos aperiam fugiat ipsam harum! Amet, non mollitia.
              </p>
            <KeyboardDate>
              <input
                type="date"
              />
            </KeyboardDate>
          </FormControlData>
          <FormControlHour>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ex rerum, voluptatem eum a, perferendis, voluptas officia ullam repellendus excepturi
            necessitatibus iusto labore eos aperiam fugiat ipsam harum! Amet, non mollitia.
              </p>
            <KeyboardTime>
              <input
                type="time"
              />
            </KeyboardTime>
          </FormControlHour>
          <Button
            type="submit"
          // onClick={handleSubmit}
          >
            Salvar
          </Button>
        </Form>
      </FormContext>
    </Container>
  );
};

export default ProducerResearch;
