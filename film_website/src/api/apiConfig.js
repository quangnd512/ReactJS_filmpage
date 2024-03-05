// https://api.themoviedb.org/

const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '36c9f737c7f04ac295311a858c5ba360',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`, //https://developer.themoviedb.org/docs/image-basics
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;