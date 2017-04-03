var model = {
  currentCat: null,
  cats : [
    {
      clickCount : 0,
      name : 'Tabby',
      imgSrc :'img/cat1.jpg'
    },
    {
      clickCount : 0,
      name : 'Tiger',
      imgSrc :'img/cat2.jpg'
    },
    {
      clickCount : 0,
      name : 'Scaredy',
      imgSrc :'img/cat3.jpg'
    },
    {
      clickCount : 0,
      name : 'Shadow',
      imgSrc :'img/cat4.jpg'
    },
    {
    clickCount : 0,
    name : 'Sleepy',
    imgSrc :'img/cat5.jpg'
  }
  ]
};

var octopus = {

  init: function(){
    model.currentCat = model.cats[0];

    catListView.init();
    catView.init();
  },

  getCurrentCat: function(){
    return model.currentCat;
  },

  getCats: function(){
    return model.cats;
  },

  setCurrentCat: function(cat){
    model.currentCat = cat;
  },

  incrementCounter : function(){
    model.currentCat.clickCount++;
    catView.render();
  }

};


var catView = {
    init: function() {
      this.catElem = document.getElementById('cat');
      this.catNameElem = document.getElementById('cat-name');
      this.catImageElem = document.getElementById('cat-img');
      this.countElem = document.getElementById('cat-count');

      this.catImageElem.addEventListener('click' , function(e){
        octopus.incrementCounter();
      });

      this.render();
  },

    render: function(){
      var currentCat = octopus.getCurrentCat();
      this.countElem.textContent = currentCat.clickCount;
      this.catNameElem.textContent = currentCat.name;
      this.catImageElem.src=currentCat.imgSrc;
    }
};

var catListView = {
  init : function(){
    this.catListElem = document.getElementById('cat-list');

    this.render();
  },

  render : function(){
    var cats = octopus.getCats();
    this.catListElem.innerHTML = '';

    for(var i = 0 ;i < cats.length ; i++)
    {
      var cat = cats[i];

      var elem = document.createElement('li');
      elem.textContent = cat.name;

      elem.addEventListener('click' , (function(cat){
        return function(){
          octopus.setCurrentCat(cat);
          catView.render();
        };
      }) (cat));

      this.catListElem.appendChild(elem);
    };

  }
};

octopus.init();
