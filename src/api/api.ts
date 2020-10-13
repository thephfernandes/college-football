import axios from 'axios'
import { Team } from '@/store/models'

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
