const fs = require("fs")
const yaml = require("js-yaml")

const populatePageDicts = () => {
  let groupPages = {}
  let teamPages = {}
  let memberPages = {}
  const membersData = require("./content/members.json")
  const validTeams = new Set(["sii", "nii", "hii", "x", "g", "niii", "z", "bej48", "ckg48"])

  Object.keys(membersData).forEach((team) => {
    membersData[team].forEach((member) => {
      const lowerTeam = team.toLowerCase()
      // add member to group page
      const group = (member["gname"]+"48").toLowerCase()
      if (group in groupPages) {
        groupPages[group]["members"].push(member)
      } else {
        groupPages[group] = {"content": [], "members": [member]}
      }
      // add member to team page
      if (validTeams.has(lowerTeam) && lowerTeam in teamPages) {
        teamPages[lowerTeam]["members"].push(member)
      } else if (!validTeams.has(lowerTeam) && "other" in teamPages) {
        teamPages["other"]["members"].push(member)
      } else if (validTeams.has(lowerTeam)){
        teamPages[lowerTeam] = {"content": [], "members": [member]}
      } else {
        teamPages["other"] = {"content": [], "members": [member]}
      }
      // add page for member (possible for more than one member to have the same pinyin name)
      const name = member["pinyin"].toLowerCase()
      if (name in memberPages) {
        memberPages[name]["membersWithName"].push(member)
      } else {
        memberPages[name] = {"content": [], "membersWithName": [member]}
      }
    })
  })
  return [groupPages, teamPages, memberPages]
}

let groupPages, teamPages, memberPages
[groupPages, teamPages, memberPages] = populatePageDicts()

const ymlDoc = yaml.load(fs.readFileSync("./content/testcontent.yaml", "utf-8"))
  let allContent = []
  let languages = new Set()
  let contentTypes = new Set()
  // Process all content
  ymlDoc.forEach((element) => {
    const contentObj = {
      name: element.name,
      type: element.type,
      date: element.date,
      language: element.language,
      link: element.link,
      groups: element.groups,
      teams: element.teams,
      members: element.members,
    }
    allContent.push(contentObj)
    languages.add(element.language)
    contentTypes.add(element.type)
    // add to group content
    element.groups.forEach((group) => {
      const lowerGroup = group.toLowerCase()
      if (lowerGroup in groupPages) {
        groupPages[lowerGroup]["content"].push(contentObj)
      }
    })
    // add to team content
    element.teams.forEach((team) => {
      const lowerTeam = team.toLowerCase()
      if (lowerTeam in teamPages) {
        teamPages[lowerTeam]["content"].push(contentObj)
      }
    })
    // add to member content
    element.members.forEach((member) => {
      const lowerName = member.toLowerCase()
      if (lowerName in memberPages) {
        memberPages[lowerName]["content"].push(contentObj)
      } else {
        // if member doesn't exist, create new page
        memberPages[lowerName] =
          {"content": [contentObj], "membersWithName": [{"pinyin": member}]}
      }
    })
  })

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const languageOptions = Array.from(languages)
  const contentTypeOptions = Array.from(contentTypes)
  // Create page with links to all content
  createPage({
      path: "/all",
      component: require.resolve("./src/templates/all.js"),
      context: {
          allContent: allContent,
          languages: languageOptions,
          contentTypeOptions: contentTypeOptions
      }
  })
  // Create group pages
  Object.keys(groupPages).forEach((group) => {
    createPage({
      path: "/groups/"+group,
      component: require.resolve("./src/templates/group_page.js"),
      context: {
        groupName: group.toUpperCase(),
        groupContent: groupPages[group]["content"],
        languages: languageOptions,
        members: groupPages[group]["members"],
        contentTypeOptions: contentTypeOptions
      }
    })
  })
  // Create team pages
  Object.keys(teamPages).forEach((team) => {
    createPage({
      path: "/teams/"+team,
      component: require.resolve("./src/templates/team_page.js"),
      context: {
        teamName: team.toUpperCase(),
        teamContent: teamPages[team]["content"],
        languages: languageOptions,
        members: teamPages[team]["members"],
        contentTypeOptions: contentTypeOptions
      }
    })
  })
  // Create member pages
  Object.keys(memberPages).forEach((member) => {
    createPage({
      path: "/members/"+member.replace(/ /g,"_"),
      component: require.resolve("./src/templates/member_page.js"),
      context: {
        membersWithName: memberPages[member]["membersWithName"],
        memberContent: memberPages[member]["content"],
        languages: languageOptions,
        contentTypeOptions: contentTypeOptions
      }
    })
  })
}
