"use strict";
let canvas = document.querySelector("canvas");
let crc2 = canvas.getContext("2d");
crc2.fillStyle = "#FF0000";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
crc2.fillStyle = "#00FFFF";
crc2.fillRect(20, 20, 40, 40);
crc2.beginPath();
crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
//context.arc(x, y, r, sAngle, eAngle, counterclockwise)
//x/y=x/y coord of center
//r=radius
//s/eAngle=starting angle/ending angle, in radians (0 is 3 o clock)
//counterclockwise= if counterclockwise, optional (clockwise is default)
crc2.closePath();
crc2.stroke();
crc2.beginPath();
crc2.ellipse(150, 100, 5, 10, 20, 90, 0, true);
crc2.closePath();
crc2.fillStyle = "#fef65b";
crc2.fill();
