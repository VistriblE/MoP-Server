import * as rethinkdb from 'rethinkdb';
import { User, Team } from './index'

export async function createTeam(teamName: string, leader: User) {
    const connect = await rethinkdb.connect('127.0.0.1');
    const tableTeams = rethinkdb.db('Server').table('teams');

    await tableTeams.insert(<Team>{ teamName, leader, requests: [], participants: [] }).run(connect);
    console.log(`Команда ${teamName} успешно создана!`)
}