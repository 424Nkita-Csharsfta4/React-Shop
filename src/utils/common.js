export const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

export const buildUrl = (url, params) => {
  let urlWithParams = url;

  Object.entries(params).forEach(([key, value], i) => {
    const sign = !i ? "?" : "&";
    urlWithParams += `${sign}${key}=${value}`;
  });

  return urlWithParams;
};

export const sumBy = (arr) => arr.reduce((prev, cur) => prev + cur, 0);
