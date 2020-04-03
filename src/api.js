const BASE_URL = 'https://corona.lmao.ninja';

export async function getTotals() {
  const url = `${BASE_URL}/all`;

  const response = await fetch(url);
  return response.json();
}
