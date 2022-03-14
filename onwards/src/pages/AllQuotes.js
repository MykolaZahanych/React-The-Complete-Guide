import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'John', text: 'Some text' },
  { id: 'q2', author: 'Tom', text: 'Some text' },
  { id: 'q3', author: 'Jerry', text: 'Some text' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
