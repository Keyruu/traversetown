export interface ReleasesType {
    list:     Release[];
    pageInfo: PageInfo;
}

export interface Release {
    Id:            number;
    songtitle:     string;
    CreatedAt:     Date;
    UpdatedAt:     Date;
    cover:         Cover[];
    spotify:       string;
    apple:         string;
    youtube:       string;
    release_date:  Date;
    artists:       string;
    primary_color: string;
}

export interface Cover {
    path:       string;
    title:      string;
    mimetype:   string;
    size:       number;
    signedPath: string;
}

export interface PageInfo {
    totalRows:   number;
    page:        number;
    pageSize:    number;
    isFirstPage: boolean;
    isLastPage:  boolean;
}
