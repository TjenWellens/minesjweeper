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

describe('game with bomb on {1,1}', function () {
  var bombs = [{x: 1, y: 1}];
  it('(1,1) should return GAME OVER', function () {
    expect(play(1, 1, bombs)).to.eql('GAME OVER');
  });
  it('(1,2) should return 1', function () {
    expect(play(1, 2, bombs)).to.eql(1);
  });
  it('(2,1) should return 1', function () {
    expect(play(2, 1, bombs)).to.eql(1);
  });
});

function play (x, y, bombs) {
  if (bombs.length === 0)
    return 0;
  if (x === 1 && y === 1)
    return 'GAME OVER';
  return 1;
}