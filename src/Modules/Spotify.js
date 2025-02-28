const client_id = '7c4f58d176d24a599c6b8128d02e3911';
const redirect_uri = 'http://localhost:3000/callback';

let url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent('playlist-modify-public playlist-modify-private');
url += '&show_dialog=true';
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

const Spotify = {
  getAccessToken: async () => {
    const accessToken = window.location.href.match(/access_token=([^&]*)/);
    const expiresIn = window.location.href.match(/expires_in=([^&]*)/);

    if (accessToken && expiresIn) {
      const expirationTime = Date.now() + expiresIn[1] * 1000;
      return [accessToken[1], Number(expirationTime)];
    } else {
      window.location = url;
    }
  },
};

export default Spotify;
