import React, { useState, useEffect } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

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
  id: number;
  title: string;
  description: string;
  start_datetime: string;
  end_datetime: string;
  banner_picture: string;
  event: Event;
}

interface AnswersData {
  id: number;
  survey_question_id: number;
  answer: string;
}

interface QuestionsData {
  id: number;
  question: string;
  survey_question_answers: AnswersData[];
}

interface SubmitForm {

}

// Component producer Research
const ProducerResearch: React.FC = () => {
  const location = useLocation();
  const [radio, setRadio] = useState("");
  const [youropinion, setYourOpinion] = useState<SurveysDataForm>({} as SurveysDataForm);
  const [questions, setQuestions] = useState<QuestionsData>({} as QuestionsData);

  useEffect(() => {
    async function fetchSurveys() {
      const list_id = location.search.replace('?item=', '');
      const response = await pluginApi.get(`participants/surveys/getSurveyById?survey_id=${list_id}`);
      setYourOpinion(response.data.data);
      setQuestions(response.data.data.survey_questions[0]);
    }
    fetchSurveys();
  }, [location]);

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
      <MiniBox key={`key-cards-${youropinion.id}`}>
        <Content>
          <h2>{youropinion.title}</h2>
          <p>{(` De ${youropinion.start_datetime} até ${youropinion.end_datetime}`)}</p>
          <span>Vale 300 FMC Coins</span>
        </Content>
        <ContentInfo>
          <img src={youropinion.banner_picture} alt={youropinion.title} />
          <p>{youropinion.description}</p>
        </ContentInfo>
      </MiniBox>

      <hr />

      <Title>Perguntas</Title>
      <FormContext {...methods}>
        <Form onSubmit={onSubmit}>
          <FormControlRadio>
            <p>{questions.question}</p>
            {questions && questions.survey_question_answers &&
              questions.survey_question_answers.map(answer => (
                <RadioGroup key={answer.id}>
                  <div>
                    <strong>
                      <input
                        type="radio"
                        checked={radio === answer.answer}
                        value={answer.answer}
                        onChange={(e) => { setRadio(e.target.value) }}
                      />
                    </strong>
                    <span>{answer.answer}</span>
                  </div>
                </RadioGroup>
              ))}
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
