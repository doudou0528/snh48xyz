import * as React from 'react'
import tw from 'twin.macro'
import GroupTag from './group_tag'
import TeamTag from './team_tag'

const GroupsList = () => {
    const GroupContainer = tw.div`space-x-2`
    const LargeTag = tw.span`text-xl`
    const MediumTag = tw.span`text-lg`

    return (
        <div css={tw`flex gap-12 flex-row flex-wrap pt-5 pb-10 w-8/12`}>
            <GroupContainer>
                <LargeTag><GroupTag group="SNH48" showLink={true} /></LargeTag>
                <MediumTag><TeamTag team="SII" showLink={true} /></MediumTag>
                <MediumTag><TeamTag team="NII" showLink={true} /></MediumTag>
                <MediumTag><TeamTag team="HII" showLink={true} /></MediumTag>
                <MediumTag><TeamTag team="X" showLink={true} /></MediumTag>
            </GroupContainer>
            <GroupContainer>
                <LargeTag><GroupTag group="GNZ48" showLink={true} /></LargeTag>
                <MediumTag><TeamTag team="G" showLink={true} /></MediumTag>
                <MediumTag><TeamTag team="NIII" showLink={true} /></MediumTag>
                <MediumTag><TeamTag team="Z" showLink={true} /></MediumTag>
            </GroupContainer>
            <div>
                <LargeTag><GroupTag group="BEJ48" showLink={true} /></LargeTag>
            </div>
            <div>
                <LargeTag><GroupTag group="CKG48" showLink={true} /></LargeTag>
            </div>
        </div>
    )
  }
  
  export default GroupsList
  