// AccountInfo
// CharInfo
// PlayerInfo

type AccountInfo = {
  id: number | string
  name: string
  email?: string
}

const account: AccountInfo = {
  id: 123,
  name: 'Carlos'
}

type CharInfo = {
  nickname: string
  level: number
}

const char: CharInfo = {
  nickname: 'carlos',
  level: 100
}

// Intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  name: 'Carlos',
  nickname: 'carlos',
  level: 1000,
  id: '123'
}
