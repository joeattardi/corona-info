const BASE_URL = 'https://corona.lmao.ninja';

export async function getTotals() {
  const url = `${BASE_URL}/all`;

  const response = await fetch(url);
  return response.json();
}

export async function getAllCountries() {
  const url = `${BASE_URL}/countries`;
  const response = await fetch(url);
  return response.json();
}
