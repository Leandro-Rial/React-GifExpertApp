import { getGifs } from "../../helpers/getGifs";

describe('Pruebas GetGifs fetch', () => {
    test('debe de traer 10 elementos', async () => {
       
        const gifs = await getGifs("Dragon Ball")

        expect(gifs.length).toBe(10)

    });

    test('no debe de tener la categoria', async () => {
       
        const gifs = await getGifs("")

        expect(gifs.length).toBe(0)

    });
});