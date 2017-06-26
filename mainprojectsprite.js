goog.provide('TIC-TAC-TOE.Land');
goog.require('lime.Sprite');
TIC-TAC-TOE.Land = function(GmObj,PlayerXObj) {
    goog.base(this);
    this.setAnchorPoint(0, 0);
    this.setSize(gameObj.tile_size,gameObj.tile_size);
    this.setFill('images/Blank_title.jpeg');
