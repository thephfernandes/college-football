import axios from 'axios'
import { Game, Team, TeamSeasonStat, TeamGame, TeamStat } from '@/store/models'

const config = {
  baseURL: 'https://api.collegefootballdata.com/',
  withCredentials: false
}

export const ApiClient = axios.create(config)

export async function fetchTeams (): Promise<Team[]> {
  try {
    const res = await ApiClient.get('teams')
    return res.data as Team[]
  } catch (error) {
    throw new Error(`API ${error}`)
  }
}

export async function fetchTeamBySchoolName (school: string | undefined): Promise<Team> {
  try {
    const res = await ApiClient.get('teams')
    const allTeams = res.data as Team[]
    return allTeams.find((team: Team) => team.school === school) as Team
  } catch (error) {
    throw new Error(`API ${error}`)
  }
}

export async function getTeamLogo (school: string | undefined): Promise<string> {
  const team = await fetchTeamBySchoolName(school)
  return team.logos[0]
}

export async function getTeamStatsByGame (id: number | undefined): Promise<TeamGame> {
  try {
    const res = await ApiClient.get('games/teams/', {
      params: {
        gameId: id
      }
    })
    return res.data[0] as TeamGame
  } catch (error) {
    throw new Error(`API ${error}`)
  }
}

export async function getHomeTeamStats (id: number | undefined): Promise<TeamStat | undefined> {
  const res = await getTeamStatsByGame(id)
  return res.teams.find(team => team.homeAway === 'home')
}

export async function getAwayTeamStats (id: number | undefined): Promise<TeamStat | undefined> {
  const res = await getTeamStatsByGame(id)
  return res.teams.find(team => team.homeAway === 'away')
}

export async function fetchSeasonGamesByTeam (season: number, school: string | undefined): Promise<Game[]> {
  try {
    const res = await ApiClient.get('games', {
      params: {
        year: season,
        team: school
      }
    })
    return res.data as Game[]
  } catch (error) {
    throw new Error(`API ${error}`)
  }
}

export async function getStats (season: number | undefined, school: string | undefined): Promise<TeamSeasonStat[]> {
  try {
    const res = await ApiClient.get('stats/season', {
      params: {
        year: season,
        team: school
      }
    })
    return res.data as TeamSeasonStat[]
  } catch (error) {
    throw new Error(`API ${error}`)
  }
}

export async function getGameById (gameId: number | undefined): Promise<Game> {
  try {
    const res = await ApiClient.get('games', {
      params: {
        id: gameId
      }
    })
    return res.data[0] as Game
  } catch (error) {
    throw new Error(`API ${error}`)
  }
}
