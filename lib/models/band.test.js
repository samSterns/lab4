const Band =  require('./Band');

describe('bandModel', () => {
  it('requires a name', () => {
    const band = new Band ({
      playsLive: true,
      numberOfMembers: 4
    });
    const { errors } = band.validateSync();
    expect(errors.name.message).toEqual('Path `name` is required.');
  });
  it('requires a playsLive', () => {
    const band = new Band ({
      name: 'crew', 
      numberOfMembers: 4
    });
    const { errors } = band.validateSync();
    expect(errors.playsLive.message).toEqual('Path `playsLive` is required.');
  });
  it('requires a numberOfMembers', () => {
    const band = new Band ({
      name: 'crew',
      playsLive: true,
    });
    const { errors } = band.validateSync();
    expect(errors.numberOfMembers.message).toEqual('Path `numberOfMembers` is required.');
  });

  it('has number of members over 0', () => {
    const band = new Band ({
      name: 'crew',
      playsLive: true,
      numberOfMembers: -1
    });
    const { errors } = band.validateSync();
    expect(errors.numberOfMembers.message).toEqual('Path `numberOfMembers` (-1) is less than minimum allowed value (0).');
  });

  it('has band members below 200', () => {
    const band = new Band ({
      name: 'crew',
      playsLive: true,
      numberOfMembers: 500
    });
    const { errors } = band.validateSync();
    expect(errors.numberOfMembers.message).toEqual('Path `numberOfMembers` (500) is more than maximum allowed value (200).');
  });
});
