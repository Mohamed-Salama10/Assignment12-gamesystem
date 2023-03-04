import {gameDetails} from "./gameDetails.js"
export class ui {
  constructor() {
    this.getGamesData("MMORPG");
  }

  async getGamesData(category) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c4c10201e6msh32b0f012d5f24b6p182113jsn4b753d588fb1",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    let loadingScreen = $(".loading-screen");
    loadingScreen.show();

    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );

    const jsonData = await response.json();

    this.displayData(jsonData, category);

    loadingScreen.hide();
    let cards = document.querySelectorAll("#cardsContainer");
    this.applyingClikcEvent(cards);
  }

  displayData(data, category) {
    let rows = document.querySelector("#cards-row");

    let container = ``;

    for (const game of data) {
      container += `<div class="col-lg-3 col-md-6 col-sm-12 mt-3" id="cardsContainer">
      <div>
        <div class="card bg-transparent p-3 style="width: 18rem">
        <div class="cards">
        <p class="bg-secondary d-inline px-2 py-1 rounded-2 d-none" id = "gameId">
        ${game.id}        
      </p>
          <img
            src=${game.thumbnail}
            class="card-img-top w-100"
            alt="..."
          />

          <div class="card-body">
            <span class="d-flex justify-content-between">
              <h5 class="card-title text-white fs-6">
              ${game.title}
              </h5>
              <p class="bg-secondary d-inline px-2 py-1 rounded-2">
                Free
              </p>
            </span>

            <p class="card-text text-white border-bottom pb-3 game-info text-center " style="font-size: 14px;height: 120px ;" >
              S${game.short_description}
            </p>

            <div class="d-flex justify-content-between">
              <p class="text-white bg-gradient px-2 py-1 cards-fs m-0 game-category">
                ${category}
              </p>

              <p class="text-white bg-gradient px-2 py-1 cards-fs m-0 game-console">
                ${game.platform}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    }

    rows.innerHTML = container;
  }

  applyingClikcEvent(cards) {
    for (const card of cards) {
      card.addEventListener("click", function () {
        let id = card.querySelector("#gameId").innerHTML;
        let gameDetail = new gameDetails(id)
      });
    }
  }
}
