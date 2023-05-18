package de.keyruu.traversetown.spotify;

import java.io.IOException;
import java.time.Instant;
import java.util.Date;
import java.util.logging.Logger;

import org.apache.hc.core5.http.ParseException;
import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;

import de.keyruu.traversetown.model.SpotifyTrack;
import io.quarkus.scheduler.Scheduled;
import io.smallrye.mutiny.operators.multi.processors.BroadcastProcessor;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import se.michaelthelin.spotify.SpotifyApi;
import se.michaelthelin.spotify.exceptions.SpotifyWebApiException;
import se.michaelthelin.spotify.model_objects.miscellaneous.CurrentlyPlaying;
import se.michaelthelin.spotify.model_objects.specification.PlayHistory;
import se.michaelthelin.spotify.model_objects.specification.Track;

@ApplicationScoped
public class SpotifyClient
{
  private static final Logger LOG = Logger.getLogger(SpotifyClient.class.getName());

  @Inject
  SpotifyApi api;

  @Inject
  Scheduler scheduler;

  SpotifyTrack lastTrack;

  BroadcastProcessor<SpotifyTrack> processor = BroadcastProcessor.create();

  public void scheduleRefresh(Integer delay)
  {
    try
    {
      JobDetail job = JobBuilder.newJob(RefreshJob.class)
        .build();

      TriggerBuilder<Trigger> trigger = TriggerBuilder.newTrigger();
      if (delay <= 120)
      {
        trigger.startNow();
      }
      else
      {
        trigger.startAt(Date.from(Instant.now().plusSeconds(delay - 120)));
      }
      scheduler.scheduleJob(job, trigger.build());
    }
    catch (SchedulerException e)
    {
      throw new RuntimeException();
    }
  }

  @Transactional
  @Scheduled(every = "5s", skipExecutionIf = TokenPredicate.class)
  public void updateCurrent()
  {
    try
    {
      CurrentlyPlaying execute = api.getUsersCurrentlyPlayingTrack().build().execute();

      SpotifyTrack savedTrack = SpotifyTrack.findAll().firstResult();
      if (savedTrack == null)
      {
        savedTrack = new SpotifyTrack();
      }

      if (execute == null)
      {
        PlayHistory[] items = api.getCurrentUsersRecentlyPlayedTracks().build().execute().getItems();
        LOG.info(items[0].getTrack().getName() + " " + items[0].getPlayedAt());

        savedTrack.setLastPlayed(items[0], api.getTrack(items[0].getTrack().getId()).build().execute());
      }
      else if (execute.getItem() instanceof Track)
      {
        LOG.info(execute.getItem().getName() + " " + ((float)execute.getProgress_ms() / execute.getItem().getDurationMs() * 100) + "%");

        savedTrack.setCurrent(execute);
      }
      savedTrack.persist();
      processor.onNext(savedTrack);
    }
    catch (ParseException | SpotifyWebApiException | IOException e)
    {
      throw new RuntimeException(e);
    }
  }

  public BroadcastProcessor<SpotifyTrack> getProcessor()
  {
    return processor;
  }
}
