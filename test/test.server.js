var expect = require('chai').expect;

it('true should equal true', function () {
  expect(true).to.eql(true);
});

describe('empty game', function () {
  it('(1,1) should return 0', function () {
    var bombs = [];
    expect(play({x: 1, y: 1}, bombs)).to.eql(0);
  });
});

describe('game with bomb on {1,1}', function () {
  var bombs = [{x: 1, y: 1}];
  it('(1,1) should return GAME OVER', function () {
    expect(play({x: 1, y: 1}, bombs)).to.eql('GAME OVER');
  });
  it('(1,2) should return 1', function () {
    expect(play({x: 1, y: 2}, bombs)).to.eql(1);
  });
  it('(2,1) should return 1', function () {
    expect(play({x: 2, y: 1}, bombs)).to.eql(1);
  });
});

describe('game with bomb on {1,2}', function () {
  var bombs = [{x: 1, y: 2}];
  it('(1,2) should return GAME OVER', function () {
    expect(play({x: 1, y: 2}, bombs)).to.eql('GAME OVER');
  });
});

describe('game with bomb on {1,1}, {1,2}', function () {
  var bombs = [{x: 1, y: 1}, {x: 1, y: 2}];
  it('(1,1) should return GAME OVER', function () {
    expect(play({x: 1, y: 1}, bombs)).to.eql('GAME OVER');
  });
  it('(1,2) should return GAME OVER', function () {
    expect(play({x: 1, y: 2}, bombs)).to.eql('GAME OVER');
  });
  it('(2,1) should return 2', function () {
    expect(play({x: 2, y: 1}, bombs)).to.eql(2);
  });
  it('(1,3) should return 1', function () {
    expect(play({x: 1, y: 3}, bombs)).to.eql(1);
  });
});

function play (coord, bombs) {
  if (bombs.length === 0)
    return 0;
  var counter = 0;
  for (var i in bombs) {
    var bomb = bombs[i];
    if (bomb.x === coord.x && bomb.y === coord.y)
      return 'GAME OVER';

    var dx = bomb.x - coord.x;
    var dy = bomb.y - coord.y;
    if (Math.abs(dx) == 1 || Math.abs(dy) == 1)
      counter++;
  }
  return counter;
}