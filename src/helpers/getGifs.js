export const getGifs = async (category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=P5VPdZHLbzrwHQbNn9ckeE7CVNtE6dZ3&limit=10&q=${category}`
    const response = await fetch(url);
    const {data} = await response.json();
    //console.log(data);
    const gifs = data.map( img=>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }));
    //console.log(gifs);
    return gifs;
}