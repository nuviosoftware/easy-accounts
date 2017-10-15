import * as React from 'react';
import './BalanceView.css';


/**
 * Define JSX data parameters, where data is the type <T> for the element to wrap.
 */
interface JSXData<T> extends JSX.IntrinsicAttributes {
  data: T;
}

/**
 * Represents the row of the BalanceView table
 * @param props 
 */
const Row = (props: JSXData<BalanceEntry>): JSX.Element => {
  return (
    <tr>
      <td>
        {props.data.name}
      </td>
      <td>
        {props.data.nett}
      </td>
      <td>
        {props.data.tax}
      </td>
    </tr>
  );
}

/**
 * Represents a BalanceView table
 * @param props 
 */
const BalanceTable = (rows: JSXData<JSX.Element[]>) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Entry</th>
          <th>Nett</th>
          <th>Tax</th>
        </tr>
      </thead>
      <tbody>{rows.data}</tbody>
    </table>
  );
}

/**
 * Model
 */
class BalanceEntry {
  id: number;
  name: string;
  type: string;
  date: Date;
  nett: number;
  tax: number;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

/**
 * The React BalanceView Component.
 */
class BalanceView extends React.Component {
  private data: BalanceEntry[];

  constructor() {
    super();
    // we will replace this with a REST call
    this.data = [{
      id: 1,
      name: "client1 invoice1",
      type: "IN",
      date: new Date(),
      nett: 10000,
      tax: 2000
    }, {
      id: 2,
      name: "client2 invoice1",
      type: "IN",
      date: new Date(),
      nett: 5000,
      tax: 1000
    }, {
      id: 3,
      name: "insurance",
      type: "OUT",
      date: new Date(),
      nett: 400,
      tax: 80
    }]
  }

  render() {
    let inRows = this.data.map(entry => {
      return <Row
        key={entry.id}
        data={entry}
      />
    });

    let outRows:any[] = [];


    return (
      <div>
        <h3>Balance view</h3>
        <p>INCOMING</p>
        <BalanceTable
          data={inRows} />
          <hr/>
        <p>OUTGOING</p>
        <BalanceTable
          data={outRows} />
      </div>
    );
  }
}
export default BalanceView;
