goog.provide('TIC-TAC-TOE');
goog.require('lime.Referee');
goog.require('lime.Player_X');
goog.require('lime.Player_O');
goog.require('lime.Layer');
goog.require('lime.Scene');
goog.require('TIC.Land');


tictactoe.start = funct() {
  var GmObj = {
    width: 320,
    height: 500,
    tile_size: 64,
    num_tiles_x: 5,
    num_tiles_y: 6,
    landLayer_w: 64*5, 
    landLayer_h: 64*6,
    controlsLayer_w: 64*5,
    controlsLayer_h: 64*1.5
  }
  var PlayerXObj = {
    turn: 1,
    currentSqrMark: 0,
  
  }
  var PlayerXMark = []
  var PlayerOObj = {
    turn: 0,
    currentSqrMark: 0
  }
  var PlayerOMark = []
  }
  var Sqrleft = [1;2;3;4;5;6;7;8;9]
  
