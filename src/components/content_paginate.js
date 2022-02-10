import React, { useState } from 'react'
import ContentCard from './content_card';
import tw from 'twin.macro'

const ContentPaginate = (props) => {
  const [page, setPage] = useState(0)
  const contentList = props.contentList
  const pageSize = props.contentPerPage
  var pages = []
  for (let i=0; i<contentList.length; i+=pageSize) {
    pages.push(contentList.slice(i, i+pageSize))
  }

  const ContentItems = () => (
    <div css={tw`grid gap-4 lg:grid-cols-3 sm:grid-cols-1 pt-4`}>
      {pages.length>0 && pages[page].map((content) => 
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
    </div>);

  const PageButtons = () => (
    <div css={tw`space-x-2 pt-4 text-sm`}>
        {<button disabled={page === 0} css={tw`bg-gray-100 hover:cursor-pointer
            disabled:cursor-not-allowed outline-none border-none rounded px-2 py-2`}
            onClick={(e) => setPage(page-1)}>
              Prev Page
          </button>}
        {pages.map((p, index) => 
          <button css={[tw`bg-white hover:cursor-pointer
            outline-none border-none px-2 py-2`,
            index === page && tw`bg-gray-100 rounded`]}
            onClick={(e) => setPage(index)} key={index}>
              {index+1}
          </button>
        )}
        {<button disabled={page >= (pages.length-1)} css={tw`bg-gray-100 hover:cursor-pointer
            disabled:cursor-not-allowed outline-none border-none rounded px-2 py-2`}
          onClick={(e) => setPage(page+1)}>
              Next Page
          </button>}
    </div>
  )


  return (
    <div>
      <PageButtons />
      <ContentItems />
      <PageButtons />
    </div>
  )
}

export default ContentPaginate
