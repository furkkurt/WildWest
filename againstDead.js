class againstDead extends Phaser.Scene{
  constructor(){
    super("againstDead")
  }
  create(){
    this.sound.stopAll();
    this.sound.play("trainRobbery");
    const map = this.make.tilemap({
      key: "tavern",
      tileWidth: 16,
      tileHeight: 16
    });
    const tileset = map.addTilesetImage("tavernSheet", "tavernSheet");
    collidableLayer = map.createLayer("tables", tileset).setDepth(1.2).setScale(4.375);
    const nonCollidableLayer = map.createLayer("base", tileset).setScale(4.375);
    const tableEdgeLayer = map.createLayer("tableEdge", tileset).setDepth(1.2).setScale(4.375);
    const tableEdgeLayerUpper = map.createLayer("tableEdgeUpper", tileset).setDepth(2.1).setScale(4.375);
    const upperLayer1 = map.createLayer("chairs", tileset).setDepth(1.1).setScale(4.375);
    const upperLayer2 = map.createLayer("other", tileset).setDepth(2.4).setScale(4.375);
    const borderLayer = map.createLayer("walls", tileset).setVisible(false).setScale(4.375);

    this.player = this.physics.add.sprite(8.5 * 70, 4.6 * 70, "player").setScale(1.5).setDepth(2.01);
    this.player.play("playerIdle");
    this.player.body.setSize(this.player.width / 1.5, this.player.height / 2);
    this.player.setImmovable();
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setZoom(2);
    this.time.addEvent({
      delay: 50,
      callback:() =>{
        this.cameras.main.zoom -= .01
      }, repeat: 125
    });
    
    var characters = ["bloodJoe", "blueHat", "redHat", "greenGuy", "blackHat"];
    var npcNum;
    var npcName;
    this.x = 0;
    var pickNpc = () => {
      npcNum = Math.floor(Math.random() * 5);
      npcName = characters[npcNum];
    };
    pickNpc();
    this.textBox = this.physics.add.sprite(600, 425, "quoteBox").setScale(10).setDepth(99).setScrollFactor(0).setInteractive().setVisible(false);
    this.textBox.alpha = .8;
    this.text = this.add.text(325, 350, "", {fontFamily: "litebulb", color: "black", fontSize: "33px"}).setDepth(100).setScrollFactor(0).setInteractive();
    //Card playing guys
    var npcSprite1 = this.physics.add.sprite(8.25 * 70, 7.5 * 70, npcName).setScale(1.5).setDepth(2.51).setInteractive();
    this.time.addEvent({delay: 750,callback:() =>{if (this.x == 0){npcSprite1.scaleY = 1.47;this.x--;npcSprite1.y += 2.8125;}else{npcSprite1.scaleY = 1.5;this.x++;npcSprite1.y -= 2.8125;}}, loop: true});
    pickNpc();
    var npcSprite2 = this.physics.add.sprite(6.25 * 70, 5.75 * 70, npcName).setScale(1.5).setDepth(2.51).setInteractive();
    this.time.addEvent({delay: 750,callback:() =>{if (this.x == 0){npcSprite2.scaleY = 1.47;this.x--;npcSprite2.y += 2.8125;}else{npcSprite2.scaleY = 1.5;this.x++;npcSprite2.y -= 2.8125;}}, loop: true});
    pickNpc();
    var npcSprite3 = this.physics.add.sprite(10.5 * 70, 5.75 * 70, npcName).setScale(1.5).setDepth(2.51).setInteractive();
    npcSprite3.flipX = true;
    this.time.addEvent({delay: 750,callback:() =>{if (this.x == 0){npcSprite2.scaleY = 1.47;this.x--;npcSprite3.y += 2.8125;}else{npcSprite3.scaleY = 1.5;this.x++;npcSprite3.y -= 2.8125;}}, loop: true});
    pickNpc();

 }
}
