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

```js
// String
check.size("hello");                // 5
check.capitalize("hello");         // "Hello"
check.toSlug("My App!");           // "my-app"

// Type checking
check.isArray([1, 2]);             // true
check.isObject({ a: 1 });          // true
check.isNullOrUndefined(null);    // true

// Validation
check.validateEmail("a@b.com");   // true
check.isURL("https://site.com");  // true
check.isJSON('{"x":1}');          // true

// Data lookups
const arr = [{ id: 1 }, { id: 2 }];
check.findRow(arr, { id: 2 });     // { id: 2 }

const obj = { a: { id: 1 }, b: { id: 2 } };
check.findObj(obj, { id: 2 });     // { id: 2 }

// Object/array utils
check.pluck([{ name: "A" }, { name: "B" }], "name"); // ['A', 'B']
check.unique([1, 1, 2]);           // [1, 2]
check.flatten([1, [2, 3]]);        // [1, 2, 3]

// Nested access
const user = { profile: { name: "Alice" } };
check.get(user, "profile.name");   // "Alice"
check.set(user, "profile.age", 30);
// user = { profile: { name: "Alice", age: 30 } }
```

---

## 🛠 Full API Reference

### 📏 Size
- `size(value)`

### 🧠 Type Checks
- `isObject(value)`
- `isArray(value)`
- `isString(value)`
- `isNumber(value)`
- `isBoolean(value)`
- `isFunction(value)`
- `isNullOrUndefined(value)`
- `isEmpty(value)`

### ✅ Validation
- `validateEmail(email)`
- `isInt(value)`
- `isFloat(value)`
- `isPositive(value)`
- `isNegative(value)`
- `isIn(value, list)`
- `isMatch(value, regex)`
- `isDate(value)`
- `isURL(value)`
- `isJSON(value)`

### 🔍 Finders
- `findRow(array, { id })`
- `findObj(object, { id })`

### 🧰 Object/Array Tools
- `hasKey(obj, key)`
- `keys(obj)`
- `values(obj)`
- `pluck(arr, key)`
- `unique(arr)`
- `flatten(arr)`

### ✂️ String Tools
- `capitalize(str)`
- `trim(str)`
- `toSlug(str)`
- `contains(str, substring)`
- `startsWith(str, prefix)`
- `endsWith(str, suffix)`

### ⚙️ Advanced
- `deepClone(obj)`
- `deepEqual(a, b)`
- `get(obj, path)`
- `set(obj, path, value)`
- `omit(obj, keys)`
- `pick(obj, keys)`

---

## 🤓 Who’s This For?

Beginner to intermediate web developers who want a **simple**, **no-install**, **do-it-all** JavaScript toolkit.

---

## 📄 License

MIT — free for personal and commercial use.
