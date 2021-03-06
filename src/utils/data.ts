export interface ExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href?: any;
  total: number;
}

export interface Image {
  height?: any;
  url: string;
  width?: any;
}

export interface Me {
  country: string;
  display_name: string;
  email: string;
  explicit_content: ExplicitContent;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}

export interface ExternalUrls2 {
  spotify: string;
}

export interface Artist {
  external_urls: ExternalUrls2;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalUrls3 {
  spotify: string;
}

export interface Image2 {
  height: number;
  url: string;
  width: number;
}

export interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls3;
  href: string;
  id: string;
  images: Image2[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface ExternalUrls4 {
  spotify: string;
}

export interface Artist2 {
  external_urls: ExternalUrls4;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalIds {
  isrc: string;
}

export interface ExternalUrls5 {
  spotify: string;
}

export interface Track {
  album: Album;
  artists: Artist2[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls5;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface ExternalUrls6 {
  spotify: string;
}

export interface Context {
  external_urls: ExternalUrls6;
  href: string;
  type: string;
  uri: string;
}

export interface Item {
  track: Track;
  played_at: Date;
  context: Context;
}

export interface Cursors {
  after: string;
  before: string;
}

export interface RecentlyPlayed {
  items: Item[];
  next: string;
  cursors: Cursors;
  limit: number;
  href: string;
}

export interface ExternalUrls7 {
  spotify: string;
}

export interface Followers2 {
  href?: any;
  total: number;
}

export interface Image3 {
  height: number;
  url: string;
  width: number;
}

export interface Item2 {
  external_urls: ExternalUrls7;
  followers: Followers2;
  genres: string[];
  href: string;
  id: string;
  images: Image3[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface Artists {
  items: Item2[];
  total: number;
  limit: number;
  offset: number;
  previous?: any;
  href: string;
  next: string;
}

export interface ExternalUrls8 {
  spotify: string;
}

export interface Artist3 {
  external_urls: ExternalUrls8;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalUrls9 {
  spotify: string;
}

export interface Image4 {
  height: number;
  url: string;
  width: number;
}

export interface Album2 {
  album_type: string;
  artists: Artist3[];
  available_markets: string[];
  external_urls: ExternalUrls9;
  href: string;
  id: string;
  images: Image4[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface ExternalUrls10 {
  spotify: string;
}

export interface Artist4 {
  external_urls: ExternalUrls10;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalIds2 {
  isrc: string;
}

export interface ExternalUrls11 {
  spotify: string;
}

export interface Item3 {
  album: Album2;
  artists: Artist4[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds2;
  external_urls: ExternalUrls11;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Tracks {
  items: Item3[];
  total: number;
  limit: number;
  offset: number;
  previous?: any;
  href: string;
  next: string;
}

export interface Data {
  me: Me;
  recentlyPlayed: RecentlyPlayed;
  artists: Artists;
  tracks: Tracks;
}
