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

it('distance should work', function () {
  expect(distance({x: 1, y: 1}, {x: 1, y: 1})).to.eql(0);
  expect(distance({x: 1, y: 1}, {x: 2, y: 1})).to.eql(1);
  expect(distance({x: 1, y: 1}, {x: 1, y: 2})).to.eql(1);
  expect(distance({x: 1, y: 1}, {x: 2, y: 2})).to.eql(1);
  expect(distance({x: 1, y: 1}, {x: 1, y: 3})).to.eql(2);
});

function play (coord, bombs) {
  if (bombs.length === 0)
    return 0;
  var counter = 0;
  for (var i in bombs) {
    var bomb = bombs[i];
    if (distance(bomb, coord) === 0)
      return 'GAME OVER';

    if (distance(bomb, coord) === 1)
      counter++;
  }
  return counter;
}

function distance (c1, c2) {
  if (c1.x === c2.x && c1.y === c2.y)
    return 0;

  var dx = c1.x - c2.x;
  var dy = c1.y - c2.y;
  return Math.max(Math.abs(dx), Math.abs(dy));
}