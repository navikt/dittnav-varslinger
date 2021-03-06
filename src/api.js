import { TestProducer } from "./constants";
import { doneUrl } from "./utils/lenker";

export const tokenExpiresSoon = (headers) => headers.get("x-token-expires-soon");

const getOptions = {
  method: "GET",
  credentials: "include",
};

const postOptions = (content) => ({
  method: "POST",
  credentials: "include",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(content),
});

const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error("Fetch request failed");
  }
};

export const fetcher = async ({ queryKey }) => {
  const response = await fetch(queryKey, getOptions);
  checkResponse(response);

  return response.json();
};

const postJSON = async (url, content) => {
  const response = await fetch(url, postOptions(content));
  checkResponse(response);

  return response;
};

export const postHendelse = (path, content) => {
  return postJSON(`${TestProducer.URL}/${path}`, content);
};

export const postDoneAll = () => {
  return postJSON(`${TestProducer.DONE_ALL_URL}`, null);
};

export const postDone = (content) => {
  return postJSON(`${doneUrl}`, content);
};

export const postStatusoppdatering = (content) => {
  return postJSON(`${TestProducer.STATUSOPPDATERING_URL}`, content);
};
