import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState('search-term');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);
  console.log(results);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await
      axios.get('http://127.0.0.1:8000', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          invoke_limit: debouncedTerm,
        },
      });
      setResults(data.query.search)
    }
    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div>
          <a
            href={`http://127.0.0.1:8000?curid=${result.pageid}`}
          >Go</a>
        </div>
      </div>
    )
  })

}
