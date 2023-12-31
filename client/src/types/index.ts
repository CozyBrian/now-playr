export interface ISpotifyUser {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  product: string;
  type: string;
  uri: string;
}

export interface ISpotifyPlayer {
  timestamp: number;
  progress_ms: number;
  is_playing: boolean;
  item: ISpotifyTrack;
  actions: {
    disallows: {
      pausing: boolean;
    };
  };
}

export interface ISpotifyArtist {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface ISpotifyAlbum {
  album_type: string;
  id: string;
  name: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  type: string;
  release_date: string;
  external_urls: {
    spotify: string;
  };
}

export interface ISpotifyTrack {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  artists: ISpotifyArtist[];
  album: ISpotifyAlbum;
  duration_ms: number;
}

export interface ISpotifyPlaylist {
  items: {
    collaborative: boolean;
    description: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: {
      url: string;
      height: number;
      width: number;
    }[];
    name: string;
    owner: {
      external_urls: {
        spotify: string;
      };
      followers: {
        href: string;
        total: number;
      };
      href: string;
      id: string;
      type: string;
      uri: string;
      display_name: string;
    };
    public: boolean;
    snapshot_id: string;
    tracks: {
      href: string;
      total: number;
    };
    type: string;
    uri: string;
  }[];
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface IFollowedArtists {
  artists: {
    href: string;
    items: any[];
    limit: number;
    next: string;
    cursors: {
      after: string;
    };
    total: number;
  };
}

interface ISpotifyTopItem {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface ISpotifyTopArtists extends ISpotifyTopItem {
  items: ISpotifyArtist[];
}

export interface ISpotifyTopTracks extends ISpotifyTopItem {
  items: ISpotifyTrack[];
}

export interface ISpotifyArtistTopTracks extends ISpotifyTopItem {
  tracks: ISpotifyTrack[];
}

export interface ISpotifyArtistAlbums extends ISpotifyTopItem {
  items: ISpotifyAlbum[];
}

export type timeRangeT = "short_term" | "medium_term" | "long_term";
