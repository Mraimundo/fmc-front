import React, { useCallback, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify'
import axios from 'axios'
import { pluginApi } from '../../services/api';
import { formatDate } from 'util/datetime';

import 'date-fns';
import 'react-toastify/dist/ReactToastify.css';


// import StarButtonLine from '../../components/SearchForms/StarButtonsLine';
// import StarButtonColumn from '../../components/SearchForms/StarButtonsColumn';
// import ButtonsSquare from '../../components/SearchForms/ButtonsSquareCheck';
// import ButtonsSquareNumber from '../../components/SearchForms/ButtonsSquareNumber';
// import ButtonsRadios from '../../components/SearchForms/ButtonsRadios';

import InputGlobal from '../../components/SearchForms/InputGlobal';
// import SelectGlobal from '../../components/SearchForms/SelectGlobal';


import {
  Container,
  Content,
  ContentInfo,
  MiniBox,
  Title,
  Form,
  // FormControlRadio,
  // RadioGroup,
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
  type: string;
  scale_type: string;
  answer: string;
}

interface QuestionsData {
  id: number;
  question: string;
  type: string;
  answer: string;
  survey_question_answers: AnswersData[];
}
toast.configure()
// Component producer Research
const ProducerResearch: React.FC = () => {
  const location = useLocation();
  // const [radio, setRadio] = useState("");
  const [surveyQuestionId, setSurveyQuestionId] = useState('')
  // const [answersQuestionId, setAnswersQuestionId] = useState(0)
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

    // formData.append('survey_question[0][value]', radio);
    formData.append('survey_question[0][id]', surveyQuestionId);
    // formData.append('survey_question[0][answer_id]', answersQuestionId.toString());

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: token,
        Accept: 'application/json'
      }
    }
    await axios.post(`https://juntosfmc-adm.vendavall.com.br/juntos-fmc/api/v1/participants/surveys/sendAnswers?survey_id=${list_id}`, formData, config);

  }, [location.search, surveyQuestionId]);
  // }, [location.search, radio, surveyQuestionId, answersQuestionId]);

  const notify = () => {
    toast.success('Obrigado por responder a nossa pesquisa!', {
      position: toast.POSITION.TOP_RIGHT,
      // autoClose: false
    })
  }

  const typeForm = (
    type: number,
    question: string,
  ) => {
    switch (type) {
      case 5: {
        return (
          <InputGlobal
            quetion={question}
            type="text"
          />
        )
      }
      case 8: {
        return (
          <InputGlobal
            quetion={question}
            type="date"
          />
        )
      }
      case 9: {
        return (
          <InputGlobal
            quetion={question}
            type="time"
          />
        )
      }
      default:
        return ""
    }
  }

  return (
    <Container>
      <h1>Pesquisas</h1>
      <MiniBox key={`key-cards-${youropinion.id}`}>
        <Content>
          <h2>{youropinion.title}</h2>
          <p>
            {(` De ${formatDate(youropinion.start_datetime, 'dd/MM/yyyy')}
            até 
            ${formatDate(youropinion.end_datetime, 'dd/MM/yyyy')}`
            )}
          </p>
          <span>Vale 300 FMC Coins</span>
        </Content>
        <ContentInfo>
          <img src={youropinion.banner_picture || 'https://www2.safras.com.br/sf-conteudo/uploads/2020/05/FMC.jpg'} alt={youropinion.title} />
          <p>{(youropinion.description?.replace("<p>", "").replace("</p>", ""))}</p>
        </ContentInfo>
      </MiniBox>

      <hr />

      <Title>Perguntas</Title>

      <Form onSubmit={handleSave}>
        {
          typeForm(Number(questions.type), questions.question)
        }

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
          onClick={notify}
        >
          Salvar
        </Button>
      </Form>
    </Container>
  );
};

export default ProducerResearch;
