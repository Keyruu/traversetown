import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Scalar for BigDecimal */
  BigDecimal: number;
  /** Scalar for BigInteger */
  BigInteger: number;
  /** Scalar for DateTime */
  DateTime: string;
};

/** Query root */
export type Query = {
  __typename?: 'Query';
  spotifyTrack?: Maybe<SpotifyTrack>;
};

export type SpotifyTrack = {
  __typename?: 'SpotifyTrack';
  artistName?: Maybe<Scalars['String']>;
  coverUrl?: Maybe<Scalars['String']>;
  durationMs?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['BigInteger']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  isPlaying?: Maybe<Scalars['Boolean']>;
  /** ISO-8601 */
  playedAt?: Maybe<Scalars['DateTime']>;
  progressMs?: Maybe<Scalars['Int']>;
  songLink?: Maybe<Scalars['String']>;
  spotifyId?: Maybe<Scalars['String']>;
  trackName?: Maybe<Scalars['String']>;
};

/** Subscription root */
export type Subscription = {
  __typename?: 'Subscription';
  subSpotifyTrack?: Maybe<SpotifyTrack>;
};

export type SubscribeSpotifyTrackSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeSpotifyTrackSubscription = { __typename?: 'Subscription', subSpotifyTrack?: { __typename?: 'SpotifyTrack', artistName?: string | null, trackName?: string | null, progressMs?: number | null, coverUrl?: string | null, isCurrent?: boolean | null, durationMs?: number | null, isPlaying?: boolean | null, songLink?: string | null, spotifyId?: string | null } | null };


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