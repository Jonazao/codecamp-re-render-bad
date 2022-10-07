import React,{useMemo}  from "react";
import { Country } from "./types";
import { useTheme } from "./theme";

type CountriesListProps = {
  countries: Country[];
  onCountryChanged: (country: Country) => void;
  savedCountry: Country;
};

type itemProps = {
  country: Country;
  onCountryChanged: (country: Country) => void;
  savedCountry: Country;
};

const Item = React.memo(({ 
  country,  
  onCountryChanged,
  savedCountry
 }: itemProps) => {
  const { mode } = useTheme();

  const className = useMemo(()=> {
    return `country-item ${
    savedCountry.id === country.id ? "saved" : ""
  } ${mode === "dark" ? "dark" : ""}`},[mode]);

console.log('item')

  return (
    <button className={className} onClick={() =>  onCountryChanged(country)}>
      <img
        src={country.flagUrl}
        width={50}
        style={{ marginRight: "8px" }}
        alt={country.name}
      />
      <div>{country.name}</div>
    </button>
  );
},(prevProps, nextProps ) => {
  if( prevProps.savedCountry.id === nextProps.savedCountry.id){
    return true
  } else{
    return false
  }
})



export const CountriesList =  React.memo(({
  countries,
  onCountryChanged,
  savedCountry
}: CountriesListProps) => {

  return (
    <div className="countries-list">
      {countries.map((country) => (
        <Item country={country} key={country.id} onCountryChanged={onCountryChanged} savedCountry={savedCountry}/>
      ))}
    </div>
  );
})
