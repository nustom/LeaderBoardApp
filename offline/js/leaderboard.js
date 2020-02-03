//Core class
class LeaderBoard {
  constructor(){
    this.dataStorage = new DataStorage();
    var theTemplateScript = document.getElementById('leaderboard-template').innerHTML;
    this.theTemplate = Handlebars.compile(theTemplateScript);

  }
  refreshDashboard(){
    setInterval(this.renderDashboard.bind(this), REFRESH_TIMEOUT);
    
  }

  renderDashboard(){
    var data = this.dataStorage.get();
    document.getElementById('leaderboard-wrapper').innerHTML = this.theTemplate({people: data});
  }

}