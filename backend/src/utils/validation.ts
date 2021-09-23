import Joi from 'joi';

const questionName = Joi.string().required();
const code = Joi.string().required();
const language = Joi.string().required();
const submitTime = Joi.date().required();


export const submissionValidation = Joi.object({
    questionName,
    code,
    language,
    submitTime,
});