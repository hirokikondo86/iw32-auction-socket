/**
 * JSONで成功レスポンスを返す
 * @param {express.Response} res
 * @param {number} status
 * @param {object} payload
 */
export const respondJSON = (res, status, payload) => {
  res.status(status).send({
    ok: true,
    data: payload,
  });
};

/**
 * JSONでエラーレスポンスを返す
 * @param {express.Response} res
 * @param {number} status
 * @param {object} payload
 */
export const respondErrorJSON = (res, status, payload) => {
  res.status(status).send({
    ok: false,
    message: payload,
  });
};
