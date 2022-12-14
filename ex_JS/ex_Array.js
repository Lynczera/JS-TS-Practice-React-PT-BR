const numbers = [2, 8, 16];
const users = [{ id: 4781, name: 'Juan Carlos' }, { id: 6538, name: 'Maria Benita' }, { id: 3874, name: 'Manuela Assis' }]


/* 1 - Mapas */
const mostrarMapas = () => {
  /* 1) Faça um map no array 'numbers', para que cada valor do array, seja multiplicado por 3 */

  /* 2) Faça um map no array 'numbers', para que cada valor do array, seja somado com o último elemento */

  /* 3) Faça um map no array 'numbers', para que cada valor do array, seja subtraído com o primeiro elemento */

}

/* mostrarMapas() */


/* 2 - Filtros */
const mostrarFiltros = () => {
  /* 1) Faça um filter no array 'numbers', para que não contenha valores menores que 9 */

  /* 2) Faça um filter no array 'numbers', para que não contenha dados do tipo número */

  /* 3) Faça um filter no array 'users', para que não contenha o usuário com id 6538 */

}

// mostrarFiltros()


/* 3 - Reduções */
const mostrarReduce = () => {

  /* 1) Faça um reduce no array 'users', para que cada objeto não contenha a propriedade 'name' */


  /* 2) Faça um reduce no array 'users', retornando um objeto com a seguinte estrutura: { [name]: { id: 4781 } } */


}

// mostrarReduce()


/* 4 - Busca */
const mostrarBusca = () => {
  /* 1) Faça um find no array 'users', buscando o objeto com a propriedade name igual a 'Manuela Assis' */

  /* 2) Faça um find no array 'numbers', buscando o valor menor que 15 */

  /* 3) Faça um includes no array 'numbers', testando se o valor 8 existe */

  /* 4) Faça um some no array 'numbers', testando se algum valor maior que 4 existe */

  /* 5) Faça um every no array 'numbers', testando se todos os valores são do tipo string */

}

// mostrarBusca()

/* 5 - Desestruturação */
const mostrarDesestruturacao = () => {
  /* 1) Faça uma desestruturação do array 'users', extraindo o primeiro e segundo valor */


  /* 2) Faça uma desestruturação do array 'users', extraindo a propriedade name do primeiro valor */


  /* 3) Faça uma desestruturação do array 'users', extraindo a propriedade id do primeiro valor, e name do segundo valor */

}

// mostrarDesestruturacao()


/* 6 - Spread Operator */
const mostrarSpreadOperator = () => {
  /* 1) Crie um novo array com os valores dos arrays 'number' e 'users', usando o spread operator */

}


/* 7 - Inserção */
const mostrarInsercao = () => {

  /* 1) Faça um push no array 'numbers', adicionado o valor 45 */


  /* 2) Faça um push no array 'users', adicionando o valor {id: 8893, name: 'Dominique Carlos'} */


  /* 3) Faça um unshift no array 'users', adicionando o valor {id: 7436, name: 'Mariano Azevedo'} */


  /* 4) Faça um unshift no array 'numbers', adicionando os valores -20, -7, 89 */

}

// mostrarInsercao()