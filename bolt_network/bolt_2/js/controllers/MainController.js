app.controller('MainController', ['$scope', function($scope) {
  $scope.program = [
  {
	series: "Sherlock",
    series_img: "img/sherlock.jpg",
    genre: "Crime drama",
    season: 3,
    episode: "The Empty Hearse",
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
    datetime: new Date(2014,11,31,21,00,00,00)
  },
    {
  series: "Other",
  series_img: "img/sherlock.jpg",
  genre: "Sci-Fi",
  season: 1,
  episode: "Worlds End",
  description: "Two years after the end of civilization, the aliens invaded.  Few remained on earth, scattered between remote colonizations, scavenging what little resources they could find to survive in the hostile new world.  One was to become great, who could wield the power of magic to defeat the deadly looming alien threat!",
  datetime: new Date(2016, 13, 12, 11, 00, 00, 00)
}]
}]);