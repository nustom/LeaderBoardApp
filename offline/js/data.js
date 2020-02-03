//Handler leaderboard data
class Data {
  constructor(){
    this.cable = ActionCable.createConsumer("ws://localhost:3000/cable");
    this.dataStorage = new DataStorage();
  }

  listenLeaderboard(){
    var self = this;
    this.cable.subscriptions.create("LeaderboardChannel", {
      received: function(data){
        self.dataStorage.set(data);
      }
    });
  }

}