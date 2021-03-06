/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, useCallback, useEffect } from 'react';
import { isWithinInterval } from 'date-fns';
import { useSelector } from 'react-redux';
import { useToast } from 'context/ToastContext';

import { useLocation, useHistory } from 'react-router-dom';
import { formatDate } from 'util/datetime';

import { pluginApi } from '../../../services/api';

import 'react-toastify/dist/ReactToastify.css';

import MultipleLinearScale from '../../../components/SearchForms/AnswerSurvey/MultipleLinearScale';
import InputCheckBox from '../../../components/SearchForms/AnswerSurvey/InputCheckBox';
import InputGridCheckBox from '../../../components/SearchForms/AnswerSurvey/InputGridCheckBox';
import InputGridRadio from '../../../components/SearchForms/AnswerSurvey/InputGridRadio';
import InputRadios from '../../../components/SearchForms/AnswerSurvey/InputRadios';
import InputText from '../../../components/SearchForms/AnswerSurvey/InputText';
import InputDate from '../../../components/SearchForms/AnswerSurvey/InputDate';
import InputTime from '../../../components/SearchForms/AnswerSurvey/InputTime';
import DropDownList from '../../../components/SearchForms/AnswerSurvey/DropDownList';

import TypeStar from '../../../components/SearchForms/AnswerSurvey/LinearScal/TypeStar';
import TypeCheckBox from '../../../components/SearchForms/AnswerSurvey/LinearScal/TypeCheckBox';
import TypeRadio from '../../../components/SearchForms/AnswerSurvey/LinearScal/TypeRadio';
import TypeEmoji from '../../../components/SearchForms/AnswerSurvey/LinearScal/TypeEmoji';

import { getValueAnswer } from '../../../state/modules/answer/selectors';

import {
  Container,
  Content,
  ContentInfo,
  MiniBox,
  Title,
  Form,
  Button,
} from './styles';

interface PointsData {
  start_date: string;
  end_date: string;
  points_count: string;
}

interface SurveysDataForm {
  id: number;
  title: string;
  description: string;
  start_datetime: string;
  end_datetime: string;
  banner_picture: string;
  video: string;
  points: PointsData[];
  event: Event;
  thank_you_message: string;
}

interface IconsProps {
  classes: {
    picked: string;
    unpicked: string;
  };
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
  scale_type?: number;
  name: string;
  answer: string;
  survey_question_answers: AnswersData[];
  alternative_groups?: string[];
}

