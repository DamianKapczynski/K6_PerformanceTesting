export function getHeaders(token) {
  return {
    Accept: 'application/json, text/plain, */*',
    Authorization: `Bearer ${token}`,
    Connection: 'keep-alive',
    'Content-Type': 'application/json'
  };
}

export function getLoginHeaders() {
  return {
    accept: "application/json, text/plain, */*",
    "content-type": "application/x-www-form-urlencoded"
  };
}