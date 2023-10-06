import React, { useState } from 'react';
import './App.css';

export function AttributeScore() {

  const [arcScore, setArcScore] = useState('10');
  const [disScore, setDisScore] = useState('10');
  const [holScore, setHolScore] = useState('10');
  const [marScore, setMarScore] = useState('10');
  const [arcmodifier, setArcModifier] = useState('');
  const [disModifier, setDisModifier] = useState('');
  const [holModifier, setHolModifier] = useState('');
  const [marModifier, setMarModifier] = useState('');

  const athlScore = marScore;
  const crafScore = arcScore;
  const diplScore = marScore;
  const deceScore = disScore;
  const guilScore = disScore;
  const healScore = holScore;
  const huntScore = marScore;
  const intuScore = holScore;
  const loreScore = arcScore;
  const percScore = disScore;
  const prowScore = marScore;
  const machScore = arcScore;
  const songScore = marScore;
  const steaScore = disScore;

  const athlProf = false;
  const crafProf = false;
  const diplProf = false;
  const deceProf = false;
  const guilProf = false;
  const healProf = false;
  const huntProf = false;
  const intuProf = false;
  const loreProf = false;
  const percProf = false;
  const prowProf = false;
  const machProf = false;
  const songProf = false;
  const steaProf = false;

  if (athlProf === true) {
    athlScore = athlScore + 2;
  } else {
    athlScore = athlScore;
  }

  if (crafProf === true) {
    crafScore = crafScore + 2;
  } else {
    crafScore = crafScore;
  }

  if (diplProf === true) {
    diplScore = diplScore + 2;
  } else {
    diplScore = diplScore;
  }

  if (deceProf === true) {
    deceScore = deceScore + 2;
  } else {
    deceScore = deceScore;
  }

  if (guilProf === true) {
    guilScore = guilScore + 2;
  } else {
    guilScore = guilScore;
  }

  if (healProf === true) {
    healScore = healScore + 2;
  } else {
    healScore = healScore;
  }

  if (huntProf === true) {
    huntScore = huntScore + 2;
  } else {
    huntScore = huntScore;
  }

  if (intuProf === true) {
    intuScore = intuScore + 2;
  } else {
    intuScore = intuScore;
  }

  if (loreProf === true) {
    loreScore = loreScore + 2;
  } else {
    loreScore = loreScore;
  }

  if (percProf === true) {
    percScore = percScore + 2;
  } else {
    percScore = percScore;
  }

  if (prowProf === true) {
    prowScore = prowScore + 2;
  } else {
    prowScore = prowScore;
  }

  if (machProf === true) {
    machScore = machScore + 2;
  } else {
    machScore = machScore;
  }

  if (songProf === true) {
    songScore = songScore + 2;
  } else {
    songScore = songScore;
  }

  if (steaProf === true) {
    steaScore = steaScore + 2;
  } else {
    steaScore = steaScore;
  }

  const handleInputChange = (e, scoreSetter, modifierSetter) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      scoreSetter(newValue);
      const newModifier = Math.floor((newValue - 10) / 2);
      modifierSetter(newModifier);
    }
  };

  return (
    <>
    <table>
      <thead>
        <tr>
          <td>Arcana</td>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>
            <input
              type="number"
              value={arcScore}
              onChange={(e) =>
              handleInputChange(e, setArcScore, setArcModifier)}
            />
          </td>
          <td>
            <input
              type="number"
              value={arcmodifier}
              readOnly
            />
          </td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <td>Discipline</td>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>
            <input
              type="number"
              value={disScore}
              onChange={(e) =>
                handleInputChange(e, setDisScore, setDisModifier)}
            />
          </td>
          <td>
            <input
              type="number"
              value={disModifier}
              readOnly
            />
          </td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <td>Holy</td>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>
            <input
              type="number"
              value={holScore}
              onChange={(e) =>
                handleInputChange(e, setHolScore, setHolModifier)}
            />
          </td>
          <td>
            <input
              type="number"
              value={holModifier}
              readOnly
            />
          </td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <td>Martial</td>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>
            <input
              type="number"
              value={marScore}
              onChange={(e) =>
                handleInputChange(e, setMarScore, setMarModifier)}
            />
          </td>
          <td>
            <input
              type="number"
              value={marModifier}
              readOnly
            />
          </td>
        </tr>
      </tbody>

    </table>

    <table>
      <thead>
        <tr>
          <th>Skill</th>
          <th>Modifier</th>
          <th>Proficiency</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Athletics:</td>
          <td>MAR</td>
          <td>
            <input
              type="checkbox" id={athlProf}/>
          </td>
          <td>
            <input
              type="number"
              value={athlScore}/>
          </td>
        </tr>
        <tr>
          <td>Crafting:</td>
          <td>ARC</td>
          <td>
            <input
                type="checkbox" id={crafProf}/>
          </td>
          <td>
            <input
              type="number"
              value={crafScore}/>
          </td>
        </tr>
        <tr>
          <td>Diplomacy:</td>
          <td>MAR</td>
          <td>
            <input
            type="checkbox" id={diplProf}/>
          </td>
          <td>
            <input
              type="number"
              value={diplScore}/>
          </td>
        </tr>
        <tr>
          <td>Deception:</td>
          <td>DIS</td>
          <td>
          <input
              type="checkbox" id={deceProf}/>
          </td>
          <td>
            <input
              type="number"
              value={deceScore}/>
          </td>
        </tr>
        <tr>
          <td>Guile:</td>
          <td>DIS</td>
          <td>
            <input
              type="checkbox"/>
          </td>
          <td>
            <input
              type="number"
              value={guilScore}/>
          </td>
        </tr>
        <tr>
          <td>Healing:</td>
          <td>HOL</td>
          <td>
            <input
                type="checkbox" id={healProf}/>
          </td>
          <td>
            <input
              type="number"
              value={healScore}/>
          </td>
        </tr>
        <tr>
          <td>Hunting:</td>
          <td>MAR</td>
          <td>
            <input
                type="checkbox" id={huntProf}/>
          </td>
          <td>
            <input
              type="number"
              value={huntScore}/>
          </td>
        </tr>
        <tr>
          <td>Intuition:</td>
          <td>HOL</td>
          <td>
            <input
              type="checkbox" id={intuProf}/>
          </td>
          <td>
            <input
              type="number"
              value={intuScore}/>
          </td>
        </tr>
        <tr>
          <td>Lore:</td>
          <td>ARC</td>
          <td>
            <input
              type="checkbox" id={loreProf}/>
          </td>
          <td>
            <input
              type="number"
              value={loreScore}/>
          </td>
        </tr>
        <tr>
          <td>Perception:</td>
          <td>DIS</td>
          <td>
            <input
              type="checkbox" id={percProf}/>
          </td>
          <td>
            <input
              type="number"
              value={percScore}/>
          </td>
        </tr>
        <tr>
          <td>Prowess:</td>
          <td>MAR</td>
          <td>
            <input
              type="checkbox" id={prowProf}/>
          </td>
          <td>
            <input
              type="number"
              value={prowScore}/>
          </td>
        </tr>
        <tr>
          <td>Machinery:</td>
          <td>ARC</td>
          <td>
            <input
              type="checkbox" id={machProf}/>
          </td>
          <td>
            <input
              type="number"
              value={machScore}/>
          </td>
        </tr>
        <tr>
          <td>Song & Story:</td>
          <td>MAR</td>
          <td>
            <input
              type="checkbox" id={songProf}/>
          </td>
          <td>
            <input
              type="number"
              value={songScore}/>
          </td>
        </tr>
        <tr>
          <td>Stealth:</td>
          <td>DIS</td>
          <td>
            <input
              type="checkbox" id={steaProf}/>
          </td>
          <td>
            <input
              type="number"
              value={steaScore}/>
          </td>
        </tr>
      </tbody>
    </table>
    </>
  );
};