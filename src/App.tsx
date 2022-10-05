import "./styles.css";
import { Page } from "./country-settings/page";
import { rawCountries } from "./raw-data";
import { Country } from "./country-settings/types";

const getCountriesFromRawData = (raw: any[]): Country[] => {
  return raw.map((value: any) => ({
    __typename: "country",
    name: String(value.name.common),
    id: String(value.cca2).toLowerCase(),
    independent: Boolean(value.independent),
    unMember: Boolean(value.unMember),
    flagUrl: `https://flagcdn.com/${String(value.cca2).toLowerCase()}.svg`,
    region: String(value.region),
    capital: value.capital.length ? String(value.capital[0]) : "",
    subregion: String(value.subregion)
  }));
};

export default function App() {
  return (
    <div className="App">
      <Page countries={getCountriesFromRawData(rawCountries)} />
    </div>
  );
}
