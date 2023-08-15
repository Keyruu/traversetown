import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: number; output: number; }
  BigInteger: { input: number; output: number; }
  DateTime: { input: string; output: string; }
};

/** Query root */
export type Query = {
  __typename?: 'Query';
  playcount?: Maybe<Scalars['Int']['output']>;
  spotifyTrack?: Maybe<SpotifyTrack>;
};


/** Query root */
export type QueryPlaycountArgs = {
  artist?: InputMaybe<Scalars['String']['input']>;
};

export type SpotifyTrack = {
  __typename?: 'SpotifyTrack';
  artistName?: Maybe<Scalars['String']['output']>;
  coverUrl?: Maybe<Scalars['String']['output']>;
  durationMs?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['BigInteger']['output']>;
  isCurrent?: Maybe<Scalars['Boolean']['output']>;
  isPlaying?: Maybe<Scalars['Boolean']['output']>;
  /** ISO-8601 */
  playedAt?: Maybe<Scalars['DateTime']['output']>;
  progressMs?: Maybe<Scalars['Int']['output']>;
  songLink?: Maybe<Scalars['String']['output']>;
  spotifyId?: Maybe<Scalars['String']['output']>;
  trackName?: Maybe<Scalars['String']['output']>;
};

/** Subscription root */
export type Subscription = {
  __typename?: 'Subscription';
  subSpotifyTrack?: Maybe<SpotifyTrack>;
};

export type GetPlaycountQueryVariables = Exact<{
  artist?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPlaycountQuery = { __typename?: 'Query', playcount?: number | null };

export type SubscribeSpotifyTrackSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeSpotifyTrackSubscription = { __typename?: 'Subscription', subSpotifyTrack?: { __typename?: 'SpotifyTrack', artistName?: string | null, trackName?: string | null, progressMs?: number | null, coverUrl?: string | null, isCurrent?: boolean | null, durationMs?: number | null, isPlaying?: boolean | null, songLink?: string | null, spotifyId?: string | null } | null };


export const GetPlaycountDocument = gql`
    query GetPlaycount($artist: String) {
  playcount(artist: $artist)
}
    `;
export const SubscribeSpotifyTrackDocument = gql`
    subscription SubscribeSpotifyTrack {
  subSpotifyTrack {
    artistName
    trackName
    progressMs
    coverUrl
    isCurrent
    durationMs
    isPlaying
    songLink
    spotifyId
  }
}
    `;