const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(typeof (productDetails('one', 'two')), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('one', 'two').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.ok(typeof (productDetails('one', 'two')[0]) === 'object');
    assert.ok(typeof (productDetails('one', 'two')[1]) === 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.ok(productDetails('one', 'two')[0] !== productDetails('one', 'two')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const end123 = [
      productDetails('one', 'two')[0].details.productId,
      productDetails('one', 'two')[1].details.productId
    ];
    assert.ok(end123[0].endsWith('123'));
    assert.ok(end123[1].endsWith('123'));
  });
});
