import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useToast } from 'context/ToastContext';

import axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom';
import { formatDate } from 'util/datetime';

import { pluginApi } from '../../../services/api';
import 'date-fns';
import 'react-toastify/dist/ReactToastify.css';

import StarButtonLine from '../../../components/SearchForms/AnswerSurvey/LinearScale';
import MultipleLinearScale from '../../../components/SearchForms/AnswerSurvey/MultipleLinearScale';
import InputCheckBox from '../../../components/SearchForms/AnswerSurvey/InputCheckBox';
import InputGridCheckBox from '../../../components/SearchForms/AnswerSurvey/InputGridCheckBox';
import InputGridRadio from '../../../components/SearchForms/AnswerSurvey/InputGridRadio';
import InputRadios from '../../../components/SearchForms/AnswerSurvey/InputRadios';
import InputText from '../../../components/SearchForms/AnswerSurvey/InputText';
import InputDate from '../../../components/SearchForms/AnswerSurvey/InputDate';
import InputTime from '../../../components/SearchForms/AnswerSurvey/InputTime';

import DropDownList from '../../../components/SearchForms/AnswerSurvey/DropDownList';

import { getValueAnswer } from '../../../state/modules/answer/selectors'

import {
  Container,
  Content,
  ContentInfo,
  MiniBox,
  Title,
  Form,
  Button
} from './styles';

interface PointsData {
  created: string,
  start_datetime: string,
  end_datetime: string,
  id: number,
  points_count: string,
  questions_count: string,
}

interface SurveysDataForm {
  id: number;
  title: string;
  description: string;
  start_datetime: string;
  end_datetime: string;
  banner_picture: string;
  points: PointsData[];
  event: Event;
}

interface IconsProps {
  classes: {
    picked: string,
    unpicked: string,
  }
}

interface AnswersData {
  id: number;
  survey_question_id: number;
  type: string;
  scale_type: string;
  icon_attributes: IconsProps;
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
  const answerList = useSelector(getValueAnswer);
  const location = useLocation();
  const history = useHistory();
  const [youropinion, setYourOpinion] = useState<SurveysDataForm>({} as SurveysDataForm);
  const [questions, setQuestions] = useState<QuestionsData[]>([]);
  const [videoId, setVideoId] = useState("");

  const { addToast } = useToast();

  useEffect(() => {
    async function fetchSurveys() {
      const list_id = location.search.replace('?item=', '');
      const response = await pluginApi.get(`participants/surveys/getSurveyById?survey_id=${list_id}`);
      setVideoId(response.data.data.video.replace('https://www.youtube.com/watch?v=', ''));
      setYourOpinion(response.data.data);
      setQuestions(response.data.data.survey_questions);

      console.log(response.data.data);
    }
    fetchSurveys();
  }, [location]);

  const handleSave = useCallback(async (e: any) => {
    e.preventDefault()
    try {
      const list_id = location.search.replace('?item=', '');
      let formData = new FormData();
      const token = localStorage.getItem('@Vendavall:token');

      // eslint-disable-next-line
      Array.from(answerList).map((item: any, index: number) => {
        formData.append(`survey_question[${index}][value]`, item.value);
        formData.append(`survey_question[${index}][id]`, item.id);
        formData.append(`survey_question[${index}][answer_id]`, item.answer_id);
      })
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: token,
          Accept: 'application/json'
        }
      }
      await axios.post(`https://juntosfmc-adm.vendavall.com.br/juntos-fmc/api/v1/participants/surveys/sendAnswers?survey_id=${list_id}`, formData, config);
      addToast({
        title:
          'Obrigado por partipar da pesquisa! Em até 48 horas úteis os FMC Coins estarão disponíveis para utilizar em resgates no Católogo de Prêmios.',
        type: 'success',
      });
      history.push('/pesquisas-produtor');
    } catch (e) {
      addToast({
        title:
          e.response?.data?.message ||
          'Falha ao enviar respostas. Por favor tente novamente',
        type: 'error',
      });
    }
    // eslint-disable-next-line
  }, [answerList, location.search]);

  const typeForm = (
    type: number,
    question: string,
    answers: AnswersData[],
    id?: number | undefined,
    answer_id?: number | undefined,
  ) => {
    switch (type) {
      case 2: {
        return (
          <MultipleLinearScale
            quetion={question}
            answers={answers}
            id={id}
          />
        )
      }
      case 1: {
        return (
          <StarButtonLine
            quetion={question}
            answers={answers}
            id={id}
          />
        )
      }
      case 3: {
        return (
          <InputRadios
            quetion={question}
            answers={answers}
            id={id}
          />
        )
      }
      case 4: {
        return (
          <InputCheckBox
            quetion={question}
            answers={answers}
            id={id}
          />
        )
      }
      case 5: {
        return (
          <InputText
            quetion={question}
            type="text"
            id={id}
            answer_id={answer_id}
          />
        )
      }
      case 6: {
        return (
          <InputGridRadio
            quetion={question}
            answers={answers}
            id={id}
          />
        )
      }
      case 7: {
        return (
          <InputGridCheckBox
            quetion={question}
            answers={answers}
            id={id}
          />
        )
      }
      case 8: {
        return (
          <InputDate
            quetion={question}
            type="date"
            id={id}
            answer_id={answer_id}
          />
        )
      }
      case 9: {
        return (
          <InputTime
            quetion={question}
            type="time"
            id={id}
            answer_id={answer_id}
          />
        )
      }
      case 10: {
        return (
          <DropDownList
            quetion={question}
            answers={answers}
            id={id}
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
          {
            youropinion?.points?.length ? (
              <h2>Vale {(youropinion?.points?.length && youropinion?.points[0].points_count)} Coins</h2>
            ) : null
          }
        </Content>
        <ContentInfo>
          <img src={youropinion.banner_picture || 'https://www2.safras.com.br/sf-conteudo/uploads/2020/05/FMC.jpg'} alt={youropinion.title} />
          <p dangerouslySetInnerHTML={{ __html: youropinion.description }}></p>
          {/* eslint-disable-next-line  */}
          <iframe
            width="560"
            height="420"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </ContentInfo>
      </MiniBox>

      <hr />

      <Title>Perguntas</Title>

      <Form onSubmit={handleSave}>
        {
          questions.map(question => (
            typeForm(Number(question.type), question.question, question.survey_question_answers, question?.id, question?.survey_question_answers[0].id)
          ))
        }
        <Button
          type="submit"
        >
          Salvar
        </Button>
      </Form>
    </Container >
  );
};
export default ProducerResearch;
