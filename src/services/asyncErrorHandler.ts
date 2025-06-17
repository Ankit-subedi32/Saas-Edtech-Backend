import { Request, Response, NextFunction } from 'express';

const asyncErrorHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return fn(req, res, next).catch((error: Error) => {
      res.status(500).json({
        message: error.message || "Internal Server Error",
        error: error
      });
    });
  };
};

export default asyncErrorHandler;