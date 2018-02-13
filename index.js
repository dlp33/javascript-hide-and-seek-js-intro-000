function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  // that pulls a .target out of #nested
  // (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
  var target = document.getElementById('nested').querySelector('.target');
  return target;
}

function increaseRankBy(n) {
  // grab the ranked-list
  var list = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < list.length; i++) {
    var initalNum = parseInt(list[i].innerHTML);
    list[i].innerHTML = initalNum + n;
  }

}

function deepestChild() {
  var all = document.querySelector('div#grand-node');
  var deepText = all.textContent;
  var parsed = deepText.replace(/\s/g,'');

  return parsed;
}
