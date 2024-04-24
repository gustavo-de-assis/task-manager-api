import { ApplicationError } from "@/protocols";

export function invalidDataError(
  details: string[]
): ApplicationInvalidateDataError {
  return {
    name: "InvalidDataError",
    message: "Dados Inválidos!",
    details,
  };
}

type ApplicationInvalidateDataError = ApplicationError & {
  details: string[];
};
