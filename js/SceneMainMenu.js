class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMainMenu" });
  }

  preload() {
    this.load.image("sprBtnPlay", "res/sprBtnPlay.png");
    this.load.image("sprBtnPlayHover", "res/sprBtnPlayHover.png");
    this.load.image("sprBtnPlayDown", "res/sprBtnPlayDown.png");
    this.load.image("sprBtnRestart", "res/sprBtnRestart.png");
    this.load.image("sprBtnRestartHover", "res/sprBtnRestartHover.png");
    this.load.image("sprBtnRestartDown", "res/sprBtnRestartDown.png");

    this.load.audio("sndBtnOver", "res/sndBtnOver.wav");
    this.load.audio("sndBtnDown", "res/sndBtnDown.wav");
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprBtnPlay"
    );
  }
}