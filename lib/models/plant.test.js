const Plant =  require('./Plant');

describe('plantModel', () => {
  it('requires a name', () => {
    const plant = new Plant ({
      species: 'C. comosum',
      highSunlight: true,
      price: 10
    });
    const { errors } = plant.validateSync();
    expect(errors.name.message).toEqual('Path `name` is required.');
  });
  it('requires a brand', () => {
    const plant = new Plant ({
      name: 'spider', 
      highSunlight: true,
      price: 10
    });
    const { errors } = plant.validateSync();
    expect(errors.species.message).toEqual('Path `species` is required.');
  });
  it('requires an automatic', () => {
    const plant = new Plant ({
      species: 'C. comosum',
      name: 'spider', 
      price: 10
    });
    const { errors } = plant.validateSync();
    expect(errors.highSunlight.message).toEqual('Path `highSunlight` is required.');
  });
  it('requires an automatic', () => {
    const plant = new Plant ({
      species: 'C. comosum',
      name: 'spider', 
      highSunlight: true
    });
    const { errors } = plant.validateSync();
    expect(errors.price.message).toEqual('Path `price` is required.');
  });
  it('has price over 0', () => {
    const plant = new Plant ({
      species: 'C. comosum',
      name: 'spider', 
      highSunlight: true,
      price: -1
    });
    const { errors } = plant.validateSync();
    expect(errors.price.message).toEqual('Path `price` (-1) is less than minimum allowed value (0).');
  });

  it('has price below 200', () => {
    const plant = new Plant ({
      species: 'C. comosum',
      name: 'spider', 
      highSunlight: true,
      price: 1000
    });
    const { errors } = plant.validateSync();
    expect(errors.price.message).toEqual('Path `price` (1000) is more than maximum allowed value (200).');
  });
});
