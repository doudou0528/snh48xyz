import React, { useState } from 'react'
import tw from 'twin.macro'
import ContentPaginate from './content_paginate';

const ContentList = (props) => {
  const [curLanguage, setCurLanguage] = useState("English");
  const { allContent, languages } = props;

  const LanguageFilter = () => (
    <select className="form-select" css={tw`
     text-base mt-1 rounded border-gray-300
    shadow-sm py-1 pr-12
    focus:border-indigo-300
    focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
    name="language" id="language"
    value={curLanguage}
    onChange={(e) => setCurLanguage(e.target.value)}>
      {languages.map((opt) => 
        <option value={opt} key={opt}>{opt}</option>
      )}
    </select>);
  const filteredContent = allContent.filter(link => link.language === curLanguage);
  const sortedContent = filteredContent.sort(
    (a,b) =>
      (new Date(b["date"])).getTime() - (new Date(a["date"])).getTime()
  );

  return (
    <div>
        <LanguageFilter />
        <ContentPaginate contentList={sortedContent} contentPerPage={9} />
    </div>
  )
}

export default ContentList
