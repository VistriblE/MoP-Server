import * as rethinkdb from 'rethinkdb';
import { User, Team } from './index'

export async function denyTeamRequest(teamName: string, user: User) {
    const connect = await rethinkdb.connect('127.0.0.1');
    const tableTeams = rethinkdb.db('Server').table('teams');

    const cursor = await tableTeams.filter(<Team>{ teamName }).run(connect);
    const teams: Team[] = await cursor.toArray();
    let requests: User[] = teams[0].requests;

    requests.forEach((el, i) => {
        if (el.info.phoneNumber == user.info.phoneNumber) {
            requests.splice(i, 1);
        }
    });
    await tableTeams.filter(<Team>{ teamName }).update(<Team>{ requests })
        .run(connect);
    console.log('Юзер отклонён');
}