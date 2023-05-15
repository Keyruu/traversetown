package de.keyruu.traversetown.spotify;

import java.io.IOException;

import jakarta.inject.Inject;

import org.apache.hc.core5.http.ParseException;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

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
  public void execute(JobExecutionContext context) throws JobExecutionException
  {
    try
    {
      AuthorizationCodeCredentials execute = api.authorizationCodeRefresh()
        .build().execute();

      System.out.println(execute.getAccessToken());

      api.setAccessToken(execute.getAccessToken());

      client.scheduleRefresh(execute.getExpiresIn());
    }
    catch (ParseException | SpotifyWebApiException | IOException e)
    {
      e.printStackTrace();
    }
  }

}
