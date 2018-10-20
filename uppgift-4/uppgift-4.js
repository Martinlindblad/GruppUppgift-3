function Sphere(radie){ // En funktion returnerar en array med två parameter
    return [(4 * Math.PI *  Math.pow(radie, 3)/3), (4 * Math.PI * Math.pow(radie, 2))]
}
let s = Sphere(4);
console.log('Volym: ' + s[0].toFixed(0),'\n' + 'Area: ' + s[1].toFixed(0));a