import React from 'react';
import CountryListItem from './CountryListItem';

export default function CountryList({ data }) {
  return data.map(countryData => <CountryListItem key={countryData.countryInfo.iso2} data={countryData} />);
}
