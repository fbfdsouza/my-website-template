import { restServer1 } from "./baseAPI";

export const getSomeData = (argument) => {
  return restServer1.get(`/some-end-point/${argument}`);
};

