package de.keyruu.traversetown.lastfm;

import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import de.keyruu.traversetown.lastfm.pojo.ArtistInfo;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.QueryParam;

@Path("/2.0")
@RegisterRestClient
public interface LastfmService
{
  @GET
  ArtistInfo getById(@QueryParam(value = "") String artist);
}
