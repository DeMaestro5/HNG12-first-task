import { Request, Response } from 'express';
import { ApiResponse } from '../types/apiTypes';
import { CONFIG } from '../config/constants';

export const getInfo = (_req: Request, res: Response): void => {
  try {
    const response: ApiResponse = {
      email: CONFIG.EMAIL,
      current_datetime: new Date().toISOString(),
      github_url: CONFIG.GITHUB_URL,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};
