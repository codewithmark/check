# 🧪 check – JavaScript Utility Class for Beginners

`check` is a lightweight JavaScript utility class packed with helpful methods for web developers. Easily validate data, check types, work with objects/arrays, and manipulate strings.

No dependencies. Works in browser and Node.js.

---

## 📦 Installation

Just copy `check.js` into your project. Or use it inline with a `<script>` tag:

```html
<script src="check.js"></script>
```

---

## ✨ Features

✅ Size check for strings, arrays, objects, and numbers  
✅ Email, URL, and JSON validation  
✅ Type checks (isArray, isObject, isString...)  
✅ Data finders (findRow, findObj)  
✅ Object/array tools (pluck, unique, flatten...)  
✅ String tools (capitalize, slug, trim...)  
✅ Deep clone, nested get/set, deep equality

---

## 📘 Usage

## 🔍 Function Examples

### 📏 Size
```js
check.size("hello");               // 5
check.size([1, 2, 3]);             // 3
check.size({ a: 1, b: 2 });        // 2
check.size(12345);                 // 5
```

---

### 🧠 Type Checks
```js
check.isObject({ a: 1 });          // true
check.isArray([1, 2]);             // true
check.isString("text");            // true
check.isNumber(123);               // true
check.isBoolean(false);            // true
check.isFunction(() => {});        // true
check.isNullOrUndefined(null);     // true
check.isNullOrUndefined(undefined); // true
check.isEmpty([]);                 // true
check.isEmpty({});                 // true
```

---

### ✅ Validation
```js
check.validateEmail("a@b.com");             // true
check.isInt(42);                            // true
check.isFloat(3.14);                        // true
check.isPositive(5);                        // true
check.isNegative(-1);                       // true
check.isIn("b", ["a", "b", "c"]);           // true
check.isIn("z", { x: "y", z: "w" });        // true
check.isMatch("abc123", /^[a-z]+\d+$/);     // true
check.isDate("2024-01-01");                 // true
check.isURL("https://site.com");            // true
check.isJSON('{"a":1}');                    // true
```

---

### 🔍 Finders
```js
const arr = [{ id: 1, name: "A" }, { id: 2, name: "B" }];
check.findRow(arr, { id: 2 });              // { id: 2, name: "B" }

const obj = { x: { id: 1 }, y: { id: 2 } };
check.findObj(obj, { id: 1 });              // { id: 1 }
```

---

### 🧰 Object/Array Tools
```js
check.hasKey({ a: 1 }, "a");                // true
check.keys({ a: 1, b: 2 });                 // ['a', 'b']
check.values({ a: 1, b: 2 });               // [1, 2]

const users = [{ name: "A" }, { name: "B" }];
check.pluck(users, "name");                 // ['A', 'B']

check.unique([1, 1, 2, 3]);                 // [1, 2, 3]
check.flatten([1, [2, 3], [4]]);            // [1, 2, 3, 4]
```

---

### ✂️ String Tools
```js
check.capitalize("hello");                 // "Hello"
check.trim("  space  ");                   // "space"
check.toSlug("My App Rocks!");             // "my-app-rocks"
check.contains("hello world", "world");    // true
check.startsWith("file.txt", "file");      // true
check.endsWith("image.png", ".png");       // true
```

---

### ⚙️ Advanced
```js
const obj = { a: 1 };
const clone = check.deepClone(obj);
clone.a = 2;
console.log(obj.a);                        // 1 (original unchanged)

check.deepEqual({ x: 1 }, { x: 1 });       // true
check.deepEqual([1, 2], [2, 1]);           // false

const nested = { user: { name: "Alice" } };
check.get(nested, "user.name");            // "Alice"
check.set(nested, "user.age", 30);
// nested = { user: { name: "Alice", age: 30 } }

check.omit({ a: 1, b: 2 }, ["a"]);         // { b: 2 }
check.pick({ a: 1, b: 2 }, ["b"]);         // { b: 2 }
```


## 🤓 Who’s This For?

Beginner to intermediate web developers who want a **simple**, **no-install**, **do-it-all** JavaScript toolkit.

---

## 📄 License

MIT — free for personal and commercial use.
