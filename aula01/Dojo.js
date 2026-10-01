// Gabriel Santos Afini da Silva | RA: 2267284

const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];

// Parte 1
// Itera sobre cada usuário e calcula o total de suas compras.
console.log("A soma de compras de cada usuário é: ")

usuarios.forEach(usuario => {
  const total = usuario.compras.reduce(
    (soma, compra) => soma + compra,
    0
  );
  console.log(`${usuario.nome}: total = ${total}`);
});

// Parte 2
// cria uma variavel que possui apenas os usuario ativos e itera
// estes imprimindo seus nomes  
const usuariosAtivos = usuarios.filter(usuario => usuario.ativo)

console.log("\nOs usuários ativos são: ")
usuariosAtivos.forEach(usuario => console.log(usuario.nome))

// Parte 3
// Filtra os usuários pela idade, mantendo somente aqueles com idade
// maior ou igual a 18 anos.
console.log("\nUsuários maiores de idade: ")
const maioridade = usuarios.filter(usuario => usuario.idade >= 18)

maioridade.forEach(usuario => {
  console.log(usuario.nome)
})

// Parte 4
// compara o total de compras dos usuários e mantém como
// resultado o usuário que possui o maior valor acumulado.
console.log("\nUsuário com maior volume de compras: ")
const maiorComprador = usuarios.reduce((maior, usuario) => {
  const totalAtual = usuario.compras.reduce(
    (soma, compra) => soma + compra,
    0
  );

  const totalMaior = maior.compras.reduce(
    (soma, compra) => soma + compra,
    0
  );

  return totalAtual > totalMaior ? usuario : maior;
});

const totalMaiorComprador = maiorComprador.compras.reduce(
  (soma, compra) => soma + compra,
  0
);

console.log(`Usuário com maior volume: ${maiorComprador.nome}`);
console.log(`Total: ${totalMaiorComprador}`);

// Parte 5
// Demonstra a coerção de tipos do JavaScript. Dependendo do operador,
// os valores podem ser convertidos automaticamente para outro tipo.
console.log("\nDesafio de Coerção de Tipos: ");

// O operador +, quando encontra uma string, realiza concatenação.
// O número 2 é convertido para string
console.log("5" + 2);

// O operador - realiza uma operação matemática, então a string "5"
// é convertida para número: 5 - 2 = 3.
console.log("5" - 2);

// Em uma operação matemática, true é convertido para o número 1.
// Portanto: 1 + 1 = 2.
console.log(true + 1);

// O operador == permite coerção de tipos. false é convertido para 0,
// fazendo com que a comparação seja 0 == 0, que resulta em true.
console.log(false == 0);

// O operador === compara tanto o valor quanto o tipo. false é boolean,
// enquanto 0 é number, portanto os tipos são diferentes e o resultado é false.
console.log(false === 0);

// Parte 6
// Com function tradicional, o this é definido pelo objeto que chamou
// o método, permitindo acessar pessoa.nome.
console.log("\nDesafio Arrow Function vs Function")
try {
  const pessoa = {
    nome: "Maria",
    falar: function () {
      console.log(this.nome);
    }
  };

  pessoa.falar();
} catch {
  console.log("\nErro func 1")
}

// Arrow functions não possuem seu próprio this. Elas utilizam o this
// do contexto onde foram criadas, por isso não apontam para pessoa2.
try {
const pessoa2 = {
  nome: "Maria",
  falar: () => {
    console.log(this.nome);
  }
};

pessoa2.falar();
} catch {
  console.log("\nErro func 2")
}

// 1: código 1, que utiliza uma function tradicional
// 2: arrow function não possui this. Nesse caso, ela não considera pessoa2 como this, então this.nome não corresponde ao nome do objeto.
// 3: Ele pega o this de fora da função. Então ele não muda para representar o objeto onde a arrow function está.

// Parte 7
// Gera um objeto com informações gerais dos usuários, utilizando
// métodos de array para contar, calcular a média e encontrar o
// usuário com maior volume de compras.
console.log("\nDesafio Final")

const gerarRelatorio = usuarios => {
  const totalUsuarios = usuarios.length;
  const usuariosAtivos = usuarios.filter(
    usuario => usuario.ativo
  ).length;

  const usuariosInativos = usuarios.filter(
    usuario => !usuario.ativo
  ).length;

  const somaIdades = usuarios.reduce(
    (soma, usuario) => soma + usuario.idade,
    0
  );

  const mediaIdade = somaIdades / totalUsuarios;
  const maiorComprador = usuarios.reduce((maior, usuario) => {
  const totalAtual = usuario.compras.reduce(
    (soma, compra) => soma + compra,
    0
  );

  const totalMaior = maior.compras.reduce(
    (soma, compra) => soma + compra,
    0
  );

  return totalAtual > totalMaior ? usuario : maior;
});

return {
  totalUsuarios,
  usuariosAtivos,
  usuariosAtivos,
  mediaIdade,
  maiorComprador: maiorComprador.nome
  };
};

console.log(gerarRelatorio(usuarios));

// Desafio Extra
// Utiliza reduce() para comparar as idades e encontrar o usuário mais
// jovem e o mais velho, além de calcular a média do total de compras.
console.log("\nDESAFIO EXTRA");
const usuarioMaisJovem = usuarios.reduce(
  (maisJovem, usuario) =>
    usuario.idade < maisJovem.idade ? usuario : maisJovem
);

const usuarioMaisVelho = usuarios.reduce(
  (maisVelho, usuario) =>
    usuario.idade > maisVelho.idade ? usuario : maisVelho
);

const valorMedioComprasPorUsuario =
  usuarios.reduce((somaTotal, usuario) => {

    const totalCompras = usuario.compras.reduce(
      (soma, compra) => soma + compra,
      0
    );

    return somaTotal + totalCompras;

  }, 0) / usuarios.length;

console.log(`Usuário mais jovem: ${usuarioMaisJovem.nome}`);
console.log(`Usuário mais velho: ${usuarioMaisVelho.nome}`);
console.log(`Valor médio das compras por usuário: ${valorMedioComprasPorUsuario}`);