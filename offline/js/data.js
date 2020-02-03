//Handler leaderboard data
class Data {
  constructor(){
    this.cable = ActionCable.createConsumer(WEBSOCKET_ENDPOINT + "?token=" + WEBSOCKET_TOKEN);
    this.dataStorage = new DataStorage();
  }

  listenLeaderboard(){
    var self = this;
    this.cable.subscriptions.create({channel: "LeaderboardChannel"}, {
      received: function(data){
        self.dataStorage.set(data);
      }
    });
  }

}