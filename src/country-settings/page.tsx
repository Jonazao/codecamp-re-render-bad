import React, { useState, useMemo } from "react";
import { Country } from "./types";
import { CountriesList } from "./list";
import { SelectedCountry } from "./selected-country";
import { ThemeProvider, Mode } from "./theme";

export const Page = ({ countries }: { countries: Country[] }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [savedCountry, setSavedCountry] = useState<Country>(countries[0]);
  const [mode, setMode] = useState<Mode>("light");

const value = useMemo(() => ({
  mode, setMode
}), [mode]);


const MemoizedCountrySave = useMemo(() => {
  return <SelectedCountry
  country={selectedCountry} // No cambia es estatica
  onCountrySaved={() => setSavedCountry(selectedCountry)}// Function no cambia 

/>
},[selectedCountry ]);

  return (
    <ThemeProvider value={value} >
    <h1>Country settings</h1>
     <button onClick={() =>  setMode((mode === "light") ? "dark" : "light")}>
        Toggle theme
      </button>   
      <div className="content">
        <CountriesList
          countries={countries}
          onCountryChanged={(c) => setSelectedCountry(c)}
          savedCountry={savedCountry}
        />
       {MemoizedCountrySave}
      </div>
   </ThemeProvider>  
  );
};
