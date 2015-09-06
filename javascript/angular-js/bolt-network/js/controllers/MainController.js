app.controller('MainController', ['$scope', function($scope) {
  $scope.programs = [{
    series: "Sherlock",
    series_img: "img/sherlock.jpg",
    genre: "Crime drama",
    season: 3,
    episode: "The Empty Hearse",
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack.  John has moved on and has a girlfriend, Mary Morstan.  Sherlock enlists Molly to assist him, but when John is kinapped by unknown assailants and is recused by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during n all night sitting on Guy Fawkes Night",
    datetime: new Date(2014, 11, 31, 21, 0, 0, 0)
  },{    
    series: "Dr. Who",
    series_img: "img/thedoctor.jpg",
    genre: "Sci-fi",
    season: 4,
    episode: "Silence in the Library",
    description: "The Doctor and Donna land in the 51st century to visit the greatest library in the universe. The Doctor is somewhat taken aback however to find there is no one there. To the best he can determine, the library has been closed for 100 years so the arrival of a team of archaeologists comes as something of a surprise. The private expedition has been paid for by a wealthy amateur but the expert leader of the group is Dr. River Song. Although the Doctor doesn't know her, it soon becomes apparent that she knows him quite well having met him in another time. All of them however come into danger when they make contact with a young girl who communicates with them through her television. The encounter has consequences for Donna in particular who seems to have been absorbed into the library.",
      datetime: new Date(2014, 11, 31, 21, 0, 0, 0)
  }];
}]);