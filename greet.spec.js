import {greet} from "./greet.js";

describe('test for the greet function', () => {
    it('return the greeting for `` is `Hello stranger!`', () => {
        const result = greet('')
        expect(result).toBe('Hello stranger!')
    })
    it('return the greeting for `` is `Hello stranger!`', () => {
        const result = greet()
        expect(result).toBe('Hello stranger!')
    })
    it('return the greeting for Thomas is `Hello Coach!`', () => {
        const result = greet('Thomas')
        expect(result).toBe('Hello Coach!')
    })
    it('return the greeting for Antje is `Hello Antje!`', () => {
        const result = greet('Antje')
        expect(result).toBe('Hello Antje!')
    })
})