const Cat = require('./Cat');

describe('catModel', () => {
  describe('name', () => {
    it('requires a name', () => {
      const cat = new Cat ({
        age: 14,
        species: 'minx'
      });
      const { errors } = cat.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });

  describe('age', () => {
    it('requires an age', () => {
      const cat = new Cat ({
        name: 'Boots',
        species: 'minx'
      });
      const { errors } = cat.validateSync();
      expect(errors.age.message).toEqual('Path `age` is required.');
    });

    it('has age over 0', () => {
      const cat = new Cat ({
        name: 'Boots',
        age: -1,
        species: 'minx'
      });
      const { errors } = cat.validateSync();
      expect(errors.age.message).toEqual('Path `age` (-1) is less than minimum allowed value (0).');
    });

    it('has age below 24', () => {
      const cat = new Cat ({
        name: 'Boots',
        age: 45,
        species: 'minx'
      });
      const { errors } = cat.validateSync();
      expect(errors.age.message).toEqual('Path `age` (45) is more than maximum allowed value (24).');
    });

  });
});
