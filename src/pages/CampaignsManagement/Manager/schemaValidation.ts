import * as Yup from 'yup';

const mandatoryMessage = 'Campo obrigatório';

export default Yup.object().shape({
  description: Yup.string().required(mandatoryMessage),
  mechanic: Yup.object()
    .shape({ id: Yup.number().required(mandatoryMessage) })
    .typeError(mandatoryMessage),
  audience: Yup.array()
    .of(
      Yup.object()
        .shape({
          customer: Yup.object()
            .shape({ id: Yup.number().required(mandatoryMessage) })
            .typeError(mandatoryMessage),
        })
        .typeError(mandatoryMessage),
    )
    .min(1, mandatoryMessage),
  startDate: Yup.date().required(mandatoryMessage).typeError(mandatoryMessage),
  endDate: Yup.date().required(mandatoryMessage).typeError(mandatoryMessage),
  prize: Yup.object()
    .shape({
      name: Yup.string().required(mandatoryMessage),
      description: Yup.string().required(mandatoryMessage),
    })
    .typeError(mandatoryMessage),
  expectedSellIn: Yup.number()
    .required(mandatoryMessage)
    .min(1, mandatoryMessage),
  expectedSellOut: Yup.number()
    .required(mandatoryMessage)
    .min(1, mandatoryMessage),
  goals: Yup.array()
    .of(
      Yup.object()
        .shape({
          product: Yup.object()
            .shape({ id: Yup.number().required(mandatoryMessage) })
            .required(mandatoryMessage)
            .typeError(mandatoryMessage),
          expectedVolume: Yup.number()
            .required(mandatoryMessage)
            .min(1, mandatoryMessage),
        })
        .typeError(mandatoryMessage)
        .required(mandatoryMessage),
    )
    .typeError(mandatoryMessage)
    .required(mandatoryMessage)
    .min(1, mandatoryMessage),
});
