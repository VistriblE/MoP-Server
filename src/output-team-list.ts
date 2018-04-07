import * as rethinkdb from 'rethinkdb';
import { Team } from './index'

export async function outputTeamsList() {
    const connect = await rethinkdb.connect('127.0.0.1');
    const tableTeams = rethinkdb.db('Server').table('teams');

    const cursor = await tableTeams.run(connect);
    const teams: Team[] = await cursor.toArray();

    for (let i = 0; i < teams.length; i++) {
        console.log(`${i + 1}. ${teams[i].teamName} | ` +
            `leader: ${teams[i].leader.info.name} ${teams[i].leader.info.surName}`);
    }
}