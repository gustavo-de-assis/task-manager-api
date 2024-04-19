import { ApplicationError } from "@/protocols";

export function invalidDeadlineError(): ApplicationError {
  return {
    name: "InvalidDeadlineError",
    message: "Please, enter a valid deadline!",
  };
}
