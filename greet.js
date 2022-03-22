export function greet(name) {
    
    if (name === 'Thomas' || name === 'Martin' || name === 'Stefan') return 'Hello Coach!'
    if (name === '' || name === undefined) return 'Hello stranger!' 
    else return `Hello ${name}!`
    
}