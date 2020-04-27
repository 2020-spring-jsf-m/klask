import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { KlaskService } from '../klask.service';

interface currentPointData {
	pointDateTime: string;
	scorer: string;
	gamePointNumber: number;
	scorerPointNumber: number;
	pointType: string;
  	opponent: string;
}

@Component({
  selector: 'app-game-scoring',
  templateUrl: './game-scoring.page.html',
  styleUrls: ['./game-scoring.page.scss'],
})

export class GameScoringPage implements OnInit {

  constructor(private actionSheetController : ActionSheetController
			  , private alertController : AlertController
			  , private router : Router
			  , private klaskSvc: KlaskService) { }

  async gameEndConfirmationAlert() {
	  await this.alertController.create({
		header: `${this.winner} won!`
		, backdropDismiss: false
		, subHeader: this.subHeaderDisplay()
		, message: `Final Score: 6 - ${Math.min(this.playerOneScore, this.playerTwoScore)}`
		, buttons: [{
			text: "Confirm"
			, handler: () => {
				console.log("Sending data...");
				console.log(this.buildCompleteGameObject());

				this.gameNumber = this.gameNumber + 1;
				this.sendCompletedGameData();
				this.router.navigate(["/win-loss-stats/-1"]);
			}
		}, {
			text: "Deny"
			, handler: () => {
				console.log("Confirmation denied.");
			}
		}]
	  }).then(alert => alert.present());
  }

  buildCompleteGameObject() {
	  return {
		  tourneyId: "-1"
		  , tourneyName: "testing"
		  , gameNumber: this.gameNumber
		  , winner: this.winner
		  , loser: this.loser
		  , points: this.scores
	  };
  }

  sendCompletedGameData() {
	  this.klaskSvc.saveNewGameResult("-1", this.buildCompleteGameObject());
  }

  subHeaderDisplay() {
	  if (this.forfeitted) {
		  return `${this.loser} has forfeitted.`;
	  } else {
		  return null;
	  }
  }

  async forfeitActionSheet() {
	  await this.actionSheetController.create({
		header: "Who is forfeitting?"
		, mode: "md"
		, buttons: [{
			text: this.players[0]
			, handler: () => {
				this.forfeitGame(0);
			}
		}, {
			text: this.players[1]
			, handler: () => {
				this.forfeitGame(1);
			}
		}, {
			text: "Cancel"
			, icon: "close"
			, role: "cancel"
		}]
	  }).then(res => res.present());
  }

  forfeitGame(playerIndex) {

	this.forfeitted = true;
	this.isGameOver = true;
	this.winner = (playerIndex == 0 ? this.players[playerIndex + 1] : this.players[playerIndex - 1]);
	this.loser = this.players[playerIndex];

	for (let i = (playerIndex == 0 ? this.playerTwoScore : this.playerOneScore); i < 6; i++) {
		this.scores = [...this.scores, {
			pointDateTime: Date.now().toString()
			, scorer: this.winner
			, opponent: this.players[playerIndex]
			, gamePointNumber: i + 1
			, scorerPointNumber: playerIndex == 0 ? this.playerOneScore + 1 : this.playerTwoScore + 1
			, pointType: "forfeit"
		}];
	}

	this.gameEndConfirmationAlert();
  }

  async presentActionSheet(playerIndex) {
	
    await this.actionSheetController.create({
	  header: 'Type of Point Scored'
	  , mode: "md"
      , buttons: [{
          text: "Klasked"
          , handler: () => {
				this.addScoreAndUpdateGameData(playerIndex, "klask");
          }
      }, {
          text: "Loss of Control"
          , handler: () => {
				this.addScoreAndUpdateGameData(playerIndex, "loss of control");
          }
      }, {
          text: "Normal point"
          , handler: () => {
				this.addScoreAndUpdateGameData(playerIndex, "score");
          }
      }, {
          text: "Biscuits"
          , handler: () => {
				this.addScoreAndUpdateGameData(playerIndex, "biscuit");
          }
      }, {
		  text: "-1 (Correction)"
		  , handler: () => {
				// This creates a new array via filtering the existing one. 
				// It will filter out the entry where both condition expressions return false. (Why is behaving like &&???)
				//	Ex: Player "Trevor" requests to change his score from 2 to 1.
				//		  "Trevor" != "Trevor" returns false. 2 != 2 returns false. 
				//	    The request to delete Trevor's second point gets removed in the new scores array.
				this.scores = this.scores.filter(x => 
					x.scorer != (playerIndex == 0 ? this.players[0] : this.players[1]) || x.scorerPointNumber != (playerIndex == 0 ? this.playerOneScore : this.playerTwoScore)
				);
				console.log(this.scores);
		  } 
	  }, { 
          text: "Cancel"
          , icon: "close"
          , role: "cancel"
      }]
    }).then(res => res.present());
  } 

  addScoreAndUpdateGameData(playerIndex, pointType) {

	this.checkForWinner(playerIndex);

	this.scores = [...this.scores, {
		pointDateTime: Date.now().toString()
		, scorer: this.players[playerIndex]
		, opponent: playerIndex == 1 ? this.players[playerIndex - 1] : this.players[playerIndex + 1]
		, gamePointNumber: this.scores.length + 1
		, scorerPointNumber: playerIndex == 0 ? this.playerOneScore + 1 : this.playerTwoScore + 1 
		, pointType: pointType
	}];
  }

  checkForWinner(playerIndex) {

	  this.isGameOver = ((playerIndex == 0 ? this.playerOneScore + 1 : this.playerTwoScore + 1) == 6 ? true : false);

	  if (this.isGameOver) {
		  this.winner = this.players[playerIndex];
		  this.loser = this.players[(playerIndex == 0 ? playerIndex + 1 : playerIndex - 1)]
		  this.gameEndConfirmationAlert();
	  }
  }

  doSwitch() {
    [this.players[0], this.players[1]] = [this.players[1], this.players[0]];
  }

  ngOnInit() {}

  ionViewWillEnter() {
	  this.scores = [];
  }

  scores: currentPointData[] = [];
  isGameOver = false;
  forfeitted = false;
  players = ["Trevor", "Valeria"]; // To be filled in from the game setup page
  winner = null;
  loser = null;
  gameNumber = 1;

  get playerOneScore() {
	  return this.scores.filter(x => x.scorer == this.players[0]).length;
  }

  get playerTwoScore() {
	  return this.scores.filter(x => x.scorer == this.players[1]).length;
  }
}