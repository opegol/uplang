import React, { useState } from 'react';

export default function SelectLanguage({selectedLanguage}) {
  const [language, setLanguage] = useState('french');

  const handleSubmit = (e) => {
    e.preventDefault();
    //setLanguage(e.target.value)
    console.log(`setLanguage: ${language}`)
    selectedLanguage(language);
  };


  return (
    <form onSubmit={handleSubmit}>
    <div className="selectLanguage">
      <span className='language'>Select Language</span>
        <label>
            <select name="language" value={language}  onChange={(e) => setLanguage(e.target.value)}>
                <option value="french"> French</option>
                <option value="swahili">Swahili</option>
                <option value="chinese">Chinese</option>
            </select>
        </label>
        <button type="submit">Change</button>
        <div className='languageSelected'>{`ENG - ${language}`}</div>
    
    </div>
    </form>
  );
}
