function exec(func, a) {
    func(a)
}

function teste(a) {
    console.log(a)
} 

exec(teste, 12)

/*const quadrado = (x) => x * x

exec(teste, quadrado(2))

console.log(q(2))

console.log(teste(1, 2));

*/