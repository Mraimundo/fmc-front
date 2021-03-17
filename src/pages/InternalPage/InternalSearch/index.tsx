import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom';
import { formatDate } from 'util/datetime';

import { pluginApi } from '../../../services/api';
import 'date-fns';
import 'react-toastify/dist/ReactToastify.css';

import StarButtonLine from '../../../components/SearchForms/LinearScale';
import MultipleLinearScale from '../../../components/SearchForms/MultipleLinearScale';
import InputCheckBox from '../../../components/SearchForms/InputCheckBox';
import InputGridCheckBox from '../../../components/SearchForms/InputGridCheckBox';
import InputGridRadio from '../../../components/SearchForms/InputGridRadio';
import InputRadios from '../../../components/SearchForms/InputRadios';
import InputGlobal from '../../../components/SearchForms/InputGlobal';
import DropDownList from '../../../components/SearchForms/DropDownList';

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

const ProducerResearch: React.FC = () => {
  const answerList = useSelector(getValueAnswer);
  const location = useLocation();
  const history = useHistory();
  const [surveyQuestionId, setSurveyQuestionId] = useState('');
  const [youropinion, setYourOpinion] = useState<SurveysDataForm>({} as SurveysDataForm);
  // const [seeAnswers, setSeeAnswers] = useState<SurveysDataForm>({} as SurveysDataForm);
  const [questions, setQuestions] = useState<QuestionsData[]>([]);


  useEffect(() => {
    async function fetchSurveys() {
      const list_id = location.search.replace('?item=', '');
      const response = await pluginApi.get(`participants/surveys/getSurveyById?survey_id=${list_id}`);
      setYourOpinion(response.data.data);
      setQuestions(response.data.data.survey_questions);
      setSurveyQuestionId(response.data.data.survey_questions[0].id)
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
        formData.append(`survey_question[${index}][id]`, surveyQuestionId);
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

      toast.success('Obrigado por responder a nossa pesquisa!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      history.push('/pesquisas-produtor');
    } catch (error) {

      toast.error('Essa pesquisa já foi respondida!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    // eslint-disable-next-line
  }, [answerList, location.search, surveyQuestionId]);

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
          <img src={youropinion.banner_picture || 'https://www2.safras.com.br/sf-conteudo/uploads/2020/05/FMC.jpg'} alt={youropinion.title} />
          <p dangerouslySetInnerHTML={{ __html: youropinion.description }}></p>
        </ContentInfo>
      </MiniBox>

      <hr />

      <Title>Perguntas</Title>

      <Form onSubmit={handleSave}>
        {
          questions.map(question => (
            typeForm(Number(question.type), question.question, question.survey_question_answers, question.id)
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
