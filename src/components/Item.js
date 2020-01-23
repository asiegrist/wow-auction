import Money from './Money'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Item = ({ item }) => {

  // return <tr key={item.id}>
  //   <td className="left">{item.name}</td>
  //   <td><Money value={item.auction.minBuyout} /></td>
  //   <td><Money value={item.auction.dayAverage} /></td>
  //   <td><Money value={item.craft.min} /></td>
  //   <td><Money value={item.craft.avg} /></td>
  //   <td>{item.analysis.min}</td>
  //   <td>{item.analysis.avg}</td>

  //   <style jsx>{`
  //       td {
  //         text-align: right;
  //       }
  //       .left {
  //         text-align: left;
  //       }
  //     `}</style>
  // </tr>
  return <TableRow key={item.id}>
          <TableCell>{item.name}</TableCell>
          <TableCell align="right"><Money value={item.auction.minBuyout} /></TableCell>
          <TableCell align="right"><Money value={item.auction.dayAverage} /></TableCell>
          <TableCell align="right"><Money value={item.craft.min} /></TableCell>
          <TableCell align="right"><Money value={item.craft.avg} /></TableCell>
          <TableCell align="right"><Money value={item.analysis.min} /></TableCell>
          <TableCell align="right"><Money value={item.analysis.avg} /></TableCell>
        </TableRow>
}

export default Item