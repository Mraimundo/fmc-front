import React, { useCallback, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { pluginApi } from '../../services/api';
import 'date-fns';

// import StarButtonLine from '../../components/SearchForms/StarButtonsLine';
// import StarButtonColumn from '../../components/SearchForms/StarButtonsColumn';
// import ButtonsSquare from '../../components/SearchForms/ButtonsSquareCheck';
// import ButtonsSquareNumber from '../../components/SearchForms/ButtonsSquareNumber';
// import ButtonsRadios from '../../components/SearchForms/ButtonsRadios';

import {
  Container,
  Content,
  ContentInfo,
  MiniBox,
  Title,
  Form,
  FormControlRadio,
  RadioGroup,
  // FormControlBanner,
  // FormGrupSelect,
  // FormControlData,
  // KeyboardDate,
  // FormControlHour,
  // KeyboardTime,
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

// Component producer Research
const ProducerResearch: React.FC = () => {
  const location = useLocation();
  const [radio, setRadio] = useState("");
  const [surveyQuestionId, setSurveyQuestionId] = useState('')
  const [answersQuestionId, setAnswersQuestionId] = useState(0)
  const [youropinion, setYourOpinion] = useState<SurveysDataForm>({} as SurveysDataForm);
  const [questions, setQuestions] = useState<QuestionsData>({} as QuestionsData);

  useEffect(() => {
    async function fetchSurveys() {
      const list_id = location.search.replace('?item=', '');
      const response = await pluginApi.get(`participants/surveys/getSurveyById?survey_id=${list_id}`);
      setYourOpinion(response.data.data);
      setQuestions(response.data.data.survey_questions[0]);
      setSurveyQuestionId(response.data.data.survey_questions[0].survey_id)
    }
    fetchSurveys();
  }, [location.search]);

  const handleSave = useCallback(async (e) => {
    e.preventDefault()
    const list_id = location.search.replace('?item=', '');
    let formData = new FormData();
    const token = localStorage.getItem('@Vendavall:token');

    formData.append('survey_question[0][value]', radio);
    formData.append('survey_question[0][id]', surveyQuestionId);
    formData.append('survey_question[0][answer_id]', answersQuestionId.toString());

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: token,
        Accept: 'application/json'
      }
    }
    await axios.post(`https://juntosfmc-adm.vendavall.com.br/juntos-fmc/api/v1/participants/surveys/sendAnswers?survey_id=${list_id}`, formData, config);
  }, [location.search, radio, surveyQuestionId, answersQuestionId]);

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
      <Form onSubmit={handleSave}>
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
                      onChange={(e) => {
                        setRadio(e.target.value)
                        setAnswersQuestionId(answer.id)
                      }}
                    />
                  </strong>
                  <span>{answer.answer}</span>
                </div>
              </RadioGroup>
            ))}
        </FormControlRadio>
        {/* <StarButtonLine />
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
          </FormControlHour> */}
        <Button
          type="submit"
        >
          Salvar
          </Button>
      </Form>
    </Container>
  );
};

export default ProducerResearch;
