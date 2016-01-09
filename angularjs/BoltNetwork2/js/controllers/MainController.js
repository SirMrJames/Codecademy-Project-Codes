pp.controller('MainController', ['$scope', function($scope) {
  $scope.program = [
    {
   series: "Sherlock",
   series_img:"http://static.srcdn.com/slir/w786-h786-q90-c786:786/wp-content/uploads/Sherlock-The-Abominable-Bride-Poster.jpg",
    genre:"Crime Drama",
    season: "New Years Special 2016",
    episode:"The Abominable Bride",
    description:"A Victorian-themed episode, the title of which is based on the quote (\"Ricoletti of the club foot and his abominable wife\") from \"The Adventure of the Musgrave Ritual\", which refers to a case mentioned by Sherlock Holmes.",
   datetime: new Date(2016,00,01,21,0,0,00,00)
  },
  {
   series: "Match Of The Day",
   series_img:"  http://www.watchonlinematch.com/wp-content/uploads/2015/08/Match-of-the-Day-MOTD-29815-Watch-Online-Free-01.png",
    genre:"Sport",
    season: "2015/2016",
    episode:"New Years Matches",
    description:"Highlights, interviews and analysis from expert pundits of Saturday's English Premier League football matches.",
   datetime: new Date(2016,00,02,22,30,0,00,00)
  }
    ]
}]);
