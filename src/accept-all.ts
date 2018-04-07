import * as rethinkdb from 'rethinkdb';
import { User } from './index'

export async function acceptAll() {
    const connect = await rethinkdb.connect('127.0.0.1');
    const tableUsers = rethinkdb.db('Server').table('users');

    const cursor = await tableUsers.run(connect);
    const users: User[] = await cursor.toArray();

    for (let i = 0; i < users.length; i++) {
        if (!users[i].info.acceptStatus) {
            await tableUsers.filter(users[i])
                .update(<User>{ info: { acceptStatus: true } }).run(connect);
        }
    }
    console.log('Все пользователи подтверждены!');
}