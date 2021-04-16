import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isWithinInterval } from 'date-fns';
import { formatDate } from 'util/datetime';

import { pluginApi } from '../../../services/api';
import 'react-toastify/dist/ReactToastify.css';

import MultipleLinearScale from '../../../components/SearchForms/SeeAnswers/MultipleLinearScale';
import InputCheckBox from '../../../components/SearchForms/SeeAnswers/InputCheckBox';
import InputGridCheckBox from '../../../components/SearchForms/SeeAnswers/InputGridCheckBox';
import InputGridRadio from '../../../components/SearchForms/SeeAnswers/InputGridRadio';
import InputRadios from '../../../components/SearchForms/SeeAnswers/InputRadios';
import InputText from '../../../components/SearchForms/SeeAnswers/InputText';
import InputDate from '../../../components/SearchForms/SeeAnswers/InputDate';
import InputTime from '../../../components/SearchForms/SeeAnswers/InputTime';
import DropDownList from '../../../components/SearchForms/SeeAnswers/DropDownList';

import TipeStar from '../../../components/SearchForms/AnswerSurvey/LinearScal/TypeStar';
import TypeCheckBox from '../../../components/SearchForms/SeeAnswers/LinearScal/TypeCheckBox';
import TypeRadio from '../../../components/SearchForms/SeeAnswers/LinearScal/TypeRadio';
import TypeEmoji from '../../../components/SearchForms/SeeAnswers/LinearScal/TypeEmoji';

import {
  Container,
  Content,
  ContentInfo,
  MiniBox,
  Title,
  Form,
} from './styles';

interface PointsData {
  start_date: string,
  end_date: string,
  points_count: string,
}

interface SurveysDataForm {
  id: number;
  title: string;
  description: string;
  start_datetime: string;
  video: string;
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

interface ParticipantProps {
  answer: string;
}

interface AnswersData {
  id: number;
  survey_question_id: number;
  type: string;
  scale_type: string;
  icon_attributes: IconsProps;
  survey_participant_answers: ParticipantProps[];
  answer: string;
}

interface QuestionsData {
  id: number;
  question: string;
  type: string;
  scale_type?: number;
  answer: string;
  survey_question_answers: AnswersData[];
}

const ProducerResearch: React.FC = () => {
  const location = useLocation();
  const [youropinion, setYourOpinion] = useState<SurveysDataForm>({} as SurveysDataForm);
  const [questions, setQuestions] = useState<QuestionsData[]>([]);
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    async function fetchSurveys() {
      const list_id = location.search.replace('?item=', '');
      const response = await pluginApi.get(`participants/surveys/getSurveyById?survey_id=${list_id}`);
      setVideoId(response.data.data.video.replace('https://www.youtube.com/watch?v=', ''));
      setYourOpinion(response.data.data);
      setQuestions(response.data.data.survey_questions);
    }
    fetchSurveys();
  }, [location]);

  const typeForm = (
    type: number,
    question: string,
    answers: AnswersData[],
    id?: number,
    answer_id?: number,
    scale_type?: number | null,
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
        if (scale_type === 1) {
          return (
            <TipeStar
              quetion={question}
              answers={answers}
              id={id}
            />
          )
        }
        if (scale_type === 2) {
          return (
            <TypeCheckBox
              quetion={question}
              answers={answers}
              id={id}
            />
          )
        }
        if (scale_type === 3) {
          return (
            <TypeRadio
              quetion={question}
              answers={answers}
              id={id}
            />
          )
        }
        if (scale_type === 4) {
          return (
            <TypeEmoji
              quetion={question}
              answers={answers}
              id={id}
            />
          )
        }
      }
      // eslint-disable-next-line
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
            id={id}
            answers={answers}
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
            id={id}
            answers={answers}
          />
        )
      }
      case 9: {
        return (
          <InputTime
            quetion={question}
            id={id}
            answers={answers}
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
          {/* Adicionar os pontos respeitando o entervalo das datas*/}
          {
            youropinion?.points?.map((item: PointsData) => {
              if (isWithinInterval(new Date(), { start: new Date(item.start_date), end: new Date(item.end_date) })) {
                return <h2>Vale {item.points_count} Coins</h2>
              }
            })
          }
        </Content>
        <ContentInfo>
          <img src={youropinion.banner_picture || 'https://www2.safras.com.br/sf-conteudo/uploads/2020/05/FMC.jpg'} alt={youropinion.title} />
          <p dangerouslySetInnerHTML={{ __html: youropinion.description }}></p>
          {/* eslint-disable-next-line  */}

          {
            youropinion?.video ? (
              // eslint-disable-next-line
              <iframe
                width="560"
                height="420"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            ) : null
          }
        </ContentInfo>
      </MiniBox>

      <hr />

      <Title>Respostas</Title>

      <Form>
        {
          questions.map(question => (
            typeForm(Number(question.type), question.question, question.survey_question_answers, question.id, question.survey_question_answers[0]?.id, question.scale_type)
          ))
        }
      </Form>
    </Container >
  );
};
export default ProducerResearch;
