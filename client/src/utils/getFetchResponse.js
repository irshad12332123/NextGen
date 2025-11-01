export async function getResponse({
  BASE_URL,
  endpoint = "",
  method = "GET",
  body = null,
  headers = {
    "Content-Type": "application/json",
  },
}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: method,
    headers: headers,
    body: body ? body : null,
  });
  return response;
}
