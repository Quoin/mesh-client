import * as moduleToTest from './constants';

describe("src/constants", () => {
  const clone = { ...moduleToTest };

  after(() => {
    expect(clone).to.be.empty();
  });

  it("exports objects", () => {
    expect(moduleToTest).to.be.an('object');
  });

  describe(".CACHE_KEYS", () => {
    let cache;

    before(() => {
      cache = { ...moduleToTest.CACHE_KEYS };
    });

    after(() => {
      expect(cache).to.be.empty();
      delete clone.CACHE_KEYS;
    });

    it("is an object", () => {
      expect(moduleToTest).to.have.property('CACHE_KEYS');
      expect(moduleToTest.CACHE_KEYS).to.be.an('object');
    });

    [
      'HOST',
      'JWT',
      'PROJECT',
    ].forEach((property) => {
      it(`has string property '${property}'`, () => {
        expect(cache).to.have.property(property);
        expect(cache[property]).to.be.a('string');
        delete cache[property];
      });
    });

  });
});
