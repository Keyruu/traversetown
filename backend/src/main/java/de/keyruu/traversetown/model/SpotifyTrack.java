package de.keyruu.traversetown.model;

import java.util.Arrays;
import java.util.Date;
import java.util.stream.Collectors;

import jakarta.persistence.Entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import se.michaelthelin.spotify.model_objects.miscellaneous.CurrentlyPlaying;
import se.michaelthelin.spotify.model_objects.specification.ArtistSimplified;
import se.michaelthelin.spotify.model_objects.specification.PlayHistory;
import se.michaelthelin.spotify.model_objects.specification.Track;

@Entity
public class SpotifyTrack extends PanacheEntity
{
  private String spotifyId;
  private String trackName;
  private String artistName;
  private String coverUrl;
  private String songLink;
  private Boolean isPlaying;
  private Boolean isCurrent;
  private Integer progressMs;
  private Integer durationMs;
  private Date playedAt;

  public SpotifyTrack()
  {
  }

  public void setCurrent(CurrentlyPlaying current)
  {
    Track track = (Track)current.getItem();

    this.isCurrent = true;
    this.isPlaying = current.getIs_playing();
    this.progressMs = current.getProgress_ms();
    this.durationMs = track.getDurationMs();

    setTrackStuff(track);
  }

  public void setLastPlayed(PlayHistory history, Track track)
  {
    this.isCurrent = false;
    this.playedAt = history.getPlayedAt();

    setTrackStuff(track);
  }

  public String getArtistsString(ArtistSimplified[] artists)
  {
    return Arrays.stream(artists).map(artist -> artist.getName()).collect(Collectors.joining(", "));
  }

  public void setTrackStuff(Track track)
  {
    this.spotifyId = track.getId();
    this.artistName = getArtistsString(track.getArtists());
    this.trackName = track.getName();
    this.coverUrl = track.getAlbum().getImages()[0].getUrl();
    this.songLink = track.getExternalUrls().get("spotify");
  }

  public String getSpotifyId()
  {
    return spotifyId;
  }

  public void setSpotifyId(String spotifyId)
  {
    this.spotifyId = spotifyId;
  }

  public String getTrackName()
  {
    return trackName;
  }

  public void setTrackName(String trackName)
  {
    this.trackName = trackName;
  }

  public String getArtistName()
  {
    return artistName;
  }

  public void setArtistName(String artistName)
  {
    this.artistName = artistName;
  }

  public String getCoverUrl()
  {
    return coverUrl;
  }

  public void setCoverUrl(String coverUrl)
  {
    this.coverUrl = coverUrl;
  }

  public String getSongLink()
  {
    return songLink;
  }

  public void setSongLink(String songLink)
  {
    this.songLink = songLink;
  }

  public Boolean getIsPlaying()
  {
    return isPlaying;
  }

  public void setIsPlaying(Boolean isPlaying)
  {
    this.isPlaying = isPlaying;
  }

  public Boolean getIsCurrent()
  {
    return isCurrent;
  }

  public void setIsCurrent(Boolean isCurrent)
  {
    this.isCurrent = isCurrent;
  }

  public Integer getProgressMs()
  {
    return progressMs;
  }

  public void setProgressMs(Integer progressMs)
  {
    this.progressMs = progressMs;
  }

  public Integer getDurationMs()
  {
    return durationMs;
  }

  public void setDurationMs(Integer durationMs)
  {
    this.durationMs = durationMs;
  }

  public Date getPlayedAt()
  {
    return playedAt;
  }

  public void setPlayedAt(Date playedAt)
  {
    this.playedAt = playedAt;
  }
}
