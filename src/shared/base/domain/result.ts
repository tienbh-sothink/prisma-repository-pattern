export class Result<TResponse extends any> {
    isSuccess: boolean = true;

    constructor(private readonly response: TResponse
        , private readonly message: string
        , private readonly error: string
        ) {
        if (error) this.isSuccess = false;
    }
}