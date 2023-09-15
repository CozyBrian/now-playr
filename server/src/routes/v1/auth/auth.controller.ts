import { Request, Response } from "express";
import querystring from "querystring";
const nanoid = require('nanoid');
import { options } from "../../../utils/constants";
import request from "request";
import axios from "axios";

const stateKey = 'spotify_auth_state';

// const redirectURL = options.isDev ? "http://localhost:5173/#" : "https://spotistats-web.netlify.app/#"
const redirectURL = "http://localhost:5173/#"

export const getLogin = (req: Request, res: Response) => {
  const state = nanoid(16);
  res.cookie(stateKey, state);

  const scope =
      'user-read-private user-read-email user-top-read user-follow-read';


  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: options.client_id,
      scope: scope,
      redirect_uri: options.redirect_uri,
      state: state
    }));
}

export const getCallback = (req: Request, res: Response) => {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(redirectURL +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);

    const data = new URLSearchParams();

    data.append('code', code as string);
    data.append('redirect_uri', options.redirect_uri!);
    data.append('grant_type', 'authorization_code');

    axios.post("https://accounts.spotify.com/api/token", data, {
      headers: {
        'Authorization': 'Basic ' + (Buffer.from((options.client_id + ':' + options.client_secret)).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then((response) => {
      const body = response.data;

      const access_token = body.access_token;
      const refresh_token = body.refresh_token;

      // we can also pass the token to the browser to make requests from there
      const redirectUrl = redirectURL +
      querystring.stringify({
        access_token: access_token,
        refresh_token: refresh_token
      });

      res.redirect(redirectUrl);
    })
    .catch((error) => {
      console.log(error.response);
      res.redirect(redirectURL +
        querystring.stringify({
          error: 'invalid_token'
      }));
    });
  }
}

export const getRefreshAccessToken = (req: Request, res: Response) => {
  // requesting access token from refresh token
  const refresh_token = req.query.refresh_token;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 
      'Authorization': 'Basic ' + (Buffer.from((options.client_id + ':' + options.client_secret)).toString('base64'))
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
}