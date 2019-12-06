const Fish =  require('./Fish');

describe('fishModel', () => {
  it('requires a name', () => {
    const fish = new Fish ({
      species: 'fancy clown',
      numberOfFins: 3,
      diet: 'seaweed, sea nuts'
    });
    const { errors } = fish.validateSync();
    expect(errors.name.message).toEqual('Path `name` is required.');
  });

  it('requires a species', () => {
    const fish = new Fish ({
      name: 'clown',
      numberOfFins: 3,
      diet: 'seaweed, sea nuts'
    });
    const { errors } = fish.validateSync();
    expect(errors.species.message).toEqual('Path `species` is required.');
  });

  it('has number of members of fins', () => {
    const fish = new Fish ({
      name: 'clown',
      species: 'fancy clown',
      diet: 'seaweed, sea nuts'
    });
    const { errors } = fish.validateSync();
    expect(errors.numberOfFins.message).toEqual('Path `numberOfFins` is required.');
  });

  it('has diet', () => {
    const fish = new Fish ({
      name: 'clown',
      species: 'fancy clown',
      numberOfFins: 3
    });
    const { errors } = fish.validateSync();
    console.log(errors);
    expect(errors.diet.message).toEqual('Path `diet` is required.');
  });

});
