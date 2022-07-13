export type func = {
    type: string,
    frequency: number,
    amplitude: number
}

export type cfg = {
    sample_rate: number,
    n: number,
    components: func[]
}