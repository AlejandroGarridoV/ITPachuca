import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Header } from "../../../../componentes/header/header";
import { Footer } from "../../../../componentes/footer/footer";

@Component({
  selector: 'app-sistemas',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './sistemas.html',
  styleUrls: ['./sistemas.css']
})
export class Sistemas implements AfterViewInit, OnDestroy {

  @ViewChild('matrixCanvas') matrixCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('typewriter', { static: false }) typewriterRef!: ElementRef<HTMLDivElement>;

  private animationId?: number;
  private letters: number[] = [];
  private fontSize = 16;
  private characters = "日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private matrixColor = '#0e89c2ff';
  private resizeListener: () => void;

  constructor() {
    this.resizeListener = this.onResize.bind(this);
  }

  ngAfterViewInit() {
    this.typewriterRef.nativeElement.innerHTML = '';
    this.setupMatrix();
    this.startTyping();
    this.startMiniGame();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener('resize', this.resizeListener);
  }

  private setupMatrix() {
    const canvas = this.matrixCanvas.nativeElement;
    const ctx = canvas.getContext('2d')!;
    this.resizeCanvas();

    const columns = Math.floor(canvas.width / this.fontSize);
    this.letters = new Array(columns).fill(0);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = this.matrixColor;
      ctx.font = `${this.fontSize}px monospace`;

      for (let i = 0; i < this.letters.length; i++) {
        const text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        const x = i * this.fontSize;
        const y = this.letters[i] * this.fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          this.letters[i] = 0;
        }

        this.letters[i]++;
      }

      this.animationId = requestAnimationFrame(draw);
    };

    draw();
  }

  private onResize() {
    this.resizeCanvas();
    const canvas = this.matrixCanvas.nativeElement;
    const columns = Math.floor(canvas.width / this.fontSize);
    this.letters = new Array(columns).fill(0);
  }

  private resizeCanvas() {
    const canvas = this.matrixCanvas.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private startTyping() {
    const message = `¿Te apasiona la tecnología? ¿Sueñas con desarrollar software, construir redes, explorar bases de datos y liderar proyectos de innovación?
¡Ingeniería en Sistemas Computacionales es para ti! 
Forma parte del futuro y transforma el mundo.`;

    const target = this.typewriterRef.nativeElement;
    let index = 0;

    const type = () => {
      if (index < message.length) {
        target.innerHTML += message.charAt(index);
        index++;
        setTimeout(type, 35);
      }
    };

    type();
  }

  private startMiniGame() {
    const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const blockSize = 4; // Tamaño de cada bloque del sprite

    let playerX = 50, playerY = 140;
    let playerDirection = 1;
    const playerSpeed = 1.2;
    let bullets: { x: number, y: number }[] = [];
    let enemies: { x: number, y: number }[] = [];
    let frame = 0;

    const playerSprite = [
      "0011100",
      "0111110",
      "1111111",
      "0011100",
      "0100010"
    ];

    const enemySprite = [
      "0011100",
      "0111110",
      "1111111",
      "1011101",
      "0011100"
    ];

    function drawPlayer() {
      ctx.fillStyle = '#0ff';
      for (let y = 0; y < playerSprite.length; y++) {
        for (let x = 0; x < playerSprite[y].length; x++) {
          if (playerSprite[y][x] === "1") {
            ctx.fillRect(playerX + x * blockSize, playerY + y * blockSize, blockSize, blockSize);
          }
        }
      }
    }

    function drawEnemies() {
      ctx.fillStyle = '#f00';
      enemies.forEach(e => {
        for (let y = 0; y < enemySprite.length; y++) {
          for (let x = 0; x < enemySprite[y].length; x++) {
            if (enemySprite[y][x] === "1") {
              ctx.fillRect(e.x + x * blockSize, e.y + y * blockSize, blockSize, blockSize);
            }
          }
        }
        e.x -= 2;
      });

      enemies = enemies.filter(e => e.x > -20);
    }

    function drawBullets() {
      ctx.fillStyle = '#fff';
      bullets.forEach(b => {
        ctx.fillRect(b.x, b.y, 4, 4);
        b.x += 4;
      });
      bullets = bullets.filter(b => b.x < canvas.width);
    }

    function detectCollisions() {
      bullets.forEach((b, bi) => {
        enemies.forEach((e, ei) => {
          if (b.x < e.x + enemySprite[0].length * blockSize &&
              b.x + 4 > e.x &&
              b.y < e.y + enemySprite.length * blockSize &&
              b.y + 4 > e.y) {
            enemies.splice(ei, 1);
            bullets.splice(bi, 1);
          }
        });
      });
    }

    function drawText() {
      ctx.fillStyle = '#0f0';
      ctx.font = '12px monospace';
    }

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Movimiento automático vertical del jugador
      playerY += playerDirection * playerSpeed;
      if (playerY <= 10 || playerY >= canvas.height - (playerSprite.length * blockSize)) {
        playerDirection *= -1; // Cambia de dirección al llegar a los bordes
      }

      drawPlayer();
      drawBullets();
      drawEnemies();
      detectCollisions();
      drawText();

      if (frame % 100 === 0) {
        const y = Math.random() * (canvas.height - enemySprite.length * blockSize - 20) + 10;
        enemies.push({ x: canvas.width, y });
      }

      frame++;
      requestAnimationFrame(loop);
    }

    setInterval(() => {
      bullets.push({ x: playerX + playerSprite[0].length * blockSize, y: playerY + 6 });
    }, 400);

    loop();
  }
}
