import { useState, useEffect } from "react";
import { Character, ErrorType } from "./types";
import { Container } from "@mui/material";
import Autocomplete from "./components/AutoComplete";


const App = () => {
  const [charList, setCharList] = useState<Character[]>([]);
  const [error, setError] = useState<ErrorType>({
    isError: false,
    message: "",
  });
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character`
      );
      const data = await res.json();

      if (data.error) {
        throw new Error();
      }

      const charDetails: Character[] = data.results.map((char: any) => ({
        id: char.id,
        name: char.name,
        episodesPlayIn: char.episode.length,
        image: char.image,
      }));
      setCharList(charDetails);
      setError({ isError: false, message: "" });
    } catch (error) {
      setError({
        isError: true,
        message: `Character could not be found!`,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <Container maxWidth="sm" sx={{ paddingTop: "24px" }}>
      {error.isError ? <p>{error.message}</p> : <Autocomplete list={charList} />}
    </Container>
  );
}

export default App;
