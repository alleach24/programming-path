import React from "react";

export default function Quotable() {
  const [data, setData] = React.useState(null);

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random?tags=education|science|technology|success");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      console.error(error);
      setData({ content: "Opps... Something went wrong" });
    }
  }

  React.useEffect(() => {
    updateQuote();
  }, []);

  if (!data) return null;

  return (
    <div className="App">
          <blockquote >
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
