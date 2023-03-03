class ui {
  constructor() {
    this.getGamesData();
  }

  async getGamesData() {
    async function fetchData() {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "c4c10201e6msh32b0f012d5f24b6p182113jsn4b753d588fb1",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      const response = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter",
        options
      );

      const jsonData = await response.json();

      return jsonData;
    }

    const data = await fetchData();
    console.log(data); // logs the JSON data to the console
    // do something with the JSON data here
    return data;
  }
}

let games = new ui();
