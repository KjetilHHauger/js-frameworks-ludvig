import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../layout/layout";

export function Product() {
  const [data, setData] = useState({});
  const params = useParams();
  console.log(params);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://v2.api.noroff.dev/auction/listings/" + params.id
      );
      const data = await res.json();
      console.log(data);
      setData(data.data);
    }
    getData();
  }, []);

  return (
    <Layout>
      <div id="card" className="flex flex-col items-center mt-6">
        {data.id ? (
          <div className="flex items-center flex-col max-w-lg max-h-32">
            {data.media.length && (
              <img
                className=" max-h-96 mb-6"
                src={data.media[0].url}
                alt="alt text"
                onError={(e) => {
                  e.target.src =
                    "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
                }}
              />
            )}
            <div className="flex flex-col gap-2 bg-amber-600 p-2">
              <h1 className="text-2xl">{data.title}</h1>
              <p className="border-b-2">{data.description}</p>
              <p>created: {data.created}</p>
              <p>updated: {data.updated}</p>
              <p>ENDS_AT: {data.endsAt}</p>
            </div>
          </div>
        ) : (
          <h2>loading</h2>
        )}
      </div>
    </Layout>
  );
}
