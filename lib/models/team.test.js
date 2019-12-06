const Team =  require('./Team');

describe('bandModel', () => {
  it('requires a name', () => {
    const team = new Team ({
      sport: 'soccer',
      numberOfMembers: 11,
      color: ['blue', 'yellow', 'gold']
    });
    const { errors } = team.validateSync();
    expect(errors.name.message).toEqual('Path `name` is required.');
  });

  it('requires a sport', () => {
    const team = new Team ({
      name: 'sting',
      numberOfMembers: 11,
      color: ['blue', 'yellow', 'gold']
    });
    const { errors } = team.validateSync();
    expect(errors.sport.message).toEqual('Path `sport` is required.');
  });

  it('has number of members over 0', () => {
    const team = new Team ({
      name: 'sting',
      sport: 'soccer',
      numberOfMembers: -1,
      color: ['blue', 'yellow', 'gold']
    });
    const { errors } = team.validateSync();
    expect(errors.numberOfMembers.message).toEqual('Path `numberOfMembers` (-1) is less than minimum allowed value (0).');
  });

  //   it('requires a color', () => {
  //     const team = new Team ({
  //       name: 'sting',
  //       sport: 'soccer',
  //       numberOfMembers: 11
  //     });
  //     const { errors } = team.validateSync();
  //     expect(errors.color.message).toEqual('Path `color` is required.');
  //   });

});
