const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5b2d6648eb41eb1db32359ad4811216e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/origial${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/origial${imgPath}`,
}

export default apiConfig