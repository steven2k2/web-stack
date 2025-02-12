# Setting Up StandardJS for Linting

## Overview
StandardJS is a simple, opinionated JavaScript linter that enforces consistent code style without requiring configuration.

---

## Installation
To install StandardJS as a dev dependency in your project, run:

```bash
npm install --save-dev standard
```

---

## Running StandardJS

### **Check Code for Linting Issues**
Run StandardJS on your project:

```bash
npx standard
```

Or, if installed globally:
```bash
standard
```

### **Automatically Fix Issues**
To let StandardJS automatically fix minor formatting issues:

```bash
npx standard --fix
```

---

## Configuring StandardJS (Optional)

StandardJS follows a zero-config approach, but you can customize it using a `package.json` entry or a `.eslintrc` file.

### **Add StandardJS to package.json**
```json
"standard": {
  "globals": ["window", "document"],
  "ignore": ["dist/", "node_modules/"]
}
```

### **Use an ESLint Config (If Needed)**
If you need more control, create a `.eslintrc.json` file:
```json
{
  "extends": ["standard"],
  "env": {
    "node": true,
    "browser": true
  }
}
```

---

## 🛠 Integrating StandardJS in a Project

### **Add StandardJS to Your npm Scripts**
Modify `package.json` to add a linting script:

```json
"scripts": {
  "lint": "standard",
  "lint:fix": "standard --fix"
}
```

Now you can run:
```bash
npm run lint   # Check for issues
npm run lint:fix   # Auto-fix issues
```

---

## ✅ Enforcing Linting with Pre-Commit Hooks
To ensure code is linted before committing, install **Husky & lint-staged**:

```bash
npm install --save-dev husky lint-staged
```

Then add to `package.json`:
```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.js": "standard --fix"
}
```

Now, StandardJS will auto-fix issues before every commit!

---

## 🎯 Summary
- ✅ Install StandardJS: `npm install --save-dev standard`
- ✅ Run linting: `npx standard`
- ✅ Auto-fix issues: `npx standard --fix`
- ✅ Integrate into npm scripts for easy use
- ✅ Use Husky & lint-staged for pre-commit linting

---

Now your project is **fully linted with StandardJS!** 🚀

