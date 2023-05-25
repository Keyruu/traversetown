package de.keyruu.traversetown.lastfm;

import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;
import org.jboss.resteasy.reactive.RestQuery;

import de.keyruu.traversetown.lastfm.pojo.ArtistInfo;
import io.quarkus.rest.client.reactive.ClientQueryParam;
import io.quarkus.rest.client.reactive.ClientQueryParams;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("/2.0")
@RegisterRestClient(configKey = "lastfm")
public interface LastfmService
{
  @GET
  @ClientQueryParams({
    @ClientQueryParam(name = "method", value = "artist.getInfo"),
    @ClientQueryParam(name = "format", value = "json"),
    @ClientQueryParam(name = "api_key", value = "${lastfm.api-key}"),
    @ClientQueryParam(name = "username", value = "keyruu")
  })
  ArtistInfo getInfo(@RestQuery String artist);
}
