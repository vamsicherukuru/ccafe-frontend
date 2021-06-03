$(document).ready(function () {
  $('button a').click(function (e) {
    e.preventDefault();
  });
});

function displayOptions() {
  const searchOptions = document.getElementsByClassName('searchOptions')[0];
  const mainBody = document.getElementById('main');
  searchOptions.style.opacity = '1';
  searchOptions.style.transition = 'all 0.3s';
  searchOptions.style.pointerEvents = 'all';
  mainBody.style.opacity = '0';
  mainBody.style.transition = '0.3s';
}
function hideOptions() {
  const searchOptions = document.getElementsByClassName('searchOptions')[0];
  const mainBody = document.getElementById('main');
  searchOptions.style.opacity = '0';
  searchOptions.style.pointerEvents = 'none';
  mainBody.style.opacity = '1';
  mainBody.style.pointerEvents = 'all';
}

function displayDirectory() {
  const hostBody = document.getElementById('host-an-event');
  const directoryBody = document.getElementById('directorytable');
  console.log('what');
  directoryBody.style.display = 'block';
  directoryBody.style.transition = 'all 0.3s';
  directoryBody.style.pointerEvents = 'all';
  mainBody.style.opacity = '0';
  mainBody.style.transition = '0.3s';
}

function clickOnX() {
  const hostBody = document.getElementById('host-an-event');
  const directoryBody = document.getElementById('directorytable');
  console.log('what');
  hostBody.style.display = 'none';
  hostBody.style.transition = 'all 0.3s';
  hostBody.style.pointerEvents = 'none';
  directoryBody.style.display = 'none';
  directoryBody.style.transition = 'all 0.3s';
  directoryBody.style.pointerEvents = 'none';
  mainBody.style.opacity = '1';
  mainBody.style.transition = '0.3s';
}

function displayHost() {
  const hostBody = document.getElementById('host-an-event');
  const directoryBody = document.getElementById('directorytable');
  console.log('what');
  hostBody.style.display = 'block';
  hostBody.style.transition = 'all 0.3s';
  hostBody.style.pointerEvents = 'all';
  mainBody.style.opacity = '0';
  mainBody.style.transition = '0.3s';
}

var subjectObject = {
  Food: ['Baking', 'Cooking', 'Catering'],
  Fitness: [
    'Fitness',
    'Beauty Care',
    'Organic',
    'Personal Growth',
    'Medical Clinic',
    'Sports Management',
  ],
  Tuition: ['Tuition'],
  Business: ['Management'],
  Home: [
    'Home Rental',
    'Home Maintenance',
    'Laundry',
    'Interiors',
    'Energy & Waste',
    'Plant Nursery',
    'Art & Craft',
  ],
  Fashion: ['Clothing', 'Accessories'],
  Travel: ['Travel Agency', 'Car Rental', 'Car Maintenance'],
  Events: ['Entertainment'],
  Care: ['Elder Care', 'Child Care', 'Pet Care'],
};
window.onload = function () {
  var subjectSel = document.getElementById('subject');
  var topicSel = document.getElementById('topic');
  var chapterSel = document.getElementById('chapter');
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function () {
    //empty Chapters- and Topics- dropdowns
    topicSel.length = 1;
    //display correct values
    var z = subjectObject[this.value];
    for (var i = 0; i < z.length; i++) {
      topicSel.options[topicSel.options.length] = new Option(z[i], z[i]);
    }
  };
  topicSel.onchange = function () {
    //empty Chapters dropdown
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
  };
};
