//Core class
class LeaderBoard {
  constructor(){
    this.cable = ActionCable.createConsumer("ws://localhost:3000/cable");
  }
  setup(){
    this.listenLeaderboard();  
  }

  listenLeaderboard(){
    this.cable.subscriptions.create("LeaderboardChannel", {
      received: function(data){
        console.log("==========");
        console.log(data);
      }
    });
  }
}