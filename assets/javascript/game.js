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

    function kill() {
        if (this.isDead) {
            this.boxElem4.hide();
        }
    }

    var yourBaseAtk = 0;
    var yourTotalAtk = 0;
    var defenderAtk = 0;
    var yourHP = 0;
    var champ = Object;
    var defenderHP = 0;
    var isAlive = Object;
    var lost = false;

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
        boxElem4: $('#obi4'),
        hpElem: $('.obi'),
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
        boxElem4: $('#luke4'),
        hpElem: $('.luke')
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
        boxElem4: $('#sid4'),
        hpElem: $('.sidious')
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
        boxElem4: $('#maul4'),
        hpElem: $('.maul')

    };
    function start() {
        lost = false;
        totalKilled = 0;
        yourHP = 0;
        yourBaseAtk = 0;
        yourTotalAtk = 0;
        defenderAtk = 0;
        defenderhp = 0;
        isAlive = Object;

        obi.isYourChar = false;
        obi.isYourEnemy = false;
        obi.isDefending = false;
        obi.isDead = false;

        luke.isYourChar = false;
        luke.isYourEnemy = false;
        luke.isDefending = false;
        luke.isDead = false;

        sidious.isYourChar = false;
        sidious.isYourEnemy = false;
        sidious.isDefending = false;
        sidious.isDead = false;

        maul.isYourChar = false;
        maul.isYourEnemy = false;
        maul.isDefending = false;
        maul.isDead = false;

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

        obi.boxElem1.show();
        luke.boxElem1.show();
        sidious.boxElem1.show();
        maul.boxElem1.show();

        $('#noenemy').hide();
        $('.combat').hide();
        $('#gameover').hide();
        $('#victory').hide();
        $('#restartbtn').hide();
    }

    start();

    obi.boxElem1.on('click', function () {
        obi.isYourChar = true;
        obi.isDead = true;
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
        yourBaseAtk = obi.baseatk;
        yourHP = obi.hp;
        champ = obi;
    })

    luke.boxElem1.on('click', function () {
        luke.isYourChar = true;
        luke.isDead = true;
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
        yourBaseAtk = luke.baseatk;
        yourHP = luke.hp;
        champ = luke;
    })

    sidious.boxElem1.on('click', function () {
        sidious.isYourChar = true;
        sidious.isDead = true;
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
        yourBaseAtk = sidious.baseatk;
        yourHP = sidious.hp;
        champ = sidious;
    })

    maul.boxElem1.on('click', function () {
        maul.isYourChar = true;
        maul.isDead = true;
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
        yourBaseAtk = maul.baseatk;
        yourHP = maul.hp;
        champ = maul;
    })

    obi.boxElem3.on('click', function () {
        if (maul.isDefending === false && sidious.isDefending === false && luke.isDefending === false) {
            obi.isDefending = true;
            obi.isYourEnemy = false;
            yourEnemy.call(obi);
            defender.call(obi);
            defenderAtk = obi.baseatk;
            defenderHP = obi.hp;
            isAlive = obi;
            $('#noenemy').hide();
            $('#victory').hide();
        }
    })

    sidious.boxElem3.on('click', function () {
        if (maul.isDefending === false && obi.isDefending === false && luke.isDefending === false) {
            sidious.isDefending = true;
            sidious.isYourEnemy = false;
            yourEnemy.call(sidious);
            defender.call(sidious);
            defenderAtk = sidious.baseatk;
            defenderHP = sidious.hp;
            isAlive = sidious;
            $('#noenemy').hide();
            $('#victory').hide();
        }
    })

    maul.boxElem3.on('click', function () {
        if (obi.isDefending === false && sidious.isDefending === false && luke.isDefending === false) {
            maul.isDefending = true;
            maul.isYourEnemy = false;
            yourEnemy.call(maul);
            defender.call(maul);
            defenderAtk = maul.baseatk;
            defenderHP = maul.hp;
            isAlive = maul;
            $('#noenemy').hide();
            $('#victory').hide();
        }
    })

    luke.boxElem3.on('click', function () {
        if (maul.isDefending === false && sidious.isDefending === false && obi.isDefending === false) {
            luke.isDefending = true;
            luke.isYourEnemy = false;
            yourEnemy.call(luke);
            defender.call(luke);
            defenderAtk = luke.baseatk;
            defenderHP = luke.hp;
            isAlive = luke;
            $('#noenemy').hide();
            $('#victory').hide();
        }
    })

    $('#fightbtn').on('click', function () {

        if (lost) {
            return;
        } else {
            if (obi.isDefending || luke.isDefending || maul.isDefending || sidious.isDefending) {
               
               if(defenderHP>0){ 
                yourTotalAtk = yourTotalAtk + yourBaseAtk;
                defenderHP = defenderHP - yourTotalAtk;
                isAlive.hpElem.html(defenderHP);}
                if(yourHP>0){
                yourHP = yourHP - defenderAtk;
                
                champ.hpElem.html(yourHP);
                }
                if (defenderHP <= 0) {
                    isAlive.isDead = true;
                    isAlive.isDefending = false;
                    kill.call(isAlive);
                    $('#victory').show();
                    $('.enemy').html(isAlive.name);
                }
                if (yourHP <= 0) {
                $('#gameover').show();
                $('#message').html('You Lose !!!!');
                $('#restartbtn').show();
                lost = true;
            }
            if (obi.isDead && maul.isDead && luke.isDead && sidious.isDead) {
                $('#gameover').show();
                $('#message').html('You Won !!!!');
                $('#restartbtn').show();
                $('#victory').hide();
                lost = true;
            };
            } else {
                $('#noenemy').show();
            };
            
        };
    });

    $('#restartbtn').on('click', function () {
        start();
    })




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