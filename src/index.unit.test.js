import moduleToTest from './index';

describe('src/index', () => {
  it('exports a function with 2 params', () => {
    expect(moduleToTest).to.be.a('function');
    expect(moduleToTest).to.have.lengthOf(2);
  });

  describe('()', () => {
    it('returns an object', () => {
      const value = moduleToTest('host', 'project');
      expect(value).to.be.an('object');
    });

    describe('properties', () => {
      const clone = { ...moduleToTest('host', 'project') };

      after(() => {
        expect(clone).to.be.empty();
      });

      it('exports function graphql() with 1 param', () => {
        expect(clone).to.have.property('graphql');
        expect(clone.graphql).to.be.a('function').and.to.have.lengthOf(1);
        delete clone.graphql;
      });
    });
  });
});
