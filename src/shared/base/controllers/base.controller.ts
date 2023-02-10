import { Response } from "express";
import { Result } from "../domain/result";

export abstract class BaseController {
    response(res: Response, data: Result<any>) {
        if (data.isSuccess) this.ok(res, data);
        return this.badRequest(res, data);
    }

    private ok(res: Response, data: Result<any>) {

        return res.status(200);
    }

    private badRequest(res: Response, data: Result<any>) {
        return res.status(400);
    }

    protected notFound(res: Response, data: Result<any>) {
        return res.status(404);
    }

    protected forbidden(res: Response, data: Result<any>) {
        return res.status(403);
    }

    protected unauthorized(res: Response, data: Result<any>) {
        return res.status(401);
    }
}