import { addUser } from './registration';
import { outputUsersList } from './output-users-list';
import { acceptAll } from './accept-all';
import { deleteUser } from './delete-user';
import { createTeam } from './create-team';
import { outputTeamsList } from './output-team-list';
import { sendRequest } from './send-team-request';
import { showRequests } from './show-team-requests';
import { denyTeamRequest } from './deny-request';
import { acceptAllTeamRequests } from './accept-all-team-requests';
import { exitFromTeam } from './exit-from-team';
import { deleteTeam } from './delete-team';

export interface Team {
    teamName: string,
    leader: User,
    participants: User[],
    requests: User[],
};

export interface UniverInfo {
    course: string,
    group: string,
};

export interface UserInfo {
    name: string,
    surName: string,
    bsuir?: UniverInfo,
    phoneNumber: string,
    expectations: string,
    acceptStatus: boolean,
    currentTeam?: string,
};

export interface User {
    telegramID?: string,
    discordID?: string,
    info: UserInfo,
};

const user1: User = {
    info: {
        currentTeam: 'DCP-team',
        name: 'Misha',
        surName: 'Anischenko',
        phoneNumber: '+375296489585',
        expectations: 'Kek',
        acceptStatus: false,
        bsuir: {
            course: '2',
            group: '610901'
        }
    }
};

const user2: User = {
    info: {
        currentTeam: 'DCP-team',
        name: 'Vasya',
        surName: 'Pupkiun',
        phoneNumber: 'Ne skaju',
        expectations: 'hz',
        acceptStatus: false,
    }
};

(async () => {
    await addUser(user1);
    await addUser(user2);
    await outputUsersList();

    await deleteUser(user2);
    await outputUsersList();

    await addUser(user2);
    await outputUsersList();

    await acceptAll();
    await outputUsersList();

    await createTeam('LOL KEK CHEBUREK', user2);
    await createTeam('DCP-team', user1);
    await outputTeamsList();

    await showRequests('DCP-team');

    await sendRequest('DCP-team', user2);
    await sendRequest('DCP-team', user1);

    await showRequests('DCP-team');

    await denyTeamRequest('DCP-team', user1);

    await showRequests('DCP-team');

    await acceptAllTeamRequests('DCP-team');

    await exitFromTeam(user2);

    await deleteTeam('DCP-team');

    await outputTeamsList();
})();