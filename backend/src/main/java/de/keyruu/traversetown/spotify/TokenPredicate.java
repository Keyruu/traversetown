package de.keyruu.traversetown.spotify;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import io.quarkus.scheduler.Scheduled.SkipPredicate;
import io.quarkus.scheduler.ScheduledExecution;
import se.michaelthelin.spotify.SpotifyApi;

@ApplicationScoped
public class TokenPredicate implements SkipPredicate
{
  @Inject
  SpotifyApi api;

  @Override
  public boolean test(ScheduledExecution execution)
  {
    return api.getAccessToken() == null;
  }
}
