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
const registration_1 = require("./registration");
const output_users_list_1 = require("./output-users-list");
const accept_all_1 = require("./accept-all");
const delete_user_1 = require("./delete-user");
const create_team_1 = require("./create-team");
const output_team_list_1 = require("./output-team-list");
const send_team_request_1 = require("./send-team-request");
const show_team_requests_1 = require("./show-team-requests");
const deny_request_1 = require("./deny-request");
const accept_all_team_requests_1 = require("./accept-all-team-requests");
const exit_from_team_1 = require("./exit-from-team");
const delete_team_1 = require("./delete-team");
;
;
;
;
const user1 = {
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
const user2 = {
    info: {
        currentTeam: 'DCP-team',
        name: 'Vasya',
        surName: 'Pupkiun',
        phoneNumber: 'Ne skaju',
        expectations: 'hz',
        acceptStatus: false,
    }
};
(() => __awaiter(this, void 0, void 0, function* () {
    yield registration_1.addUser(user1);
    yield registration_1.addUser(user2);
    yield output_users_list_1.outputUsersList();
    yield delete_user_1.deleteUser(user2);
    yield output_users_list_1.outputUsersList();
    yield registration_1.addUser(user2);
    yield output_users_list_1.outputUsersList();
    yield accept_all_1.acceptAll();
    yield output_users_list_1.outputUsersList();
    yield create_team_1.createTeam('LOL KEK CHEBUREK', user2);
    yield create_team_1.createTeam('DCP-team', user1);
    yield output_team_list_1.outputTeamsList();
    yield show_team_requests_1.showRequests('DCP-team');
    yield send_team_request_1.sendRequest('DCP-team', user2);
    yield send_team_request_1.sendRequest('DCP-team', user1);
    yield show_team_requests_1.showRequests('DCP-team');
    yield deny_request_1.denyTeamRequest('DCP-team', user1);
    yield show_team_requests_1.showRequests('DCP-team');
    yield accept_all_team_requests_1.acceptAllTeamRequests('DCP-team');
    yield exit_from_team_1.exitFromTeam(user2);
    yield delete_team_1.deleteTeam('DCP-team');
    yield output_team_list_1.outputTeamsList();
}))();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdmlzdHJpYmxlL9CU0L7QutGD0LzQtdC90YLRiy9NYWdpYyBvZiBQcm9ncmFtbWluZy9Nb1Atc2VydmVyL3NyYy8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBeUM7QUFDekMsMkRBQXNEO0FBQ3RELDZDQUF5QztBQUN6QywrQ0FBMkM7QUFDM0MsK0NBQTJDO0FBQzNDLHlEQUFxRDtBQUNyRCwyREFBa0Q7QUFDbEQsNkRBQW9EO0FBQ3BELGlEQUFpRDtBQUNqRCx5RUFBbUU7QUFDbkUscURBQWdEO0FBQ2hELCtDQUEyQztBQU8xQyxDQUFDO0FBS0QsQ0FBQztBQVVELENBQUM7QUFNRCxDQUFDO0FBRUYsTUFBTSxLQUFLLEdBQVM7SUFDaEIsSUFBSSxFQUFFO1FBQ0YsV0FBVyxFQUFFLFVBQVU7UUFDdkIsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsWUFBWTtRQUNyQixXQUFXLEVBQUUsZUFBZTtRQUM1QixZQUFZLEVBQUUsS0FBSztRQUNuQixZQUFZLEVBQUUsS0FBSztRQUNuQixLQUFLLEVBQUU7WUFDSCxNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRSxRQUFRO1NBQ2xCO0tBQ0o7Q0FDSixDQUFDO0FBRUYsTUFBTSxLQUFLLEdBQVM7SUFDaEIsSUFBSSxFQUFFO1FBQ0YsV0FBVyxFQUFFLFVBQVU7UUFDdkIsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsU0FBUztRQUNsQixXQUFXLEVBQUUsVUFBVTtRQUN2QixZQUFZLEVBQUUsSUFBSTtRQUNsQixZQUFZLEVBQUUsS0FBSztLQUN0QjtDQUNKLENBQUM7QUFFRixDQUFDLEdBQVMsRUFBRTtJQUNSLE1BQU0sc0JBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixNQUFNLHNCQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsTUFBTSxtQ0FBZSxFQUFFLENBQUM7SUFFeEIsTUFBTSx3QkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLE1BQU0sbUNBQWUsRUFBRSxDQUFDO0lBRXhCLE1BQU0sc0JBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixNQUFNLG1DQUFlLEVBQUUsQ0FBQztJQUV4QixNQUFNLHNCQUFTLEVBQUUsQ0FBQztJQUNsQixNQUFNLG1DQUFlLEVBQUUsQ0FBQztJQUV4QixNQUFNLHdCQUFVLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsTUFBTSx3QkFBVSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxNQUFNLGtDQUFlLEVBQUUsQ0FBQztJQUV4QixNQUFNLGlDQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFL0IsTUFBTSwrQkFBVyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxNQUFNLCtCQUFXLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXJDLE1BQU0saUNBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUUvQixNQUFNLDhCQUFlLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXpDLE1BQU0saUNBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUUvQixNQUFNLGdEQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXhDLE1BQU0sNkJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUxQixNQUFNLHdCQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFN0IsTUFBTSxrQ0FBZSxFQUFFLENBQUM7QUFDNUIsQ0FBQyxDQUFBLENBQUMsRUFBRSxDQUFDIn0=