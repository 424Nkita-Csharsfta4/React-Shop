import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../path/to/apiSlice';
import ProductComponent from '../path/to/ProductComponent';

// Создаем моковый стор
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

test('ProductComponent renders correctly', async () => {
    // Рендерим компонент с использованием Provider и мока стора
    render(
        <Provider store={store}>
            <ProductComponent />
        </Provider>
    );

    // Добавьте здесь ожидания или проверки для вашего компонента, например:
    // Проверяем, что компонент отображает ожидаемый текст
    expect(screen.getByText('Product Component')).toBeInTheDocument();

    // Ждем, пока запросы API завершатся
    await screen.findByText('Product 1');

    // Проверяем, что данные отображаются корректно
    expect(screen.getByText('Product 1')).toBeInTheDocument();
});
