package de.keyruu.traversetown.spotify;

import java.io.IOException;

import org.apache.hc.core5.http.ParseException;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

import jakarta.inject.Inject;
import se.michaelthelin.spotify.SpotifyApi;
import se.michaelthelin.spotify.exceptions.SpotifyWebApiException;
import se.michaelthelin.spotify.model_objects.credentials.AuthorizationCodeCredentials;

public class RefreshJob implements Job
{
  @Inject
  SpotifyApi api;

  @Inject
  SpotifyClient client;

  @Override
  public void execute(JobExecutionContext context)
  {
    try
    {
      AuthorizationCodeCredentials execute = api.authorizationCodeRefresh()
        .build().execute();

      api.setAccessToken(execute.getAccessToken());

      client.scheduleRefresh(execute.getExpiresIn());
    }
    catch (ParseException | SpotifyWebApiException | IOException e)
    {
      throw new RuntimeException(e);
    }
  }

}