const ProducerResearch: React.FC = () => {
  const answerList = useSelector(getValueAnswer);
  const location = useLocation();
  const history = useHistory();
  const [youropinion, setYourOpinion] = useState<SurveysDataForm>(
    {} as SurveysDataForm,
  );
  const [questions, setQuestions] = useState<QuestionsData[]>([]);
  const [videoId, setVideoId] = useState('');

  const { addToast } = useToast();

  useEffect(() => {
    async function fetchSurveys() {
      const list_id = location.search.replace('?item=', '');
      const response = await pluginApi.get(
        `participants/surveys/getSurveyById?survey_id=${list_id}`,
      );
      setVideoId(
        response.data.data.video.replace(
          'https://www.youtube.com/watch?v=',
          '',
        ),
      );
      setYourOpinion(response.data.data);
      setQuestions(response.data.data.survey_questions);
    }
    fetchSurveys();
  }, [location]);

  const handleSave = useCallback(
    async (e: any) => {
      e.preventDefault();
      try {
        const list_id = location.search.replace('?item=', '');
        const formData = new FormData();

        // eslint-disable-next-line
      Array.from(answerList).map((item: any, index: number) => {
          formData.append(`survey_question[${index}][value]`, item.value);
          formData.append(`survey_question[${index}][id]`, item.id);
          formData.append(
            `survey_question[${index}][answer_id]`,
            item.answer_id,
          );
        });

        pluginApi.post(
          `/participants/surveys/sendAnswers?survey_id=${list_id}`,
          formData,
        );
        addToast({
          title:
            e.response?.data?.data?.thank_you_message ||
            `Obrigado por partipar da pesquisa!
            Em at?? 48 horas ??teis os FMC Coins estar??o
            dispon??veis para utilizar em resgates no Cat??logo de Pr??mios.`,
          type: 'success',
        });
        history.push('/pesquisas-produtor');
      } catch (err) {
        addToast({
          title:
            err.response?.data?.message ||
            'Falha ao enviar respostas. Por favor tente novamente',
          type: 'error',
        });
      }
      // eslint-disable-next-line
  }, [answerList, location.search]);

  const typeForm = (
    type: number,
    name: string,
    question: string,
    answers: AnswersData[],
    id?: number | undefined,
    answer_id?: number | undefined,
    scale_type?: number | null,
    alternative_groups?: string[],
  ) => {
    switch (type) {
      case 2: {
        return (
          <MultipleLinearScale quetion={question} answers={answers} id={id} />
        );
      }
      case 1: {
        if (scale_type === 1) {
          return <TypeStar quetion={question} answers={answers} id={id} />;
        }
        if (scale_type === 2) {
          return <TypeCheckBox quetion={question} answers={answers} id={id} />;
        }
        if (scale_type === 3) {
          return <TypeRadio quetion={question} answers={answers} id={id} />;
        }
        if (scale_type === 4) {
          return <TypeEmoji quetion={question} answers={answers} id={id} />;
        }
      }
      // eslint-disable-next-line
      case 3: {
        return <InputRadios quetion={question} answers={answers} id={id} />;
      }
      case 4: {
        return <InputCheckBox quetion={question} answers={answers} id={id} />;
      }
      case 5: {
        return (
          <InputText
            quetion={question}
            type="text"
            name={name}
            id={id}
            answer_id={answer_id}
          />
        );
      }
      case 6: {
        return (
          <InputGridRadio
            question={question}
            answers={answers}
            id={id}
            topics={alternative_groups ?? []}
          />
        );
      }
      case 7: {
        return (
          <InputGridCheckBox
            question={question}
            answers={answers}
            id={id}
            topics={alternative_groups ?? []}
          />
        );
      }
      case 8: {
        return (
          <InputDate
            quetion={question}
            type="date"
            id={id}
            answer_id={answer_id}
          />
        );
      }
      case 9: {
        return (
          <InputTime
            quetion={question}
            type="time"
            id={id}
            answer_id={answer_id}
          />
        );
      }
      case 10: {
        return <DropDownList quetion={question} answers={answers} id={id} />;
      }
      default:
        return '';
    }
  };

  return (
    <Container>
      <h1>Pesquisas</h1>
      <MiniBox key={`key-cards-${youropinion.id}`}>
        <Content>
          <h2>{youropinion.title}</h2>
          <p>
            {` De ${formatDate(
              youropinion.start_datetime,
              'dd/MM/yyyy',
            )} at?? ${formatDate(youropinion.end_datetime, 'dd/MM/yyyy')}`}
          </p>
          {/* Adicionar os pontos respeitando o entervalo das datas */}
          {youropinion?.points?.map((item: PointsData) => {
            if (
              isWithinInterval(new Date(), {
                start: new Date(item.start_date),
                end: new Date(item.end_date),
              })
            ) {
              return <h2>Vale {item.points_count} Coins</h2>;
            }
          })}
        </Content>
        <ContentInfo>
          <img
            src={
              youropinion.banner_picture ||
              'https://www2.safras.com.br/sf-conteudo/uploads/2020/05/FMC.jpg'
            }
            alt={youropinion.title}
          />
          <p dangerouslySetInnerHTML={{ __html: youropinion.description }} />
          {/* eslint-disable-next-line  */}

          {youropinion?.video ? (
            // eslint-disable-next-line
              <iframe
                width="560"
                height="420"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
          ) : null}
        </ContentInfo>
      </MiniBox>

      <hr />

      <Title>Perguntas</Title>

      <Form onSubmit={handleSave}>
        {questions.map(question =>
          typeForm(
            Number(question.type),
            question.name,
            question.question,
            question.survey_question_answers,
            question?.id,
            question?.survey_question_answers[0].id,
            question.scale_type,
            question.alternative_groups,
          ),
        )}
        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
};
export default ProducerResearch;
