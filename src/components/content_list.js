import React, { useState } from 'react'
import tw from 'twin.macro'
import ContentPaginate from './content_paginate'
import PropTypes from 'prop-types'

const ContentList = (props) => {
  const [curLanguage, setCurLanguage] = useState("English");
  const { allContent, languages, contentTypeOptions } = props;
  // can't use new Set() because it's mutable, just use list for now
  const [selectedContentTypes, setSelectedContentTypes] = useState(contentTypeOptions);

  const handleCheckContent = (event) => {
    const target = event.target
    const type = target.id
    const checked = target.checked
    if (checked) {
      setSelectedContentTypes(
        selectedContentTypes => [...selectedContentTypes, type]
      )
    }
    else {
      setSelectedContentTypes(
        selectedContentTypes.filter((item) => item !== type)
      )
    }
  }

  const ContentFilter = () => (
    <div css={tw`text-xs pt-4 space-x-2`}>
      {contentTypeOptions.map((option) => 
        <div css={tw`inline text-gray-500`} key={option}>
          <input type="checkbox" value="" id={option}
          css={tw`border border-solid border-gray-300 rounded`}
          onChange={handleCheckContent}
          checked={selectedContentTypes.includes(option)} />
          <label htmlFor={option}>{option}</label>
        </div>
      )}
    </div>
  )

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
    </select>)
  
  const filteredContent = allContent.filter(item => 
    item.language === curLanguage && selectedContentTypes.includes(item.type));

  const sortedContent = filteredContent.sort(
    (a,b) =>
      (new Date(b["date"])).getTime() - (new Date(a["date"])).getTime()
  );

  return (
    <div>
        <LanguageFilter />
        <ContentFilter />
        <ContentPaginate contentList={sortedContent} contentPerPage={9} />
    </div>
  )
}

export default ContentList

ContentList.propTypes = {
  allContent: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    groups: PropTypes.arrayOf(PropTypes.string),
    teams: PropTypes.arrayOf(PropTypes.string),
    members: PropTypes.arrayOf(PropTypes.string)
  })),
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  contentTypeOptions: PropTypes.arrayOf(PropTypes.string).isRequired
}