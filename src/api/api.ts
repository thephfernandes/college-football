import axios from 'axios'
import { Game, Team } from '@/store/models'

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

export async function fetchSeasonGamesByTeam (season: number, school: string): Promise<Game[]> {
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
