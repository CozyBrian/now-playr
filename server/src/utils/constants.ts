export const options = {
    client_id: process.env.SPOTIFY_CLIENT_ID,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    redirect_uri: process.env.redirectURI,
    WEB_URL: process.env.WEB_URL ?? "http://localhost:5173",
    isDev: process.env.environment === "development",
}