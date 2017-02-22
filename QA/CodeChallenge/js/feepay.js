$(document).ready(function() {

  var opts = {
    lines: 11 // The number of lines to draw
  , length: 35 // The length of each line
  , width: 13 // The line thickness
  , radius: 42 // The radius of the inner circle
  , scale: .8 // Scales overall size of the spinner
  , corners: 1 // Corner roundness (0..1)
  , color: '#000' // #rgb or #rrggbb or array of colors
  , opacity: 0.25 // Opacity of the lines
  , rotate: 0 // The rotation offset
  , direction: 1 // 1: clockwise, -1: counterclockwise
  , speed: 0.7 // Rounds per second
  , trail: 72 // Afterglow percentage
  , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
  , zIndex: 2e9 // The z-index (defaults to 2000000000)
  , className: 'spinner' // The CSS class to assign to the spinner
  , top: '100%' // Top position relative to parent
  , left: '50%' // Left position relative to parent
  , shadow: false // Whether to render a shadow
  , hwaccel: false // Whether to use hardware acceleration
  , position: 'absolute' // Element positioning
  }
  var target = document.getElementById('spinner-container')
  var spinner = new Spinner(opts).spin(target);

    function AppViewModel() {
        var self = this;
        self.people = ko.observableArray();
        self.update_amounts = function() {
          for (var i = 0; i < self.people().length; i++) {
            var person = self.people()[i];
            var amount = person.amount();
            if (amount){
              person.accountBalance(parseInt(person.amount()) + person.accountBalance());
              person.amount(null);
            }
          }
        }
    };

    var peopleModel = new AppViewModel();
    ko.applyBindings(peopleModel);

    var peopleDB = [
          { studentId: ko.observable('1'), firstName: ko.observable('Bert'), lastName: ko.observable('Bertington'), email: ko.observable('bberlington@feepay.com'), accountBalance: ko.observable(30), amount: ko.observable(null) },
          { studentId: ko.observable('2'), firstName: ko.observable('Charles'), lastName: ko.observable('Charlesforth'), email: ko.observable('ccharlesforth@feepay.com'), accountBalance: ko.observable(5), amount: ko.observable(null) },
          { studentId: ko.observable('3'), firstName: ko.observable('Eric'), lastName: ko.observable('Triad'), email: ko.observable('etriad@feepay.com'), accountBalance: ko.observable(0), amount: ko.observable(null) },
          { studentId: ko.observable('4'), firstName: ko.observable('Johan'), lastName: ko.observable('Bach'), email: ko.observable('jbach@feepay.com'), accountBalance: ko.observable(700), amount: ko.observable(null) },
          { studentId: ko.observable('5'), firstName: ko.observable('Adrianna'), lastName: ko.observable('Noteworthy'), email: ko.observable('anoteworthy@feepay.com'), accountBalance: ko.observable(15), amount: ko.observable(null) },
          { studentId: ko.observable('6'), firstName: ko.observable('Johnny'), lastName: ko.observable('FP'), email: ko.observable('jfp@feepay.com'), accountBalance: ko.observable(0), amount: ko.observable(null) },
          { studentId: ko.observable('7'), firstName: ko.observable('Nancy'), lastName: ko.observable('Othing'), email: ko.observable('nothing@feepay.com'), accountBalance: ko.observable(28.5), amount: ko.observable(null) },
          { studentId: ko.observable('8'), firstName: ko.observable('In'), lastName: ko.observable('Side'), email: ko.observable('iside@feepay.com'), accountBalance: ko.observable(20), amount: ko.observable(null) },
          { studentId: ko.observable('9'), firstName: ko.observable('Out'), lastName: ko.observable('Side'), email: ko.observable('oside@feepay.com'), accountBalance: ko.observable(45), amount: ko.observable(null) },
          { studentId: ko.observable('10'), firstName: ko.observable('Harry'), lastName: ko.observable('Mann'), email: ko.observable('hmann@feepay.com'), accountBalance: ko.observable(0), amount: ko.observable(null) },
          { studentId: ko.observable('11'), firstName: ko.observable('Selenium'), lastName: ko.observable('Webdriver'), email: ko.observable('swebdriver@feepay.com'), accountBalance: ko.observable(46), amount: ko.observable(null) },
          { studentId: ko.observable('27'), firstName: ko.observable('Sally'), lastName: ko.observable('Omthing'), email: ko.observable('something@feepay.com'), accountBalance: ko.observable(22), amount: ko.observable(null) },
          { studentId: ko.observable('35'), firstName: ko.observable('Patrick'), lastName: ko.observable('Urple'), email: ko.observable('purple@feepay.com'), accountBalance: ko.observable(22), amount: ko.observable(null) },
          { studentId: ko.observable('12'), firstName: ko.observable('Thomas'), lastName: ko.observable('Werk'), email: ko.observable('twerk@feepay.com'), accountBalance: ko.observable(98), amount: ko.observable(null) },
          { studentId: ko.observable('42'), firstName: ko.observable('Denise'), lastName: ko.observable('Dentiste'), email: ko.observable('ddentiste@feepay.com'), accountBalance: ko.observable(50), amount: ko.observable(null) }
    ];

    setTimeout(function() {

        var shuffledPeople = shuffle(peopleDB);

        spinner.stop(); //stop spinner

        //add 5 people to page
        var publishArray = [];
        for (i = 0; i < 5; i++){
          student = shuffledPeople[i];
          publishArray.push(student);
        }
        publishArray.push({ studentId: ko.observable('62'), firstName: ko.observable('Low'), lastName: ko.observable('Balance'), email: ko.observable('lbalance@feepay.com'), accountBalance: ko.observable(0), amount: ko.observable(null) });

        peopleModel.people ( shuffle(publishArray) ); //sets people array to shuffled public array
    }, (Math.random() * 5000) );


});

function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
  return array;
};
