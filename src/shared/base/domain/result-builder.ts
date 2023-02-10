import { Result } from "./result";

export class Results
{
    static success<TResponse>(data: TResponse, message : string = null) {
        return new Result<TResponse>(data, message, null);
    }

    static failure(error: string, message: string = null) {
        return new Result<any>(null, message, error);
    }
}