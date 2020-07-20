// type alias
type Uid = number | string | undefined

function logDetails(uid:Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}.`)
}

type Plataform = 'Windows' | 'Linux' | 'Mac OS' | 'iOS'

function renderPlataform(plataform: Plataform) {
  return plataform
}

renderPlataform('iOS')

logDetails(123, 'shoes')
logDetails('123', 'shoes')

logInfo(123, 'Carlos')
logInfo('123', 'Carlos')
