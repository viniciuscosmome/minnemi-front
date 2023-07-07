export const describeError = {
  required: () => 'Este campo é obrigatório ser preenchido.',
  minLength: (min) => `Este campo deve conter no mínimo ${min} caracteres.`,
  maxLength: (max) => `Este campo deve conter no máximo ${max} caracteres.`,
  mustBeEquals: (field) => `Este campo deve conter o mesmo valor do campo ${field}.`,
  pattern: (pattern) => `Este campo deve conter ${pattern}.`,
};
