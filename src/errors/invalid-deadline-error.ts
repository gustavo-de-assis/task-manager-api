import { ApplicationError } from "@/protocols";

export function invalidDeadlineError(): ApplicationError {
  return {
    name: "InvalidDeadlineError",
    message: "Por favor, entre com uma data válida!",
  };
}
