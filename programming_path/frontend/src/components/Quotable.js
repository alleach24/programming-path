import React from "react";

export default function Quotable() {
  const [data, setData] = React.useState(null);

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      console.error(error);
      setData({ content: "Opps... Something went wrong" });
    }
  }

  // Run `updateQuote` once when component mounts
  React.useEffect(() => {
    updateQuote();
  }, []);

  // Do not render until the first quote is loaded
  if (!data) return null;

  return (
    <div className="App">
          <blockquote className="blockquote mb-0">
            <p>{data.content}</p>
            {data.author && (
              <footer className="blockquote-footer">
                <cite title="Source Title">{data.author}</cite>
              </footer>
            )}
          </blockquote>
    </div>
  );
}
