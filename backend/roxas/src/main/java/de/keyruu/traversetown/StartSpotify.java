package de.keyruu.traversetown;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;
import javax.inject.Inject;

import de.keyruu.traversetown.spotify.SpotifyClient;
import io.quarkus.runtime.StartupEvent;

@ApplicationScoped
public class StartSpotify
{
    @Inject
    SpotifyClient client;

    void onStart(@Observes StartupEvent ev)
    {
        client.scheduleRefresh(0);
    }
}
