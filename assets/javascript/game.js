// document ready
$(document).ready(function () {

    function yourChar() {
        if (this.isYourChar) {
            this.boxElem2.show();
        } else {
            this.boxElem2.hide();
        }
    }

    function yourEnemy() {
        if (this.isYourEnemy) {
            this.boxElem3.show();
        } else {
            this.boxElem3.hide();
        }
    }

    function defender() {
        if (this.isDefending) {
            this.boxElem4.show();
        } else {
            this.boxElem4.hide();
        }
    }

    var obi = {
        name: "Obi-Wan Kenobi",
        isYourChar: false,
        isYourEnemy: false,
        isDefending: false,
        isDead: false,
        hp: 120,
        baseatk: 8,
        boxElem1: $('#obi1'),
        boxElem2: $('#obi2'),
        boxElem3: $('#obi3'),
        boxElem4: $('#obi4')
    };
    var luke = {
        name: "Luke Skywalker",
        isYourChar: false,
        isYourEnemy: false,
        isDefending: false,
        isDead: false,
        hp: 100,
        baseatk: 5,
        boxElem1: $('#luke1'),
        boxElem2: $('#luke2'),
        boxElem3: $('#luke3'),
        boxElem4: $('#luke4')
    };
    var sidious = {
        name: "Darth Sidious",
        isYourChar: false,
        isYourEnemy: false,
        isDefending: false,
        isDead: false,
        hp: 150,
        baseatk: 10,
        boxElem1: $('#sid1'),
        boxElem2: $('#sid2'),
        boxElem3: $('#sid3'),
        boxElem4: $('#sid4')
    };
    var maul = {
        Name: "Darth Maul",
        isYourChar: false,
        isYourEnemy: false,
        isDefending: false,
        isDead: false,
        hp: 180,
        baseatk: 25,
        boxElem1: $('#maul1'),
        boxElem2: $('#maul2'),
        boxElem3: $('#maul3'),
        boxElem4: $('#maul4')
    };
    function start() {
        obi.isYourChar = false;
        obi.isYourEnemy = false;
        obi.isDefending = false;
        obi.isDead = false;
        obi.hp = 120;

        luke.isYourChar = false;
        luke.isYourEnemy = false;
        luke.isDefending = false;
        luke.isDead = false;
        luke.hp = 100;

        sidious.isYourChar = false;
        sidious.isYourEnemy = false;
        sidious.isDefending = false;
        sidious.isDead = false;
        sidious.hp = 150;

        maul.isYourChar = false;
        maul.isYourEnemy = false;
        maul.isDefending = false;
        maul.isDead = false;
        maul.hp = 180;

        yourChar.call(obi);
        yourChar.call(luke);
        yourChar.call(sidious);
        yourChar.call(maul);

        yourEnemy.call(obi);
        yourEnemy.call(luke);
        yourEnemy.call(sidious);
        yourEnemy.call(maul);

        defender.call(obi);
        defender.call(luke);
        defender.call(sidious);
        defender.call(maul);
    }

    start();

    obi.boxElem1.on('click', function () {
        obi.isYourChar = true;
        luke.isYourEnemy = true;
        sidious.isYourEnemy = true;
        maul.isYourEnemy = true;
        yourChar.call(obi);
        obi.boxElem1.hide();
        luke.boxElem1.hide();
        sidious.boxElem1.hide();
        maul.boxElem1.hide();
        yourEnemy.call(luke);
        yourEnemy.call(sidious);
        yourEnemy.call(maul);
    })

    luke.boxElem1.on('click', function () {
        luke.isYourChar = true;
        obi.isYourEnemy = true;
        sidious.isYourEnemy = true;
        maul.isYourEnemy = true;
        yourChar.call(luke);
        luke.boxElem1.hide();
        obi.boxElem1.hide();
        sidious.boxElem1.hide();
        maul.boxElem1.hide();
        yourEnemy.call(obi);
        yourEnemy.call(sidious);
        yourEnemy.call(maul);
    })

    sidious.boxElem1.on('click', function () {
        sidious.isYourChar = true;
        luke.isYourEnemy = true;
        obi.isYourEnemy = true;
        maul.isYourEnemy = true;
        yourChar.call(sidious);
        obi.boxElem1.hide();
        luke.boxElem1.hide();
        sidious.boxElem1.hide();
        maul.boxElem1.hide();
        yourEnemy.call(luke);
        yourEnemy.call(obi);
        yourEnemy.call(maul);
    })

    maul.boxElem1.on('click', function () {
        maul.isYourChar = true;
        luke.isYourEnemy = true;
        sidious.isYourEnemy = true;
        obi.isYourEnemy = true;
        yourChar.call(maul);
        obi.boxElem1.hide();
        luke.boxElem1.hide();
        sidious.boxElem1.hide();
        maul.boxElem1.hide();
        yourEnemy.call(luke);
        yourEnemy.call(sidious);
        yourEnemy.call(obi);
    })

    obi.boxElem3.on('click', function () {
        if (maul.isDefending === false && sidious.isDefending === false && luke.isDefending === false) {
            obi.isDefending = true;
            obi.isYourEnemy = false;
            yourEnemy.call(obi);
            defender.call(obi);
        }
    })

    sidious.boxElem3.on('click', function () {
        if (maul.isDefending === false && obi.isDefending === false && luke.isDefending === false) {
        sidious.isDefending = true;
        sidious.isYourEnemy = false;
        yourEnemy.call(sidious);
        defender.call(sidious);
        }
    })

    maul.boxElem3.on('click', function () {
        if (obi.isDefending === false && sidious.isDefending === false && luke.isDefending === false) {
        maul.isDefending = true;
        maul.isYourEnemy = false;
        yourEnemy.call(maul);
        defender.call(maul);
        }
    })

    luke.boxElem3.on('click', function () {
        if (maul.isDefending === false && sidious.isDefending === false && obi.isDefending === false) {
        luke.isDefending = true;
        luke.isYourEnemy = false;
        yourEnemy.call(luke);
        defender.call(luke);
        }
    })



    //hide all images in certain divs
    //maybe use an array?
    //or an object
    // hide all messages
    //on click of first image hide all images and only reveal image clicked under your character the rest under enemies available to attack
    //on click remove character click and reveal character under defender
    //on click of the attack button
    //reveal message you have attackd for x damage
    //reveal you have taken y damage
    // change hp totals
    // if won choose new defender
    //repeat until all enemies are killed
    // restart butt shows up if your hp is 0 or all enemies killed
    // you win no enemies left you lose if ur hp <=0

})