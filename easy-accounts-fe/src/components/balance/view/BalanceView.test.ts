import { BalanceView, FilterTypeFunction } from './BalanceView';

/**
 * Component to test
 */
let balanceView = new BalanceView();

/**
 * Test data setup
 */
const testData = [{
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
}];

/**
 * Test scenarios below
 */

it('filter Entries by type -IN-', () => {
    const filteredResults: JSX.Element[] = balanceView.filterEntries(testData, new FilterTypeFunction("IN"));
    expect(filteredResults.length).toEqual(2);    
});

it('filter Entries by type -OUT-', () => {
    const filteredResults: JSX.Element[] = balanceView.filterEntries(testData, new FilterTypeFunction("OUT"));
    expect(filteredResults.length).toEqual(1);
});

it('does not filter Entries', () => {
    const filteredResults: JSX.Element[] = balanceView.filterEntries(testData,new NoFilterfunction());
    expect(filteredResults.length).toEqual(3);
});


it('build sum entry with nett and tax', () => {
    const array: JSX.Element[] = balanceView.filterEntries(testData, new NoFilterfunction());
    const sum = balanceView.buildSumEntry(array);
    expect(sum.props.data.nett).toEqual(15400);    
    expect(sum.props.data.tax).toEqual(3080);
});


/**
 * Override FilterTypeFunction for testing only.
 */
class NoFilterfunction extends FilterTypeFunction {
    constructor(){
        super("");
    }
    apply(entry: any) {
        return entry;
      }
}