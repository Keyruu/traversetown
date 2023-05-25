package de.keyruu.traversetown.graphql;

import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Query;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import de.keyruu.traversetown.lastfm.LastfmService;
import jakarta.inject.Inject;

@GraphQLApi
public class LastfmResource
{
  @Inject
  @RestClient
  LastfmService lastfmService;

  @Query
  public Integer playcount(String artist)
  {
    return Integer.parseInt(lastfmService.getInfo(artist).getArtist().getStats().getUserplaycount());
  }
}
