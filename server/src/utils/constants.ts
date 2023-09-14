export const options = {
    client_id: process.env.clientID,
    client_secret: process.env.clientSecret,
    redirect_uri: process.env.redirectURI,
    isDev: process.env.environment === "development",
}