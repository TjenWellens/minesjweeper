var expect = require('chai').expect;
// var _ = require()

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

describe('game with bomb on {1,2}', function () {
  var bombs = [{x: 1, y: 2}];
  it('(1,2) should return GAME OVER', function () {
    expect(play(1, 2, bombs)).to.eql('GAME OVER');
  });
});

function play (x, y, bombs) {
  if (bombs.length === 0)
    return 0;
  if (bombs[0].x === x && bombs[0].y === y)
    return 'GAME OVER';
  return 1;
}