export class gameDetails {
  constructor(id) {
    this.getGameDetails(id);
  }
  async getGameDetails(id) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c4c10201e6msh32b0f012d5f24b6p182113jsn4b753d588fb1",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );

    const details = await response.json();
    console.log(details);
  }
}
