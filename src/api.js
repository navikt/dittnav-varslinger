import { DONE_URL, TestProducer } from "./constants";

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

const postJSON = (url, content) =>
  new Promise((resolve, reject) => {
    fetch(url, postOptions(content))
      .then((response) => response.headers)
      .then((headers) => resolve(headers))
      .catch((e) => reject(e));
  });

export const postHendelse = (path, content) => {
  return postJSON(`${TestProducer.URL}/${path}`, content);
};

export const postDoneAll = () => {
  return postJSON(`${TestProducer.DONE_ALL_URL}`, null);
};

export const postDone = (content) => {
  return postJSON(`${DONE_URL}`, content);
};

export const postStatusoppdatering = (content) => {
  return postJSON(`${TestProducer.STATUSOPPDATERING_URL}`, content);
};
