const ApiUrl = "https://gateway.marvel.com:443/v1/public/";
const ApiKey = "apikey=f982dfb08fe6581ab0fbdbfeb8d9b4e1";

const fetchCharacter = characterName => {
  const data = fetch(`${ApiUrl}characters?name=${characterName}&${ApiKey}`)
    .then(response => response.json())
    .then(data => data.data.results[0]);
  return data;
};

const fetchEvent = eventName => {
  const data = fetch(`${ApiUrl}events?name=${eventName}&${ApiKey}`)
    .then(response => response.json())
    .then(data => data.data.results[0]);
  return data;
};

const fetchEvents = () => {
  const data = fetch(`${ApiUrl}events?orderBy=startDate&limit=100&${ApiKey}`)
    .then(response => response.json())
    .then(data => data.data.results);
  return data;
};

export { fetchCharacter, fetchEvent, fetchEvents };
