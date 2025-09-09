import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  imports: [RouterLink]
})
export class Footer {
  currentYear = new Date().getFullYear();

  private readonly localStorageKey = 'visit-count';
  private readonly initialValue = 2612170;

  visitCount = signal<number>(0);

  digits = [
    signal('0'), signal('0'), signal('0'), signal('0'), signal('0'),
    signal('0'), signal('0'), signal('0'), signal('0'), signal('0')
  ];

  flips = Array.from({ length: 10 }, () => signal(false));

  constructor() {
    this.initCounter();
  }

  private initCounter() {
    const stored = localStorage.getItem(this.localStorageKey);
    let current = Number(stored);

    if (!stored || isNaN(current)) {
      // Este valor representa 0002612170 al formatearlo a 10 dígitos
      current = this.initialValue;
      localStorage.setItem(this.localStorageKey, current.toString());
    }

    const updated = current + 1;
    localStorage.setItem(this.localStorageKey, updated.toString());

    this.visitCount.set(updated);
    this.updateDigits(updated);
  }

  private updateDigits(value: number) {
    const padded = value.toString().padStart(10, '0').split('');

    padded.forEach((digit, i) => {
      if (this.digits[i]() !== digit) {
        this.flips[i].set(true);
        this.digits[i].set(digit);
        setTimeout(() => this.flips[i].set(false), 600);
      }
    });
  }
}
