import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getProducts } from './productsSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('productsSlice', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
    });

    it('should dispatch the correct actions when getProducts is successful', async () => {
        const expectedActions = [
            { type: getProducts.pending.type },
            { type: getProducts.fulfilled.type, payload: [/* mocked data */] },
        ];

        // Mock axios response
        jest.spyOn(axios, 'get').mockResolvedValue({ data: [/* mocked data */] });

        await store.dispatch(getProducts());

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('should dispatch the correct actions when getProducts fails', async () => {
        const expectedActions = [
            { type: getProducts.pending.type },
            { type: getProducts.rejected.type },
        ];

        // Mock axios error
        jest.spyOn(axios, 'get').mockRejectedValue(new Error('Request failed'));

        await store.dispatch(getProducts());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
