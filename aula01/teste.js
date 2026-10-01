const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];

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

console.log(`${maiorComprador.nome}: ${maiorComprador.nome.totalMaior}`);