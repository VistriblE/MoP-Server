import * as rethinkdb from 'rethinkdb';
import { User } from './index'

export async function addUser(user: User) {
    const connect = await rethinkdb.connect('127.0.0.1');
    const tableUsers = rethinkdb.db('Server').table('users');

    await tableUsers.insert(user).run(connect);
}