"use client";
// Import Next.js and React hooks
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Define a component that renders a search page
export default function SearchPage(params) {
  // Use useRouter hook to access the router object
  const router = useRouter();

  // Get the query parameter from the router object
  const query = params.searchParams.q;

  // Use state hooks to store the search results and the loading status
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Use useEffect hook to fetch data from Flask backend when the query changes
  useEffect(() => {
    // Check if the query is not empty
    if (query) {
      // Set the loading state to true
      setLoading(true);
      // Fetch data from Flask backend using the query as a parameter
      fetch(`http://127.0.0.1:5000/search_students/${query}`)
        .then((response) => response.json())
        .then((data) => {
          // Set the results state to the data array
          setResults(data);
          // Set the loading state to false
          setLoading(false);
        })
        .catch((error) => {
          // Handle any errors
          console.error("Error fetching data:", error);
          // Set the loading state to false
          setLoading(false);
        });
    }
  }, [query]);

  // Return the JSX code for rendering the search page
  return (
    <div>
      <h1>Search for students</h1>
      {loading && <p>Loading...</p>}
      {results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              {result.name} ({result.usn})
            </li>
          ))}
        </ul>
      )}
      {results.length === 0 && !loading && <p>No results found</p>}
    </div>
  );
}
