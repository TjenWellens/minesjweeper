var expect = require('chai').expect;

it('true should equal true', function () {
  expect(true).to.eql(true);
});

// bommen, cel 4-5 => # bommen in de buurt

describe('empty game', function () {
  it('(1,1) should return 0', function () {
    expect(play(1, 1)).to.eql(0);
  });
});

function play (x, y) {
  return 0;
}