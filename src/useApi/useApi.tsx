import { results } from "../interfaces/interfaces";

const useApi = () => {
  const apiUrl = process.env.REACT_APP_STARSHIPS_URL;
  const starshipsApi = [
    `${apiUrl}?page=1`,
    `${apiUrl}?page=2`,
    `${apiUrl}?page=3`,
    `${apiUrl}?page=4`,
  ];

  const starshipClass: any[] = [];

  const getStarships = async (): Promise<void> => {
    let resultsArrayStarship;
    await Promise.all(
      starshipsApi.map(async (starshipApi) => {
        const responseGetStarships = await fetch(starshipApi);
        const starshipsInfo = await responseGetStarships.json();

        const countStarShip = starshipsInfo.count;

        resultsArrayStarship = starshipsInfo.results;
        resultsArrayStarship.forEach((result: results) => {
          starshipClass.push(result.starship_class);
        });

        return await countStarShip;
      })
    );
    return resultsArrayStarship;
  };

  return { getStarships, starshipClass };
};

export default useApi;
