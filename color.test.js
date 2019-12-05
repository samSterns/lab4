const Color = require('./Color');

describe('carmodel', () => {
  it('has a required name', () => {
    const color = new Color ({});

    expect(color.validateSync().errors.name.meassage)
      .toEqual('path`red` is required.');
  });

  it('has a require red value below 256', () => {
    const color = new Color ({
      name: 'red'
      red: 256
    });
    expect(color.validateSync().errors.red.message)
      .toEqual('path`red` is required.');
  });
});
