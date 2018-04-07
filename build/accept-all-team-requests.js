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
function acceptAllTeamRequests(teamName) {
    return __awaiter(this, void 0, void 0, function* () {
        const connect = yield rethinkdb.connect('127.0.0.1');
        const tableTeams = rethinkdb.db('Server').table('teams');
        const tableUsers = rethinkdb.db('Server').table('users');
        const cursorTeam = yield tableTeams.filter({ teamName: teamName }).run(connect);
        const teams = yield cursorTeam.toArray();
        let requests = teams[0].requests;
        let teamParticipants = teams[0].participants;
        for (let i = 0; i < requests.length; i++) {
            teamParticipants.push(requests[i]);
            yield tableUsers.filter({ info: { phoneNumber: teamParticipants[i].info.phoneNumber } })
                .update({ info: { currentTeam: teamName } })
                .run(connect);
        }
        requests = [];
        yield tableTeams.filter({ teamName: teamName }).update({ participants: teamParticipants })
            .run(connect);
        yield tableTeams.filter({ teamName: teamName }).update({ requests })
            .run(connect);
        console.log('Приняты в команду');
    });
}
exports.acceptAllTeamRequests = acceptAllTeamRequests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXB0LWFsbC10ZWFtLXJlcXVlc3RzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Zpc3RyaWJsZS/QlNC+0LrRg9C80LXQvdGC0YsvTWFnaWMgb2YgUHJvZ3JhbW1pbmcvTW9QLXNlcnZlci9zcmMvIiwic291cmNlcyI6WyJhY2NlcHQtYWxsLXRlYW0tcmVxdWVzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUd2QywrQkFBNEMsUUFBZ0I7O1FBQ3hELE1BQU0sT0FBTyxHQUFHLE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV6RCxNQUFNLFVBQVUsR0FBRyxNQUFNLFVBQVUsQ0FBQyxNQUFNLENBQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEYsTUFBTSxLQUFLLEdBQVcsTUFBTSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakQsSUFBSSxRQUFRLEdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUN6QyxJQUFJLGdCQUFnQixHQUFXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFFckQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdkMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRW5DLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztpQkFDekYsTUFBTSxDQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUM7aUJBQ2pELEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQ0QsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVkLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxDQUFDO2FBQ2pHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQixNQUFNLFVBQVUsQ0FBQyxNQUFNLENBQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUMzRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FBQTtBQXhCRCxzREF3QkMifQ==