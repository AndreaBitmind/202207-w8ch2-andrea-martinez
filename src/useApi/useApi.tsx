const useApi = () => {
  const apiUrl = process.env.REACT_APP_STARSHIPS_URL;
  const starshipsApi = [
    `${apiUrl}?page=1`,
    `${apiUrl}?page=2`,
    `${apiUrl}?page=3`,
    `${apiUrl}?page=4`,
  ];

  const getStarships = async (): Promise<void> => {
    await Promise.all(
      starshipsApi.map(async (starshipApi) => {
        const responseGetStarships = await fetch(starshipApi);
        const starshipsInfo = await responseGetStarships.json();
        return starshipsInfo;
      })
    );
  };

  return { getStarships };
};

export default useApi;
