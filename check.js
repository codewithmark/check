class check {
  // ─── Size / Length ───────────────────────────────
  static size(value) {
    if (typeof value === "string" || Array.isArray(value)) return value.length;
    if (typeof value === "number") return value.toString().length;
    if (typeof value === "object" && value !== null) return Object.keys(value).length;
    return 0;
  }

  // ─── Type Checks ───────────────────────────────
  static isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  static isArray(value) {
    return Array.isArray(value);
  }

  static isString(value) {
    return typeof value === 'string';
  }

  static isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }

  static isBoolean(value) {
    return typeof value === 'boolean';
  }

  static isFunction(value) {
    return typeof value === 'function';
  }

  static isNullOrUndefined(value) {
    return value === null || value === undefined;
  }

  static isEmpty(value) {
    if (value == null) return true;
    if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
  }

  // ─── Value Validations ───────────────────────────────
  static validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  static isInt(value) {
    return Number.isInteger(value);
  }

  static isFloat(value) {
    return typeof value === 'number' && !Number.isInteger(value);
  }

  static isPositive(value) {
    return this.isNumber(value) && value > 0;
  }

  static isNegative(value) {
    return this.isNumber(value) && value < 0;
  }

  static isIn(value, list) {
    return Array.isArray(list) ? list.includes(value) : Object.values(list).includes(value);
  }

  static isMatch(value, regex) {
    return regex instanceof RegExp && regex.test(value);
  }

  static isDate(value) {
    return !isNaN(Date.parse(value));
  }

  static isURL(value) {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }

  static isJSON(value) {
    try {
      JSON.parse(value);
      return true;
    } catch {
      return false;
    }
  }

  // ─── Array/Object Utilities ───────────────────────────────
  static findRow(array, matchObj) {
    if (!Array.isArray(array)) return null;
    return array.find(item => item.id === matchObj.id) || null;
  }

  static findObj(obj, matchObj) {
    if (typeof obj !== 'object' || obj === null) return null;
    for (const key in obj) {
      if (obj[key] && obj[key].id === matchObj.id) {
        return obj[key];
      }
    }
    return null;
  }

  static hasKey(obj, key) {
    return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
  }

  static keys(obj) {
    return Object.keys(obj);
  }

  static values(obj) {
    return Object.values(obj);
  }

  static pluck(arr, key) {
    return Array.isArray(arr) ? arr.map(item => item[key]) : [];
  }

  static unique(arr) {
    return [...new Set(arr)];
  }

  static flatten(arr) {
    return arr.flat ? arr.flat(Infinity) : arr.reduce((a, b) => a.concat(Array.isArray(b) ? check.flatten(b) : b), []);
  }

  // ─── String Utilities ───────────────────────────────
  static capitalize(str) {
    return typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : str;
  }

  static trim(str) {
    return typeof str === 'string' ? str.trim() : str;
  }

  static toSlug(str) {
    return typeof str === 'string'
      ? str.toLowerCase().trim().replace(/[\s\W-]+/g, '-')
      : '';
  }

  static contains(str, substring) {
    return typeof str === 'string' && str.includes(substring);
  }

  static startsWith(str, prefix) {
    return typeof str === 'string' && str.startsWith(prefix);
  }

  static endsWith(str, suffix) {
    return typeof str === 'string' && str.endsWith(suffix);
  }

  // ─── Advanced ───────────────────────────────
  static deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  static deepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  static get(obj, path) {
    return path.split('.').reduce((acc, part) => (acc && typeof acc === 'object') ? acc[part] : undefined, obj);
  }

  static set(obj, path, value) {
    const parts = path.split('.');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) current[parts[i]] = {};
      current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = value;
    return obj;
  }

  static omit(obj, keys) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)));
  }

  static pick(obj, keys) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
  }

  static autoCode(n = 8) {
    let text = '';
    const t1 = new Date().getTime();
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' + t1;
    for (let i = 0; i < n; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  static getUserRef() {
    return document.referrer !== '' ? document.referrer : 'direct';
  }

  static isIncluded(fileUrl) {
    return [...document.scripts].some(s => s.src === fileUrl) ||
           [...document.styleSheets].some(s => s.href === fileUrl);
  }

  static getFileExt(fileUrl) {
    return fileUrl.split('.').pop().toLowerCase();
  }

  static includeOnce(fileUrl) {
    if (this.isIncluded(fileUrl)) return;
    const ext = this.getFileExt(fileUrl);
    const head = document.head;

    if (ext === 'js') {
      const script = document.createElement('script');
      script.src = fileUrl;
      script.type = 'text/javascript';
      head.appendChild(script);
    } else if (ext === 'css') {
      const link = document.createElement('link');
      link.href = fileUrl;
      link.rel = 'stylesheet';
      head.appendChild(link);
    }
  }

  static jsonToTable(jsonArray) {
    if (!Array.isArray(jsonArray) || jsonArray.length === 0) return null;

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headers = Object.keys(jsonArray[0]);
    const headRow = document.createElement('tr');
    headers.forEach(key => {
      const th = document.createElement('th');
      th.textContent = key;
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);

    jsonArray.forEach(item => {
      const row = document.createElement('tr');
      headers.forEach(key => {
        const td = document.createElement('td');
        td.textContent = item[key];
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
  }
}
