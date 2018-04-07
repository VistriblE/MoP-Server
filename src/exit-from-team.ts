import * as rethinkdb from 'rethinkdb';
import { User, Team } from './index'


export async function exitFromTeam(user: User) {
    const connect = await rethinkdb.connect('127.0.0.1');
    const tableTeams = rethinkdb.db('Server').table('teams');
    const tableUsers = rethinkdb.db('Server').table('users');

    const cursorTeam = await tableTeams.run(connect);
    const teams: Team[] = await cursorTeam.toArray();
    let teamParticipants: User[] = teams[0].participants;
    console.log('------------------------------------------');
    console.log(`part len: ${teamParticipants.length}`);
    for (let i = 0; i < teamParticipants.length; i++) {
        console.log(teamParticipants[i].info.surName)
        if (teamParticipants[i].info.phoneNumber == user.info.phoneNumber) {
            teamParticipants.splice(i, 1);
        }
    }
    console.log('------------------------------------------');

    tableTeams.filter(<Team>{ teamName: user.info.currentTeam })
        .update(<Team>{ participants: teamParticipants })
        .run(connect);

    tableUsers.filter(<User>{ info: { phoneNumber: user.info.phoneNumber } })
        .update(<User>{ info: { currentTeam: '' } })
        .run(connect);
    console.log(`Пользователь ${user.info.name} ${user.info.surName} вышел из команды`);
}
