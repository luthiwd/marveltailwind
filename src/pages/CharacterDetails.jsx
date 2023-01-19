import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { charDetailsService } from "../services/characters.services";

function CharacterDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [charDetails, setCharDetails] = useState([]);
  const [fetching, isFetching] = useState(true);

  useEffect(() => {
    getChar();
  }, []);

  const getChar = async () => {
    try {
      const detailsChar = await charDetailsService(id);
      setCharDetails(detailsChar.data.data.results);
      console.log(detailsChar.data.data.results);
      isFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  if (fetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex place-content-center justify-center">
      {charDetails.map((eachChar) => {
        return (
          <div key={eachChar.id} className="flex h-50 font-mono pt-20">
            <div className="place-content-center w-1/2 mx-2">
              <img
                className="rounded-2xl"
                src={`${eachChar.thumbnail.path}.${eachChar.thumbnail.extension}`}
                alt={eachChar.name}
              />
              {eachChar.name}
            </div>
            <div className="w-1/2 mx-2">
              {eachChar.description}
              <div className="m-2">
              <h1 className="m-2">Comics</h1>
                {eachChar.comics.items.map((eachComic) =>{
                  return (
                    <>
                      {eachComic.name}
                    </>
                  )
                })}
              </div>
            </div>.
          </div>
        );
      })}
    </div>
  );
}

export default CharacterDetailsPage;
