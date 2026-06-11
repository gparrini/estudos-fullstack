import Joi from 'joi';

//Closure
const validation = (schema) => {
  return function validateInfo(information) {
    return schema.validation(information, { abortEarly: false });
  };
};

const driverSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  team: Joi.string().min(3).max(50).required(),
  points: Joi.number().min(0).max(1000).default(0),
});

const updateDriverSchema = Joi.object({
  name: Joi.string().min(3).max(50),
  team: Joi.string().min(3).max(50),
  points: Joi.number().min(0).max(1000),
}).min(1);

// function validateDriverInfo(information) {
//   return driverSchema.validate(information, { abortEarly: false });
// }

// function validateUpdateDriverInfo(information) {
//   return updateDriverSchema.validate(information, { abortEarly: false });
// }

// function validatePosition(information) {
//   return positionSchema.validate(information, { abortEarly: false });
// }

export const validateDriverInfo = validation(driverSchema);
export const validateUpdateDriverInfo = validation(updateDriverSchema);
export const validatePosition = (position, maxValue) =>
  Joi.number().min(1).max(maxValue).validate(position);
