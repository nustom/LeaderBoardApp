//Core class
class LeaderBoard {
  constructor(){
    this.dataStorage = new DataStorage();
    var theTemplateScript = document.getElementById('leaderboard-template').innerHTML;
    this.theTemplate = Handlebars.compile(theTemplateScript);

  }
  refreshDashboard(){
    setInterval(this.renderDashboard.bind(this), 1000);
    
  }

  renderDashboard(){
    var data = this.dataStorage.get();
    document.getElementById('leaderboard-wrapper').innerHTML = this.theTemplate({people: data});
  }

}