import cages from './reducers';
import { ActionTypes, ADD_CAGE, UPDATE_CAGE } from './types';

describe('cages', () => {
  it('returns initial state', () => {
    const state = cages(undefined, ({} as any as ActionTypes));

    expect(state).toHaveLength(1);
    expect(state).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: '0001',
          name: 'Mock cage',
          description: 'A blank cage created for populating animals',
          contents: [],
        }),
      ]),
    );
  });

  it('handles ADD_CAGE', () => {
    const state = cages(
      undefined,
      {
        type: ADD_CAGE,
        payload: {
          name: 'test name',
          description: 'test description',
        },
      },
    );

    expect(state).toHaveLength(2);
    expect(state).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          name: 'test name',
          description: 'test description',
          contents: [],
          updatedAt: expect.any(Date),
        }),
      ]),
    );
  });

  it('handles UPDATE_CAGE', () => {
    let state = cages(undefined, ({} as any as ActionTypes));
    expect(state).toHaveLength(1);
    const oldDate = state[0].updatedAt;

    state = cages(
      undefined,
      {
        type: UPDATE_CAGE,
        id: '0001',
        payload: {
          name: 'test cage name',
          description: 'test cage description',
          contents: [{
            id: '0001',
            name: 'test animal name',
            description: 'test animal description',
          }],
        },
      },
    );

    expect(state).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: '0001',
          name: 'test cage name',
          description: 'test cage description',
          contents: expect.arrayContaining([
            expect.objectContaining({
              id: '0001',
              name: 'test animal name',
              description: 'test animal description',
            }),
          ]),
          // FIXME: should be the negation
          updatedAt: expect.objectContaining(oldDate),
        }),
      ]),
    );
  });
});
