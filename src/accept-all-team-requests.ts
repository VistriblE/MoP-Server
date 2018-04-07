import * as rethinkdb from 'rethinkdb';
import { User, Team } from './index'

export async function acceptAllTeamRequests(teamName: string) {
    const connect = await rethinkdb.connect('127.0.0.1');
    const tableTeams = rethinkdb.db('Server').table('teams');
    const tableUsers = rethinkdb.db('Server').table('users');

    const cursorTeam = await tableTeams.filter(<Team>{ teamName: teamName }).run(connect);
    const teams: Team[] = await cursorTeam.toArray();
    let requests: User[] = teams[0].requests;
    let teamParticipants: User[] = teams[0].participants;

    for (let i = 0; i < requests.length; i++) {
        teamParticipants.push(requests[i]);

        await tableUsers.filter(<User>{ info: { phoneNumber: teamParticipants[i].info.phoneNumber } })
            .update(<User>{ info: { currentTeam: teamName } })
            .run(connect);
    }
    requests = [];

    await tableTeams.filter(<Team>{ teamName: teamName }).update(<Team>{ participants: teamParticipants })
        .run(connect);
    await tableTeams.filter(<Team>{ teamName: teamName }).update(<Team>{ requests })
        .run(connect);
    console.log('Приняты в команду');
}