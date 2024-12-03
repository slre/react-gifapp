import { getGifs } from "../../src/helpers/getGifs"

describe('Tests in getGif', () => { 
    test('should return image array', async() => { 
        const gifs = await getGifs('south park');
        expect(gifs.length).toBeGreaterThan(0);
        expect( gifs[1] ).toEqual({
            id:expect.any(String),
            title:expect.any(String),
            url:expect.any(String),
        })
     })
 })