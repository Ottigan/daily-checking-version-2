import { User } from 'firebase/auth';

type CurrentUserContext = User | null;

type CurrentUser = User;

interface RowObjects {
  id: number;
  color: string;
  name: string;
  platform: string;
  casino: string;
  counter: number;
  target: number;
}

interface UserDocument {
  rowObjects: RowObjects[];
}
