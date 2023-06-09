package de.keyruu.traversetown.graphql;

import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Query;

import de.keyruu.traversetown.model.SpotifyTrack;
import de.keyruu.traversetown.spotify.SpotifyClient;
import io.smallrye.graphql.api.Subscription;
import io.smallrye.mutiny.Multi;
import jakarta.inject.Inject;

@GraphQLApi
public class TrackResource
{
  @Inject
  SpotifyClient client;

  @Query
  public SpotifyTrack spotifyTrack()
  {
    return SpotifyTrack.findAll().firstResult();
  }

  @Subscription
  public Multi<SpotifyTrack> subSpotifyTrack()
  {
    return client.getProcessor();
  }
}
