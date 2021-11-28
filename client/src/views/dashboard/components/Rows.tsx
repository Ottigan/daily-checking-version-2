import { RowObjects } from 'definitions';

interface Props {
  rows: RowObjects[];
}

const Row = (props: Props) => {
  const { rows } = props;

  return (
    <tbody>
      {rows.length
        ? rows.map((row) => {
            const { id, name } = row;

            return (
              <tr key={id}>
                <td>{name} </td>
              </tr>
            );
          })
        : null}
    </tbody>
  );
};

export default Row;
