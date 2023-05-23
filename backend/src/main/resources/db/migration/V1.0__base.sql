
    create sequence SpotifyTrack_SEQ start with 1 increment by 50;

    create table SpotifyTrack (
        id bigint not null,
        artistName varchar(255),
        coverUrl varchar(255),
        durationMs integer,
        isCurrent boolean,
        isPlaying boolean,
        playedAt timestamp(6),
        progressMs integer,
        songLink varchar(255),
        spotifyId varchar(255),
        trackName varchar(255),
        primary key (id)
    );
