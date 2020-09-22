import api from 'axios';

interface User {
  username:string;
  password:string;
}


class SessionDataService {
  async store(data): Promise<void>{
    const response = await api.post<User>('/auth/login', data);
  }
}

export default new SessionDataService();
