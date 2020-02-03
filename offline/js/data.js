//Handler leaderboard data
class Data {
  constructor(){
    this.cable = ActionCable.createConsumer(WEBSOCKET_ENDPOINT);
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