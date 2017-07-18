/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bg',
            type:'image',
            rect:['0px','0px','100%','100%','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
         },
         {
            id:'audi_logo',
            type:'image',
            rect:['447px','23px','136px','23px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"audi_logo.jpg",'0px','0px']
         },
         {
            id:'audi_scorpila',
            type:'image',
            rect:['447px','58px','11.6%','6%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"audi_scorpila.jpg",'0px','0px']
         },
         {
            id:'image_container',
            type:'rect',
            rect:['27.5%','71.1%','57.7%','16.3%','auto','auto']
         },
         {
            id:'nav_buttons1',
            type:'image',
            rect:['41.1%','87.8%','2.4%','4%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"button_normal_state.png",'0px','0px']
         },
         {
            id:'nav_buttons2',
            type:'image',
            rect:['45.1%','87.8%','2.4%','4%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"button_normal_state.png",'0px','0px']
         },
         {
            id:'nav_buttons3',
            type:'image',
            rect:['48.7%','87.8%','2.4%','4%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"button_normal_state.png",'0px','0px']
         },
         {
            id:'nav_buttons4',
            type:'image',
            rect:['52.4%','87.8%','2.4%','4%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"button_normal_state.png",'0px','0px']
         },
         {
            id:'slogan_07',
            type:'image',
            rect:['32.4%','24.9%','44.7%','4%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"slogan_07.png",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'image_container',
            symbolName:'image_container'
         }
         ]
      },
   states: {
      "Base State": {
         "${_audi_scorpila}": [
            ["style", "left", '447px'],
            ["style", "top", '58px']
         ],
         "${_audi_logo}": [
            ["style", "left", '447px'],
            ["style", "top", '23px']
         ],
         "${_image_container}": [
            ["style", "top", '66.16%'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '16.75%'],
            ["style", "left", '28%'],
            ["style", "width", '46.29%']
         ],
         "${_slogan_07}": [
            ["style", "left", '32.43%'],
            ["style", "top", '24.94%']
         ],
         "${_bg}": [
            ["style", "opacity", '1'],
            ["style", "overflow", 'visible']
         ],
         "${_nav_buttons1}": [
            ["style", "left", '41.09%'],
            ["style", "top", '87.75%']
         ],
         "${_nav_buttons3}": [
            ["style", "left", '48.71%'],
            ["style", "top", '87.75%']
         ],
         "${_nav_buttons2}": [
            ["style", "left", '45.05%'],
            ["style", "top", '87.75%']
         ],
         "${_nav_buttons4}": [
            ["style", "left", '52.43%'],
            ["style", "top", '87.75%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '100%'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "max-width", '100%'],
            ["style", "width", '100%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid110", tween: [ "style", "${_image_container}", "height", '16.75%', { fromValue: '16.75%'}], position: 0, duration: 0 },
            { id: "eid76", tween: [ "transform", "${_image_container}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid77", tween: [ "gradient", "${_Stage}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 0, duration: 0 },
            { id: "eid115", tween: [ "style", "${_image_container}", "top", '66.16%', { fromValue: '66.16%'}], position: 0, duration: 0 },
            { id: "eid74", tween: [ "transform", "${_image_container}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid114", tween: [ "style", "${_image_container}", "left", '28%', { fromValue: '28%'}], position: 0, duration: 0 },
            { id: "eid78", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 0 },
            { id: "eid113", tween: [ "style", "${_image_container}", "width", '46.29%', { fromValue: '46.29%'}], position: 0, duration: 0 }         ]
      }
   }
},
"image_container": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: true,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '65px'],
            ["style", "width", '404px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"bttn_test": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'bttn_test',
      type: 'image',
      rect: ['0px','0px','100%','100%','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/button_normal_state.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '16px'],
            ["style", "width", '17px']
         ],
         "${_bttn_test}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"test": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'button1Copy',
      type: 'image',
      rect: ['0px','0px','100%','100%','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/button_normal_state.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_button1Copy}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '16px'],
            ["style", "width", '17px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"bttn1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'button1',
      type: 'image',
      rect: ['0px','0px','100%','100%','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/button_normal_state.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_button1}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '16px'],
            ["style", "width", '17px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"bttn2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'button2',
      type: 'image',
      rect: ['0px','0px','100%','100%','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/button_normal_state.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_button2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '16px'],
            ["style", "width", '17px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"bttn3": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'button3',
      type: 'image',
      rect: ['0px','0px','100%','100%','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/button_normal_state.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_button3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '16px'],
            ["style", "width", '17px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"bttn4": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'button4',
      type: 'image',
      rect: ['0px','0px','100%','100%','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/button_normal_state.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_button4}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '16px'],
            ["style", "width", '17px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"nav_bttn1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'button_normal_state',
      type: 'image',
      rect: ['0px','0px','17px','16px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/button_normal_state.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_button_normal_state}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '16px'],
            ["style", "width", '17px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4241995");
