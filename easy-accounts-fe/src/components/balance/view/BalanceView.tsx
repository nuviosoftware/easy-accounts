import * as React from 'react';
import './BalanceView.css';
import NumberFormat from 'react-number-format';
import Moment from 'react-moment';


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
    <tr className="row">
      <td className="col-sm-3">
        <Moment date={props.data.date} format="DD MMMM YYYY" />
      </td>
      <td className="col-sm-2">
        {props.data.name}
      </td>
      <td className="col-sm-2">
        <NumberFormat value={props.data.nett} displayType={'text'} thousandSeparator={true} prefix={'£'} />
      </td>
      <td className="col-sm-2">
        <NumberFormat value={props.data.tax} displayType={'text'} thousandSeparator={true} prefix={'£'} />
      </td>
      <td className="col-sm-3">
        {props.data.tags && props.data.tags.join(", ")}
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
        <tr className="row">
          <th className="col-sm-3">Date</th>
          <th className="col-sm-2">Entry</th>
          <th className="col-sm-2">Nett</th>
          <th className="col-sm-2">Tax</th>
          <th className="col-sm-3">Tags</th>
        </tr>
      </thead>
      <tbody>{rows.data.slice(0, rows.data.length-1)}</tbody>
      <tfoot>{rows.data.slice(rows.data.length-1, rows.data.length)}</tfoot>
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
  tags: string[];
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

/**
 * Function to filter BalanceEntry by 'type'.
 */
class FilterTypeFunction {
  constructor(private type: string) {

  };
  apply(entry: BalanceEntry) {
    return entry.type === this.type;
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
      tax: 2000,
      tags: ['sales', 'client1']
    }, {
      id: 2,
      name: "client2 invoice1",
      type: "IN",
      date: new Date(),
      nett: 5000,
      tax: 1000,
      tags: ['sales', 'client2']
    }, {
      id: 3,
      name: "insurance",
      type: "OUT",
      date: new Date(),
      nett: 400,
      tax: 80,
      tags: ['insurance']
    }]
  }

  /**
   * Filter entries on the given array for the given condition.
   * 
   * @param arr 
   * @param cond 
   */
  private filterEntries(arr: BalanceEntry[], cond: FilterTypeFunction): JSX.Element[] {
    return arr.filter(entry => cond.apply(entry)).map(entry => {
      return <Row
        key={entry.id}
        data={entry}
      />
    });
  }

  /**
   * Builds an additional JSX.Element which represents the TOTAL of the given array.
   * @param arr 
   */
  private buildSumEntry(arr: JSX.Element[]): JSX.Element {
    let total: BalanceEntry = {
      id: -1,
      name: "TOTAL",
      type: "",
      date: new Date(),
      nett: 0,
      tax: 0,
      tags: []
    };

    arr.forEach(el => {
      total.nett += el.props.data.nett;
      total.tax += el.props.data.tax;
    });

    return <Row
      key={total.id}
      data={total}
    />
  }

  render() {
    // array of incoming entries
    let inRows = this.filterEntries(this.data, new FilterTypeFunction("IN"));
    inRows.push(this.buildSumEntry(inRows));

    // array of outgoing entries
    let outRows = this.filterEntries(this.data, new FilterTypeFunction("OUT"));
    outRows.push(this.buildSumEntry(outRows));


    return (
      <div className="BalanceView-component">
        <h3>Balance view</h3>
        <h5>INCOMING</h5>
        <BalanceTable
          data={inRows} />
        <hr />
        <h5>OUTGOING</h5>
        <BalanceTable
          data={outRows} />
      </div>
    );
  }
}
export default BalanceView;
