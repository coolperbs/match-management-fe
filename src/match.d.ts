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
type ChampionshipType = '羽毛球' | '乒乓球' | '网球'
type PlayerType = 'person' | 'team'

type User = {
  // 用户信息
  id: number
  name: string
  phone: string
  email: string
  idCard: string
  age: number
  gender: string
  address: string
  createBy: number
  createTime: Date
  updateBy: number
  updateTime: Date
}

type Team = {
  id: number
  name: string
  userList: Array<User>
  createBy: number
  createTime: Date
  updateBy: number
  updateTime: Date
}

type Championship = {
  // 赛事
  // 比赛基本信息
  id: number
  name: string
  address: string
  fromDate: Date
  endDate: Date
  type: ChampionshipType
  registrationFromDate: Date
  registrationEndDate: Date
  concatUserList: Array<User>
  ProjectGroupList: Array<ProjectGroup>
  status: '筹备中' | '待审核' | '已通过'
  concatUserList: Array<User> // 联系人
  adImage: string // 广告图
  createBy: number
  createTime: Date
  updateBy: number
  updateTime: Date
}

type Category = {
  // 赛事分组
  // 比赛项目组(青年组，少年组，老年组)
  id: number
  name: string
  alias: string // 代号
  minAge: number
  maxAge: number
  registrationType: '实名' | '身份证' | '电话'
  projectList: Array<Project>
  createBy: number
  createTime: Date
  updateBy: number
  updateTime: Date
}

type Project = {
  // 比赛项目(男单/女单)
  id: number
  name: string
  type: ProjectType
  fee: number
  minPlayerCount: number
  maxPlayerCount: number
  stageList: Array<ProjectStage> // 阶段
  createBy: number
  createTime: Date
  updateBy: number
  updateTime: Date
}

type Stage = {
  // 比赛阶段(小组赛，淘汰赛)
  id: number
  type: '循环赛' | '淘汰赛' // round-robin | knockout 赛制类型
  name: string
  playerCount: number
  playerType: PlayerType // 参赛人员类型
  // groupCount: number
  // winnerCount: number
  matchType: MatchType // 局赛制
  pointType: PointType // 分赛制
  groupList: Array<Group>
  createBy: number
  createTime: Date
  updateBy: number
  updateTime: Date
}

type knockoutStage = {
  // 淘汰赛
  winnerCount: number // 晋级数量
} & Stage

type roundRobinStage = {
  // 循环赛
  nameType: 'ABCD' | '1234' | '一二三四' // 命名方式
  groupCount: number
  groupWinnerCount: number
  loopCount: '单循环' | '双循环' // 循环次数
  organizationType: '逆时针' | '顺时针' | '贝尔格' // 编排方式
} & Stage

type Group = {
  // 比赛阶段小组
  id: number
  name: string
  playerList: Array<User>
  matchList: Array<Match>
  teamList: Array<Team>
  teamMatchList: Array<TeamMatch>
  createBy: number
  createTime: Date
  updateBy: number
  updateTime: Date
}

type Lottery = {
  // 抽签
  id: number
  player: Array<User>
  team: Team
  name: string
}

type Match = {
  // 对决
  id: number
  groupLoopIndex: number
  type: ProjectType
  // player1: Lottery | null
  // player2: Lottery | null
  // player3: Lottery | null
  // player4: Lottery | null
  isTeamMatch: boolean
  homePlayer: Lottery // 主队
  awayPlayer: Lottery // 客队
  homePlayerPoint: number // 主队得分
  awayPlayerPoint: number // 客队得分
  matchType: MatchType
  pointType: PointType
  roundList: Array<Round>
  createBy: number
  createTime: Date
  updateBy: number
  updateTime: Date
}

type TeamMatch = {
  id: number
  teamMatchList: Array<Match>
} & Match

type Round = {
  // 对决局
  id: number
  // matchId: number
  left: Lottery
  right: Lottery
  winner: Lottery
  leftPoint: number
  rightPoint: number
  pointProcess: Array<Point>
  createBy: number
  createTime: Date
  updateBy: number
  updateTime: Date
}

type Point = {
  // 得分局
  id: number
  player1: User
  player2: User
  player3: User
  player4: User
  leftPoint: number
  rightPoint: number
  createBy: number
  createTime: Date
  updateBy: number
  updateTime: Date
}
