var symdiffEjs = require('../'),
  chai = require('chai'),
  expect = chai.expect;

describe('symdiff-ejs', function () {
  it('should work with empty ejs', function () {
    expect(symdiffEjs('').length).to.equal(0);
  });

  it('should extract a class', function () {
    var result = symdiffEjs('<% if (condition) { %><h1 class="headline"></h1><% } %>');

    expect(result.length).to.equal(1);
    expect(result[0]).to.equal('headline');
  });

  it('should extract multiple classes', function () {
    var result = symdiffEjs('<h1 class="headline<% if (condition) { %> headline--primary<% } %>"></h1>');

    expect(result.length).to.equal(2);
    expect(result[0]).to.equal('headline');
    expect(result[1]).to.equal('headline--primary');
  });

  it('should extract nothing when there are no classes', function () {
    var result = symdiffEjs('<h1></h1>');

    expect(result.length).to.equal(0);
  });
});
