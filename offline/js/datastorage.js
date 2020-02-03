//Wrapper to handle data communicaion with localstorage
class DataStorage {
  constructor(){
    this.key = "leaderboard_data";
  }

  get(){
    data = JSON.parse(localStorage.getItem(this.key));
    data.forEach(function(item){
      item.last_lap = parseFloat(item.last_lap).toFixed(2);
    });

    data.sort(function(a,b){
      if (a.position > b.position) {
        return 1;
      }
      if (b.position > a.position) {
          return -1;
      }
      return 0;
    });

    return data;
  }

  set(data){
    localStorage.setItem(this.key, data);
  }
}