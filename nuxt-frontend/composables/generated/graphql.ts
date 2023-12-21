/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Scalar for BigDecimal */
  BigDecimal: { input: number; output: number; }
  /** Scalar for BigInteger */
  BigInteger: { input: number; output: number; }
  /** Scalar for DateTime */
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


export const GetPlaycountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlaycount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"artist"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playcount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"artist"},"value":{"kind":"Variable","name":{"kind":"Name","value":"artist"}}}]}]}}]} as unknown as DocumentNode<GetPlaycountQuery, GetPlaycountQueryVariables>;
export const SubscribeSpotifyTrackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SubscribeSpotifyTrack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subSpotifyTrack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artistName"}},{"kind":"Field","name":{"kind":"Name","value":"trackName"}},{"kind":"Field","name":{"kind":"Name","value":"progressMs"}},{"kind":"Field","name":{"kind":"Name","value":"coverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isCurrent"}},{"kind":"Field","name":{"kind":"Name","value":"durationMs"}},{"kind":"Field","name":{"kind":"Name","value":"isPlaying"}},{"kind":"Field","name":{"kind":"Name","value":"songLink"}},{"kind":"Field","name":{"kind":"Name","value":"spotifyId"}}]}}]}}]} as unknown as DocumentNode<SubscribeSpotifyTrackSubscription, SubscribeSpotifyTrackSubscriptionVariables>;