/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['7px', '9px','457px','280px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)",[270,[['rgba(180,111,42,1.00)',0],['rgba(235,164,93,1.00)',31],['rgba(255,255,255,1.00)',100]]]],
                stroke: [7,"rgba(67,60,60,1.00)","solid"]
            },
            {
                id: 'Ellipse3',
                type: 'ellipse',
                rect: ['189px', '90px','104px','76px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)",[50,50,true,'farthest-corner',[['rgba(175,19,53,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                stroke: [0,"rgb(0, 0, 0)","none"],
                filter: [1, 154, 1.0666666666667, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'cool-stop-button-47395243',
                type: 'image',
                rect: ['228px', '147px','164px','148px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"cool-stop-button-4739524.png",'0px','0px']
            },
            {
                id: 'button-300x1762',
                type: 'image',
                rect: ['113px', '183px','115px','76px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"button-300x176.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '9px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '7px'],
                ["color", "border-color", 'rgba(67,60,60,1.00)'],
                ["style", "height", '280px'],
                ["gradient", "background-image", [270,[['rgba(180,111,42,1.00)',0],['rgba(235,164,93,1.00)',31],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '7px'],
                ["style", "width", '457px']
            ],
            "${_button-300x1762}": [
                ["style", "top", '183px'],
                ["style", "height", '76px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '113px'],
                ["style", "width", '115px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_cool-stop-button-47395243}": [
                ["style", "top", '147px'],
                ["style", "height", '148px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '228px'],
                ["style", "width", '164px']
            ],
            "${_Ellipse3}": [
                ["subproperty", "filter.contrast", '1.0666666666667'],
                ["subproperty", "filter.hue-rotate", '154deg'],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(175,19,53,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '184px'],
                ["style", "width", '104px'],
                ["style", "top", '22px'],
                ["subproperty", "filter.invert", '1'],
                ["style", "height", '76px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1575,
            autoPlay: true,
            labels: {
                "animation": 900
            },
            timeline: [
                { id: "eid11", tween: [ "style", "${_Ellipse3}", "height", '43px', { fromValue: '76px'}], position: 900, duration: 350 },
                { id: "eid15", tween: [ "style", "${_Ellipse3}", "height", '76px', { fromValue: '43px'}], position: 1250, duration: 325 },
                { id: "eid5", tween: [ "style", "${_Ellipse3}", "left", '184px', { fromValue: '184px'}], position: 900, duration: 0 },
                { id: "eid2", tween: [ "style", "${_Ellipse3}", "width", '104px', { fromValue: '104px'}], position: 900, duration: 0 },
                { id: "eid10", tween: [ "style", "${_Ellipse3}", "top", '136px', { fromValue: '22px'}], position: 900, duration: 350 },
                { id: "eid14", tween: [ "style", "${_Ellipse3}", "top", '22px', { fromValue: '136px'}], position: 1250, duration: 325 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-13965555");
