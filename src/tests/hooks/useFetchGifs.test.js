import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas useFetchGifs', () => {
    
    test('debe de retornar el estado inicial', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs("Dragon Ball") )

        const { data, loading } = result.current;

        
        await waitForNextUpdate()

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

    test('debe de retornar un arreglo de imagenes y el loading en false', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs("Dragon Ball") )

        await waitForNextUpdate()

        const { data, loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);

    });

});