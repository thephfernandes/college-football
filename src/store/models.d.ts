export interface Game {
    id: number,
    season: number,
    week: number,
    season_type: string,
    start_date: string,
    start_time_tbd: boolean,
    netural_site: boolean,
    conference_game: boolean,
    attendance: number,
    venue_id: number,
    venue: string,
    home_id: number,
    home_team: string,
    home_conference: string,
    home_points: number,
    home_line_scores: [number],
    home_post_win_prob: number,
    away_id: number,
    away_team: string,
    away_conference: string,
    away_points: number,
    away_line_scores: [number],
    away_post_win_prob: number,
    excitement_index: number
}

export interface Team {
    id: number,
    school: string,
    mascot: string,
    abbreviation: string,
    alt_name_1: string,
    alt_name_2: string,
    alt_name_3: string,
    conference: string,
    division: string, 
    color: string,
    alt_color: string,
    logos: [string]
}

export interface TeamRecord {
    year: number,
    team: string,
    conference: string,
    division: string,
    total: Record,
    conferenceGames: Record,
    homeGames: Record,
    awayGames: Record
}

export interface Record {
    games: number,
    wins: number,
    losses: number
    ties: number
}
