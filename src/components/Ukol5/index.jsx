import { InputField } from './InputField';
import { useState } from 'react';

/*
Zadání: Vyřešte tento úkol podobně jako předchozí, pouze s tím rozdílem, že tentokrát budete mít
  dvě pole, do kterých uživatel může psát jméno a příjmení. Výsledné jméno a příjmení se mají
  zobrazit pod nadpisem oddělené mezerou. Budete tedy potřebovat dva stavy, každý pro jedno pole.
*/

export const Ukol5 = () => {
  const [jmeno, setJmeno] = useState('Jan');
  const [prijmeni, setPrijmeni] = useState('Novák');
  const handleChangeJmeno = (jmeno) => {
    setJmeno(jmeno);
  };
  const handleChangePrijmeni = (prijmeni) => {
    setPrijmeni(prijmeni);
  };

  return (
    <>
      <p>
        Jméno: {jmeno} {prijmeni}
      </p>
      <InputField
        label="Jméno"
        value={jmeno}
        type="text"
        onValueChange={handleChangeJmeno}
      />
      <InputField
        label="Příjmení"
        value={prijmeni}
        type="text"
        onValueChange={handleChangePrijmeni}
      />
    </>
  );
};
