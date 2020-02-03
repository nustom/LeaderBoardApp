//Core class
class LeaderBoard {
  constructor(){
    this.dataStorage = new DataStorage();
  }
  refreshDashboard(){
    setInterval(this.renderDashboard.bind(this), 1000)
    
  }

  renderDashboard(){
    var data = this.dataStorage.get(data);
  }

}