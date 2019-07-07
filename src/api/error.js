// @flow
import type { $AxiosError } from "axios";

export type Error = $AxiosError<{}>;

// eslint-disable-next-line import/prefer-default-export
export const isUnauthorized = (error: Error) =>
  error.response && error.response.status === 401;
