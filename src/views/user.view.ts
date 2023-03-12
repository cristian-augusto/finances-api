import UsersHelper from '../helpers/users.helper';
import User from '../models/user.model';

const userView = {
  render(user: User) {
    return UsersHelper.toPlain(user);
  },
};

export default userView;
