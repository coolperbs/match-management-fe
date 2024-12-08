type User = {
  // 用户信息
  name: string
  phone: string
  email: string
  idCard: string
  age: number
  gender: string
  address: string
  school: string
  grade: string
  class: string
  test： string
}
type Team = {
  name: string
  userList: Array<User>
}
type ChampionshipBasicInfo = {
  // 比赛基本信息
  name: string
  address: string
  fromDate: Date
  endDate: Date
  registrationFromDate: Date
  registrationEndDate: Date
  concatUserList: Array<User>
  ProjectGroupList: Array<ProjectGroup>
  status: '筹备中' | '待审核' | '已通过'
}
type ChampionshipItem = {
  // 比赛项目组(青年组，少年组，老年组)
  name: string
  alias: string // 代号
  minAge: number
  maxAge: number
  registrationType: '实名' | '身份证' | '电话'
  projectList: Array<Project>
}
type ProjectType =
  | '男单'
  | '女单'
  | '混单'
  | '男双'
  | '女双'
  | '混双'
  | '双打(不限性别)'
  | '男团'
  | '女团'
  | '混团'
type MatchType = '3局2胜' | '5局3胜' | '7局4胜' | '9局5胜' | '1局胜'
type PointType = '31' | '21'
type Project = {
  // 比赛项目(男单/女单)
  name: string
  type: ProjectType
  fee: number
  minPersionCount: number
  maxPersonCount: number
  stageList: Array<ProjectStage> // 阶段
}
type Stage = {
  // 比赛阶段(小组赛，淘汰赛)
  name: string
  personCount: number
  groupCount: number
  groupWinnerCount: number
  subStageList: Array<SubStage>
}
type SubStage = {
  type: '循环赛' | '淘汰赛' // round-robin | knockout
  playerCount: number
  // groupCount: number
  // winnerCount: number
  matchType: MatchType
  pointType: PointType
  groupList: Array<Group>
}
type knockoutSubStage = {
  // 淘汰赛
  winnerCount: number
} & SubStage
type roundRobinSubStage = {
  // 循环赛
  nameType: 'ABCD' | '1234' | '一二三四'
  groupCount: number
  groupWinnerCount: number
  loopCount: '单循环' | '双循环'
  organizationType: '逆时针' | '顺时针' | '贝尔格'
} & SubStage
type Group = {
  // 比赛阶段小组
  name: string
  playerList: Array<User>
  matchList: Array<Match>
}
type Match = {
  // 对决
  groupLoopIndex: number
  type: ProjectType
  player1: User | Team | null
  player2: User | Team | null
  isTeamMatch: boolean
  player1Point: number
  player2Point: number
  matchType: MatchType
  pointType: PointType
  roundList: Array<Round>
}
type TeamMatch = {
  teamMatchList: Array<Match>
} & Match
type Round = {
  // 对决局
}
type Point = {
  // 得分局
}
