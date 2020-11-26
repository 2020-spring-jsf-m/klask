import { Injectable } from '@angular/core';
import { read, write } from 'clipboardy';

@Injectable({
  providedIn: 'root'
})
export class KlaskService {

  constructor() { }
  playerOne = "";
  playerTwo = "";

  savePlayerOne(playerOne) {
    this.playerOne = playerOne;
  }

  getPlayerOne() {
    return this.playerOne;
  }

  savePlayerTwo(playerTwo) {
    this.playerTwo = playerTwo;
  }

  getPlayerTwo() {
    return this.playerTwo;
  }

  trialTourneyGameResults = [];

  saveNewGameResult(tourneyId, result) {
    if (tourneyId == "-1") {
      this.trialTourneyGameResults = [
        ...this.trialTourneyGameResults
        , result
      ];

      this.hackToClipboard(this.trialTourneyGameResults);
    }
  }

  hackToClipboard = async (data) => {
    await write(JSON.stringify(data));
    //const dataRead = await read();
    //console.log(dataRead);
  }

  getTournamentGameResults(tourneyId: string) {

    if (tourneyId == '-1') {
      return this.trialTourneyGameResults;
    }

    return [
      {
          tourneyId: "1073ed04-45ef-444e-8263-8cc77b5251e4"
        , tourneyName: "mita"
        , gameNumber: 1 
        , winner: "Valeria"
        , loser: "Tom" 
        , points: [
            { 
              pointDateTime: "some datetime"
              , scorer: "Tom"
              , gamePointNumber: 1
              , scorerPointNumber: 1
              , pointType: "score"
              , opponent: "Valeria" 
            }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Valeria"
              , gamePointNumber: 2
              , scorerPointNumber: 1
              , pointType:	"klask"
              , opponent:	"Tom" 
            }
            , { 
              pointDateTime: "some datetime"
              , scorer: "Valeria"
              , gamePointNumber: 3
              , scorerPointNumber: 2
              , pointType:	"score"
              , opponent:	"Tom" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Tom"
              , gamePointNumber: 4
              , scorerPointNumber: 2
              , pointType: "biscuit"
              , opponent: "Valeria" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Tom"
              , gamePointNumber: 5
              , scorerPointNumber: 3
              , pointType: "score"
              , opponent:	"Valeria" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Tom"
              , gamePointNumber: 6
              , scorerPointNumber: 4
              , pointType: "score"
              , opponent:	"Valeria" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Valeria"
              , gamePointNumber: 7
              , scorerPointNumber: 3
              , pointType:	"biscuit"
              , opponent:	"Tom" 
          }

          , {
              pointDateTime: "some datetime"
              , scorer: "Valeria"
              , gamePointNumber: 8
              , scorerPointNumber: 4
              , pointType:	"score"
              , opponent:	"Tom" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Valeria"
              , gamePointNumber: 9
              , scorerPointNumber: 5
              , pointType:	"loss-control"
              , opponent:	"Tom" 
          }
          , { 
              pointDateTime: "some datetime"
              , scorer: "Valeria"
              , gamePointNumber: 10
              , scorerPointNumber: 6
              , pointType:	"score"
              , opponent:	"Tom" 
          }
        ]
      }
      , {
        tourneyId: "1073ed04-45ef-444e-8263-8cc77b5251e4"
      , tourneyName: "mita"
      , gameNumber: 2 
      , winner: "Trevor"
      , loser: "Valeria" 
      , points: [
          { 
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 1
            , scorerPointNumber: 1
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 2
            , scorerPointNumber: 2
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 3
            , scorerPointNumber: 3
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 4
            , scorerPointNumber: 4
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 5
            , scorerPointNumber: 5
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 6
            , scorerPointNumber: 6
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
        ]
      }
      , {
        tourneyId: "1073ed04-45ef-444e-8263-8cc77b5251e4"
      , tourneyName: "mita"
      , gameNumber: 3
      , winner: "Tom"
      , loser: "Valeria" 
      , points: [
          { 
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 1
            , scorerPointNumber: 1
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 2
            , scorerPointNumber: 2
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 3
            , scorerPointNumber: 3
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 4
            , scorerPointNumber: 4
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 5
            , scorerPointNumber: 5
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
          , { 
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 6
            , scorerPointNumber: 6
            , pointType:	"forfeit"
            , opponent:	"Valeria" 
          }
        ]
      }
      , {
        tourneyId: "1073ed04-45ef-444e-8263-8cc77b5251e4"
      , tourneyName: "mita"
      , gameNumber: 4
      , winner: "Tom"
      , loser: "Trevor"
      , points: [
          {
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 1
            , scorerPointNumber: 1
            , pointType: "klask"
            , opponent: "Tom"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 2
            , scorerPointNumber: 2
            , pointType: "loss-control"
            , opponent: "Tom"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 3
            , scorerPointNumber: 1
            , pointType: "score"
            , opponent: "Trevor"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 4
            , scorerPointNumber: 2
            , pointType: "score"
            , opponent: "Trevor"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 5
            , scorerPointNumber: 3
            , pointType: "klask"
            , opponent: "Trevor"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 6
            , scorerPointNumber: 3
            , pointType: "score"
            , opponent: "Tom"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 7
            , scorerPointNumber: 4
            , pointType: "biscuit"
            , opponent: "Tom"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 8
            , scorerPointNumber: 4
            , pointType: "score"
            , opponent: "Trevor"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 9
            , scorerPointNumber: 5
            , pointType: "score"
            , opponent: "Trevor"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 10
            , scorerPointNumber: 6
            , pointType: "biscuit"
            , opponent: "Trevor"
          }
        ]
      }
      , {
        tourneyId: "1073ed04-45ef-444e-8263-8cc77b5251e4"
      , tourneyName: "mita"
      , gameNumber: 5
      , winner: "Trevor"
      , loser: "Tom"
      , points: [
          {
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 1
            , scorerPointNumber: 1
            , pointType: "score"
            , opponent: "Tom"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 2
            , scorerPointNumber: 2
            , pointType: "biscuit"
            , opponent: "Tom"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 3
            , scorerPointNumber: 3
            , pointType: "score"
            , opponent: "Tom"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 4
            , scorerPointNumber: 4
            , pointType: "klask"
            , opponent: "Tom"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 5
            , scorerPointNumber: 1
            , pointType: "biscuit"
            , opponent: "Trevor"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 6
            , scorerPointNumber: 2
            , pointType: "loss-control"
            , opponent: "Trevor"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 7
            , scorerPointNumber: 5
            , pointType: "klask"
            , opponent: "Tom"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 8
            , scorerPointNumber: 3
            , pointType: "score"
            , opponent: "Trevor"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 9
            , scorerPointNumber: 4
            , pointType: "biscuit"
            , opponent: "Trevor"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Tom"
            , gamePointNumber: 10
            , scorerPointNumber: 5
            , pointType: "klask"
            , opponent: "Trevor"
          }
          , {
            pointDateTime: "some datetime"
            , scorer: "Trevor"
            , gamePointNumber: 11
            , scorerPointNumber: 6
            , pointType: "score"
            , opponent: "Tom"
          }
        ]
      }
    ]
  }

  // ? ? ?
  getTournaments() {
    return [
      { 
        tourneyId: "1073ed04-45ef-444e-8263-8cc77b5251e4"
        , tourneyName: "mita"
        , status: "open"
        , openedDateTime: "2020-12-25T16:00Z"
        , closedDateTime: ""
      }
      , { 
        tourneyId: "sample-past-tourney-guid"
        , tourneyName: "testing"
        , status: "closed"
        , openedDateTime: "2020-01-25T16:00Z"
        , closedDateTime: "2020-01-25T16:50Z"
      }
      , { 
        tourneyId: "sample-past-tourney-guid"
        , tourneyName: "mita 2"
        , status: "open"
        , openedDateTime: "2020-04-25T16:00Z"
        , closedDateTime: ""
      }
    ];
  }
}
