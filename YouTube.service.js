class YouTubeService {
    static async fetchTrending() {
        return new Promise((resolve, reject) => {
            fetch(
                "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC0U9QWdWNITVbiO5NrgnkKPqMc1rxt4eI"
            )
                .then((response) => response.json())
                .then(resolve)
                .catch(reject);
        });
    }
    static async search(query) {
        return new Promise((resolve, reject) => {
            const key = "AIzaSyBBSj2uj1yDXJsC4N83wDObD7K0PFx-Q7A";
            fetch(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${key}`
            )
                .then((response) => response.json())
                .then((json) => {
                    console.log(json); 
                    resolve(json);
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
        });
    }
}
export default YouTubeService;
