import * as rethinkdb from 'rethinkdb';
import { User, Team } from './index'


export async function deleteTeam(teamName: string) {
    const connect = await rethinkdb.connect('127.0.0.1');
    const tableTeams = rethinkdb.db('Server').table('teams');
    const tableUsers = rethinkdb.db('Server').table('users');

    const cursorTeams = await tableTeams.run(connect);
    const cursorUsers = await tableUsers.run(connect);
    const teamList: Team[] = await cursorTeams.toArray();
    const participants = teamList[0].participants;

    for (let i = 0; i < participants.length; i++) {
        await tableUsers.filter(<User>{ info: { phoneNumber: participants[i].info.phoneNumber } })
            .update(<User>{ info: { currentTeam: '' } })
            .run(connect);
    }

    await tableTeams.filter(<Team>{ teamName }).delete().run(connect);
    console.log(`Команда ${teamName} успешно удалена!`);
}