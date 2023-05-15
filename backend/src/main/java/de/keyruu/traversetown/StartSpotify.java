package de.keyruu.traversetown;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;

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
