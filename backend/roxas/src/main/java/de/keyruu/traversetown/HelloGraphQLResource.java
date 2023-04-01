package de.keyruu.traversetown;

import java.io.IOException;

import javax.inject.Inject;

import org.apache.hc.core5.http.ParseException;
import org.eclipse.microprofile.graphql.DefaultValue;
import org.eclipse.microprofile.graphql.Description;
import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Query;

import de.keyruu.traversetown.spotify.SpotifyClient;
import se.michaelthelin.spotify.SpotifyApi;
import se.michaelthelin.spotify.exceptions.SpotifyWebApiException;

@GraphQLApi
public class HelloGraphQLResource
{
    @Inject
    SpotifyClient spotifyClient;

    public SpotifyApi api;

    @Query
    @Description("Say hello")
    public String sayHello(@DefaultValue("World") String name) throws ParseException, SpotifyWebApiException, IOException
    {
        return "Hello ";
    }
}