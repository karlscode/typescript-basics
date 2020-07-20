// boolean (true | false)
let isOpen: boolean
isOpen = true

// stirng ('foo', "foo", `foo`)
let message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff0

// array (type[])
let items: string[]
items = ["foo", "bar"]

// array (generics<>)
let values: Array<number>
values = [1, 2, 3]

// tuple
let title: [number, string, string]
title = [1, "foo", "bar"]

// enum
enum Colors {
  white = '#ffff',
  black = '#000'
}

// any
let any: any
any = [1]

// void
function logger(): void {
  console.log("foo")
}

// null | undefined
type Bla = string | undefined

// never
function error(): never {
  throw new Error("error")
}

// object
let cart: object
cart = {
  key: "fi"
}
