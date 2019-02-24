// @flow
import type { $AxiosError } from "axios";

export type FetchError = $AxiosError<{}>;

// eslint-disable-next-line import/prefer-default-export
export const isUnauthorized = (error: FetchError) =>
  error.response && error.response.status === 401;
