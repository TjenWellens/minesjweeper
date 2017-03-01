var expect = require('chai').expect;

it('true should equal true', function () {
  expect(true).to.eql(true);
});

describe('empty game', function () {
  it('(1,1) should return 0', function () {
    var bombs = [];
    expect(play(1, 1, bombs)).to.eql(0);
  });
});

describe('full game', function () {
  it('(1,1) should return GAME OVER', function () {
    var bombs = [{x: 1, y: 1}];
    expect(play(1, 1, bombs)).to.eql('GAME OVER');
  });
});

function play (x, y, bombs) {
  if (bombs.length === 0)
    return 0;
  return 'GAME OVER';
}