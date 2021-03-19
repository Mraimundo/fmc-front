import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { formatDate } from 'util/datetime';

import { pluginApi } from '../../../services/api';
import 'date-fns';
import 'react-toastify/dist/ReactToastify.css';

import StarButtonLine from '../../../components/SearchForms/SeeAnswers/LinearScale';
import MultipleLinearScale from '../../../components/SearchForms/SeeAnswers/MultipleLinearScale';
import InputCheckBox from '../../../components/SearchForms/SeeAnswers/InputCheckBox';
import InputGridCheckBox from '../../../components/SearchForms/SeeAnswers/InputGridCheckBox';
import InputGridRadio from '../../../components/SearchForms/SeeAnswers/InputGridRadio';
import InputRadios from '../../../components/SearchForms/SeeAnswers/InputRadios';
import InputGlobal from '../../../components/SearchForms/SeeAnswers/InputGlobal';
import DropDownList from '../../../components/SearchForms/SeeAnswers/DropDownList';

import {
  Container,
  Content,
  ContentInfo,
  MiniBox,
  Title,
  Form,
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

interface SurveyAnswer {
  id: number;
  answer: string;
}

interface AnswersData {
  survey_participant_answers: SurveyAnswer[];
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

const ProducerResearch: React.FC = () => {
  const location = useLocation();
  // eslint-disable-next-line
  const [surveyQuestionId, setSurveyQuestionId] = useState('');
  const [youropinion, setYourOpinion] = useState<SurveysDataForm>({} as SurveysDataForm);
  const [questions, setQuestions] = useState<QuestionsData[]>([]);
  const [videoId, setVideoId] = useState("");


  useEffect(() => {
    async function fetchSurveys() {
      const list_id = location.search.replace('?item=', '');
      const response = await pluginApi.get(`participants/surveys/getSurveyById?survey_id=${list_id}`);
      setVideoId(response.data.data.video.replace('https://www.youtube.com/watch?v=', ''));
      setYourOpinion(response.data.data);
      setSurveyQuestionId(response.data.data.survey_questions[0].id)
      setQuestions(response.data.data.survey_questions)
    }
    fetchSurveys();
    // eslint-disable-next-line
  }, [location]);

  const typeForm = (
    type: number,
    question: string,
    answers: AnswersData[],
    id?: number | undefined,
  ) => {
    switch (type) {
      case 2: {
        return (
          <MultipleLinearScale
            quetion={question}
            answers={answers}
          />
        )
      }
      case 1: {
        return (
          <StarButtonLine
            quetion={question}
            answers={answers}
          />
        )
      }
      case 3: {
        return (
          <InputRadios
            quetion={question}
            answers={answers}
          />
        )
      }
      case 4: {
        return (
          <InputCheckBox
            quetion={question}
            answers={answers}
          />
        )
      }
      case 5: {
        return (
          <InputGlobal
            quetion={question}
            type="text"
            id={id}

          />
        )
      }
      case 6: {
        return (
          <InputGridRadio
            quetion={question}
            answers={answers}
          />
        )
      }
      case 7: {
        return (
          <InputGridCheckBox
            quetion={question}
            answers={answers}
          />
        )
      }
      case 8: {
        return (
          <InputGlobal
            quetion={question}
            type="date"
            id={id}
          />
        )
      }
      case 9: {
        return (
          <InputGlobal
            quetion={question}
            type="time"
            id={id}
          />
        )
      }
      case 10: {
        return (
          <DropDownList
            quetion={question}
            answers={answers}
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
          <p>{(` De ${formatDate(youropinion.start_datetime, 'dd/MM/yyyy')} até ${formatDate(youropinion.end_datetime, 'dd/MM/yyyy')}`)}</p>
        </Content>
        <ContentInfo>
          {
            !videoId ?
              <img src={youropinion.banner_picture || 'https://www2.safras.com.br/sf-conteudo/uploads/2020/05/FMC.jpg'} alt={youropinion.title} />
              :
              // eslint-disable-next-line
              <iframe
                width="560"
                height="420"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
          }
          <p dangerouslySetInnerHTML={{ __html: youropinion.description }}></p>
        </ContentInfo>
      </MiniBox>

      <hr />

      <Title>Respostas</Title>

      <Form>
        {
          questions.map(question => (
            typeForm(Number(question.type), question.question, question.survey_question_answers, question.id)
          ))
        }
      </Form>
    </Container >
  );
};
export default ProducerResearch;
