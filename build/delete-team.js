"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rethinkdb = require("rethinkdb");
function deleteTeam(teamName) {
    return __awaiter(this, void 0, void 0, function* () {
        const connect = yield rethinkdb.connect('127.0.0.1');
        const tableTeams = rethinkdb.db('Server').table('teams');
        const tableUsers = rethinkdb.db('Server').table('users');
        const cursorTeams = yield tableTeams.run(connect);
        const cursorUsers = yield tableUsers.run(connect);
        const teamList = yield cursorTeams.toArray();
        const participants = teamList[0].participants;
        for (let i = 0; i < participants.length; i++) {
            yield tableUsers.filter({ info: { phoneNumber: participants[i].info.phoneNumber } })
                .update({ info: { currentTeam: '' } })
                .run(connect);
        }
        yield tableTeams.filter({ teamName }).delete().run(connect);
        console.log(`Команда ${teamName} успешно удалена!`);
    });
}
exports.deleteTeam = deleteTeam;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXRlYW0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdmlzdHJpYmxlL9CU0L7QutGD0LzQtdC90YLRiy9NYWdpYyBvZiBQcm9ncmFtbWluZy9Nb1Atc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImRlbGV0ZS10ZWFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBdUM7QUFJdkMsb0JBQWlDLFFBQWdCOztRQUM3QyxNQUFNLE9BQU8sR0FBRyxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckQsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFekQsTUFBTSxXQUFXLEdBQUcsTUFBTSxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELE1BQU0sV0FBVyxHQUFHLE1BQU0sVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxNQUFNLFFBQVEsR0FBVyxNQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyRCxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBRTlDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNDLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7aUJBQ3JGLE1BQU0sQ0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2lCQUMzQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUVELE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxRQUFRLG1CQUFtQixDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUFBO0FBbEJELGdDQWtCQyJ9