import { RowObjects, UserDocument } from 'definitions';
import { User } from 'firebase/auth';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Rows from './components/Rows';

const db = getFirestore();

interface Props {
  currentUser: User;
}

const Dashboard = (props: Props) => {
  const { currentUser } = props;
  const [rows, setRows] = useState<RowObjects[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'dailyChecking', currentUser.uid), (snap) => {
      const document = snap.data();

      if (document) {
        const { rowObjects } = document as UserDocument;

        setRows(rowObjects);
      }
    });
    return () => {
      unsub();
    };
  }, [currentUser]);

  return (
    <div className="container-fluid pb-5">
      <table className="table table-bordered table-rounded ">
        <thead className="table-dark">
          <tr>
            <th>Table Name</th>
          </tr>
        </thead>
        <Rows rows={rows} />
      </table>
    </div>
  );
};
export default Dashboard;
