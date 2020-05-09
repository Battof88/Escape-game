objects = {
    wall: {
		name: "wall",
		type: "background",
		show: true,
		x: 256,
		y: 300,
		mobile: false,
        scale:1,
		image: {
			src: 'pictures/background.png',
			dimX: 256,
			dimY: 128
		}
	},
    unlockedFurniture: {	
		name: "unlockedFurniture",
		type: "object",
		show: false,
		x:800,
		y:520,
		mobile: false,
		description: "Un meuble. Vous l'avez ouvert avec la clé.",
        scale:1,
		image: {
			src: "pictures/unlockedfurniture.png",
			dimX: 128,
			dimY: 32
		}
	},
    cord: {
		name: "cord",
		type: "keyObject",
		show: false,
		x: 800,
		y: 530,
		mobile: false,
        scale:1,
		image: {
			src: 'pictures/cord.png',
			dimX: 4,
			dimY: 16
		}
	},
	lockedFurniture: {	
		name: "lockedFurniture",
		type: "object",
		show: true,
		x:800,
		y:520,
		mobile: false,
		description: "Un meuble. Il est fermé.",
        scale:1,
		image: {
			src: "pictures/lockedfurniture.png",
			dimX: 128,
			dimY: 32
		}
	},
    tvon: {
		name: "tvon",
		type: "object",
		show: false,
		x: 1200,
		y: 250,
		mobile: false,
		description: "Une télévision. Il y a quelque chose sur l'écran.",
        scale:1,
		image: {
			src: 'pictures/tvon.png',
			dimX: 64,
			dimY: 32
		}
	},
	tvoff: {
		name: "tvoff",
		type: "object",
		show: true,
		x: 1200,
		y: 250,
		mobile: false,
		description: "Une télévision. Il n'a pas l'air d'y avoir de courant...",
        scale:1,
		image: {
			src: 'pictures/tvoff.png',
			dimX: 64,
			dimY: 32
		}
	},
    unlockedPanel: {
		name: "unlockedPanel",
		type: "object",
		show: false,
		x: 1850,
		y: 420,
		mobile: false,
		description: "Le courant a été remis.",
        scale:1,
		image: {
			src: 'pictures/unlockedpanel.png',
			dimX: 16,
			dimY: 8
		}
	},
	lockedPanel: {
		name: "lockedPanel",
		type: "object",
		show: true,
		x: 1850,
		y: 420,
		mobile: false,
		description: "Un petit panneau électrique. Il y a 6 plots dessus.",
        scale:1,
		image: {
			src: 'pictures/lockedpanel.png',
			dimX: 16,
			dimY: 8
		}
	},
    keytab: {
		name: "keytab",
		type: "object",
		show: true,
		x: 500,
		y: 250,
		mobile: false,
		description: "Un panneau en bois avec des crochets. On peut y mettre des clés.",
        scale:1,
		image: {
			src: 'pictures/keytab.png',
			dimX: 32,
			dimY: 32
		}
	},
    key: {
		name: "key",
		type: "keyObject",
		show: true,
		x: 500,
		y: 295,
		mobile: false,
        scale:1,
		image: {
			src: 'pictures/key.png',
			dimX: 8,
			dimY: 16
		}
	},
    door: {
		name: "door",
		type: "exit",
		show: true,
		x: 200,
		y: 365,
		mobile: false,
		description: "La porte, votre seule issue. Il y a quelque chose d'inscrit dessus.",
        scale:1,
		image: {
			src: 'pictures/door.png',
			dimX: 64,
			dimY: 128
		}
	},
    digicode: {
		name: "digicode",
		type: "digicode",
		show: true,
		x: 350,
		y: 370,
		mobile: false,
        scale:1,
		image: {
			src: 'pictures/digicode.png',
			dimX: 32,
			dimY: 32
		}
	},
    button1: {
		name: "1",
		type: "button",
		show: true,
		x: 325,
		y: 345,
		mobile: false,
		value:1,
        scale:1,
		image: {
			src: 'pictures/btn1.png',
			dimX: 8,
			dimY: 8
		}
	},
    button2: {
		name: "2",
		type: "button",
		show: true,
		x: 350,
		y: 345,
		mobile: false,
		value:2,
        scale:1,
		image: {
			src: 'pictures/btn2.png',
			dimX: 8,
			dimY: 8
		}
	},
    button3: {
		name: "3",
		type: "button",
		show: true,
		x: 375,
		y: 345,
		mobile: false,
		value:3,
        scale:1,
		image: {
			src: 'pictures/btn3.png',
			dimX: 8,
			dimY: 8
		}
	},
    button4: {
		name: "4",
		type: "button",
		show: true,
		x: 325,
		y: 370,
		mobile: false,
		value:4,
        scale:1,
		image: {
			src: 'pictures/btn4.png',
			dimX: 8,
			dimY: 8
		}
	},
    button5: {
		name: "5",
		type: "button",
		show: true,
		x: 350,
		y: 370,
		mobile: false,
		value:5,
        scale:1,
		image: {
			src: 'pictures/btn5.png',
			dimX: 8,
			dimY: 8
		}
	},
    button6: {
		name: "6",
		type: "button",
		show: true,
		x: 375,
		y: 370,
		mobile: false,
		value:6,
        scale:1,
		image: {
			src: 'pictures/btn6.png',
			dimX: 8,
			dimY: 8
		}
	},
    button7: {
		name: "7",
		type: "button",
		show: true,
		x: 325,
		y: 395,
		mobile: false,
		value:7,
        scale:1,
		image: {
			src: 'pictures/btn7.png',
			dimX: 8,
			dimY: 8
		}
	},
    button8: {
		name: "8",
		type: "button",
		show: true,
		x: 350,
		y: 395,
		mobile: false,
		value:8,
        scale:1,
		image: {
			src: 'pictures/btn8.png',
			dimX: 8,
			dimY: 8
		}
	},
    button9: {
		name: "9",
		type: "button",
		show: true,
		x: 375,
		y: 395,
		mobile: false,
		value:9,
        scale:1,
		image: {
			src: 'pictures/btn9.png',
			dimX: 8,
			dimY: 8
		}
	},
    clock: {
		name: "clock",
		type: "object",
		show: true,
		x: 1700,
		y: 200,
		mobile: false,
		description: "Une horloge. Elle ne semble pas fonctionner.",
        scale:1,
		image: {
			src: 'pictures/clock.png',
			dimX: 64,
			dimY: 64
		}
	},
    greatclockhand: {
		name: "greatclockhand",
		type: "object",
		show: true,
		x: 1702,
		y: 175,
		mobile: false,
        scale:1,
		image: {
			src: 'pictures/greatclockhand.png',
			dimX: 4,
			dimY: 16
		}
	},
    littleclockhand: {
		name: "littleclockhand",
		type: "object",
		show: true,
		x: 1702,
		y: 175,
		mobile: false,
        scale:1,
		image: {
			src: 'pictures/littleclockhand.png',
			dimX: 4,
			dimY: 8
		}
	},
    desk: {
		name: "desk",
		type: "object",
		show: true,
		x: 1500,
		y: 440,
		mobile: false,
		description: "Un bureau.",
        scale:1,
		image: {
			src: 'pictures/desk.png',
			dimX: 128,
			dimY: 64
		}
	},
    inventoryCord: {
		name: "inventoryCord",
		type: "keyObject",
		show: false,
		x: 60,
		y: 650,
		mobile: true,
        scale:2,
		image: {
			src: 'pictures/cord.png',
			dimX: 4,
			dimY: 16
		}
	},
    inventoryKey: {
		name: "inventoryKey",
		type: "keyObject",
		show: false,
		x: 150,
		y: 650,
		mobile: true,
        scale:2,
		image: {
			src: 'pictures/key.png',
			dimX: 8,
			dimY: 16
		}
	},
    plant: {
        name: "plant",
        type: "object",
        show: true,
        x: 30,
        y: 380,
		mobile: false,
		description: "Une plante verte.",
        scale:1,
        image: {
            src: 'pictures/plant.png',
            dimX: 128,
            dimY: 32
        }
    }
}