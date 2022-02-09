import React, { useState } from 'react'
import tw from 'twin.macro'
import ContentCard from './content_card';

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

  const Grid = tw.div`grid gap-4 lg:grid-cols-2 sm:grid-cols-1 pt-4`;
  const ContentItems = () => (
    <Grid>
      {sortedContent.map((content) => 
        <ContentCard
            name={content["name"]}
            date={content["date"].split("T")[0]}
            link={content["link"]}
            groups={content["groups"]}
            teams={content["teams"]}
            members={content["members"]}
            key={content["name"]+content["language"]}
        />
      )}
    </Grid>);

  return (
    <div>
        <LanguageFilter />
        <ContentItems />
    </div>
  )
}

export default ContentList
