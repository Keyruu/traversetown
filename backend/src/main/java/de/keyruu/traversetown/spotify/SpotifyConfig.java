package de.keyruu.traversetown.spotify;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.Produces;

import org.eclipse.microprofile.config.inject.ConfigProperty;

import se.michaelthelin.spotify.SpotifyApi;

public class SpotifyConfig
{
  @ConfigProperty(name = "spotify.clientid")
  String clientId;

  @ConfigProperty(name = "spotify.clientsecret")
  String clientSecret;

  @ConfigProperty(name = "spotify.refreshtoken")
  String refreshToken;

  @ApplicationScoped
  @Produces
  public SpotifyApi api()
  {
    return new SpotifyApi.Builder()
      .setClientId(clientId)
      .setClientSecret(clientSecret)
      .setRefreshToken(refreshToken)
      .build();
  }
}
