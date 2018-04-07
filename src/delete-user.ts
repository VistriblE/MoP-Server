import * as rethinkdb from 'rethinkdb';
import { User } from './index'

export async function deleteUser(user: User) {
    const connect = await rethinkdb.connect('127.0.0.1');
    const tableUsers = rethinkdb.db('Server').table('users');

    await tableUsers.filter(user).delete().run(connect);
    console.log('Пользователь удалён!');
}