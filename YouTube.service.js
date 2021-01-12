class YouTubeService {
    static key = "AIzaSyDPOYaRFFuIqgA-QsYP8OZvjOB4cV3lpts";
    
    static async fetchTrending() {
        return new Promise((resolve, reject) => {
            fetch(
                `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${YouTubeService.key}`
            )
                .then((response) => response.json())
                .then(resolve)
                .catch(reject);
        });
    }
    static async search(query) {
        return new Promise((resolve, reject) => {
            fetch(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${YouTubeService.key}`
            )
                .then((response) => response.json())
                .then((json) => {
                    console.log('json response', json);
                    resolve(json);
                })
                .catch((error) => {
                    console.log('error response', error);
                    reject(error);
                });
        });
    }
}
export default YouTubeService;
