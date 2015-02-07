var win = Ti.UI.createWindow({
 backgroundColor: '#ffffff',
 layout: 'vertical'
});

var timeView = Ti.UI.createView({
 top:0,
 width: '100%',
 height: '30%',
 backgroundColor: '#1C1C1C'
});

var label = Ti.UI.createLabel({
 color: '#404040',
 text: 'READY?',
 height: Ti.UI.SIZE,
 textAlign: 'center',
 verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
 font:{
 fontSize: '55sp',
 fontWeight: 'bold'
 }
});

timeView.add(label);
win.add(timeView);

var buttonsView = Ti.UI.createView({
 width: '100%',
 height: '10%',
 layout: 'horizontal'
});

var buttonStartLap = Ti.UI.createButton({
 title: 'GO!',
 color: '#C0BFBF',
 width: '50%',
 height: Ti.UI.FILL,
 backgroundColor: '#727F7F',
 font: {
 fontSize: '25sp',
 fontWeight: 'bold'
 },
});
buttonsView.add(buttonStartLap);

var buttonStopReset = Ti.UI.createButton({
 title: 'STOP',
 color: '#C0BFBF',
 width: '50%',
 height: Ti.UI.FILL,
 backgroundColor: '#404040',
 font: {
 fontSize: '25sp',
 fontWeight: 'bold'
 },
});

buttonsView.add(buttonStopReset);

win.add(buttonsView);
buttonStartLap.addEventListener('click',function(e){
	stopWatch.start();
});
buttonStopReset.addEventListener('click',function(e){
	stopWatch.stop();
	label.text = 'Ready?';
});

