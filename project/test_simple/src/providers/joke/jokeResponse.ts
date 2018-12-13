export class JokeResponseValue {
    id: string
    joke: string
    categories: any[]
}

export class JokeResponse {
    type: string
    value: JokeResponseValue
}