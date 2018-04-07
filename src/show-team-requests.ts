import * as rethinkdb from 'rethinkdb';
import { User, Team } from './index'
import { isUndefined } from 'util';


export async function showRequests(teamName: string) {
    const connect = await rethinkdb.connect('127.0.0.1');
    const tableTeams = rethinkdb.db('Server').table('teams');

    const cursor = await tableTeams.filter(<Team>{ teamName }).run(connect);
    const teams: Team[] = await cursor.toArray();
    let requests: User[] = teams[0].requests;

    if (!isUndefined(requests)) {
        console.log(`Заявки в команду ${teams[0].teamName}`)
        console.log('len:' + requests.length);
        for (let i = 0; i < requests.length; i++) {
            console.log(`${i + 1}. ${requests[i].info.name} ${requests[i].info.surName}`);
        }
    } else {
        console.log('Нет заявок в вашу команду');
    }
}