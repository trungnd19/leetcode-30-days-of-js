// obj sẽ gồm các các object có type
// { value: value, timer: time limit}

// setTimeout sẽ return timeoutId, dùng id này để clearTimeout
class TimeLimitedCache {
  obj;
  constructor() {
    this.obj = {};
  }

  set(key: number, value: number, duration: number): boolean {
    if (this.obj[key] && this.obj[key].timer) {
      // Nếu đã tồn tại => overwrite
      clearTimeout(this.obj[key].timer);
      this.obj[key] = {
        value: value,
        timer: setTimeout(() => {
          delete this.obj[key];
        }, duration),
      };
      return true;
    } else {
      this.obj[key] = {
        value: value,
        timer: setTimeout(() => {
          delete this.obj[key];
        }, duration),
      };
      return false;
    }
  }

  get(key: number): number {
    if (this.obj[key] && this.obj[key].timer) {
      return this.obj[key].value;
    }
    return -1;
  }

  count(): number {
    let count = 0;
    for (const key in this.obj) {
      if (this.obj[key].timer) {
        count++;
      }
    }
    return count;
  }
}
