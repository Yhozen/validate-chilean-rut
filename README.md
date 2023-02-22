# validate-chilean-rut

<p align="center">
<a href="https://github.com/Yhozen/validate-chilean-rut/actions?query=workflow=Tests"><img src="https://github.com/Yhozen/validate-chilean-rut/actions/workflows/tests.yml/badge.svg?event=pull_request" alt="validate-chilean-rut CI status" /></a>
<a href="https://garox.org/" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@Yhozen-4BBAAB.svg" alt="Created by Garox"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/Yhozen/validate-chilean-rut" alt="License"></a>
<a href="https://www.npmjs.com/package/validate-chilean-rut" rel="nofollow"><img src="https://img.shields.io/npm/dw/validate-chilean-rut.svg" alt="npm"></a>
<a href="https://www.codacy.com/gh/Yhozen/validate-chilean-rut/dashboard?utm_content=Yhozen/validate-chilean-rut&utm_campaign=Badge_Grade"> <img   src="https://app.codacy.com/project/badge/Grade/6d5b9852715b44dd8479e5e0ad1e1678"  alt="Codacy Badge"></a>
<a href="https://packagephobia.com/result?p=validate-chilean-rut"><img src="https://badgen.net/packagephobia/install/validate-chilean-rut" alt="installed size"></a>
<a href="https://www.npmjs.com/package/validate-chilean-rut" rel="nofollow"><img src="https://img.shields.io/github/stars/Yhozen/validate-chilean-rut" alt="stars"></a>

</p>

Validate chilean ruts as easy as abc. A zero dependencies, lightweight library that normalized and validates chilean ruts. Written in typescript.

## Getting started

Just install

with npm:

```bash
npm install validate-chilean-rut
```

yarn

```bash
yarn add validate-chilean-rut
```

or in a html environment with unpkg

```jsx
<script crossorigin src="https://unpkg.com/validate-chilean-rut"><script/>
```

## Documentation

### validateRut: (rut: number | string) => boolean

Receives either a number or string rut and returns whether it is a valid rut or not

```ts
import { validateRut } from "validate-chilean-rut";

console.log(validateRut("96.591.760-8")); // true
console.log(validateRut("96591760-8")); // true
console.log(validateRut("965917608")); // true
console.log(validateRut(965917608)); // true
console.log(validateRut("96.591.760-7")); // false
```

### clearRut: (rut: number | string) => string

Receives either a number or string rut and returns a normalized rut (string)

```ts
import { clearRut } from "validate-chilean-rut";

console.log(clearRut("96.591.760-8")); // "965917608"
console.log(clearRut("96591760-8")); // "965917608"
console.log(clearRut(965917608)); // "965917608"
```

### getCheckDigit: (rutWithoutCheckDigit: number | string) => string

Receives rut body (everything but the "- checkDigit") either as a number or string rut and returns the check digit as string

```ts
import { getCheckDigit } from "validate-chilean-rut";

console.log(getCheckDigit("96.591.760")); // "8"
console.log(getCheckDigit(96591760)); // "8"
```

### formatRut: (rut: number | string) => string

Receives either a number or string rut and returns a formatted rut (string) with dots and dash.

```ts
import { formatRut } from "validate-chilean-rut";

console.log(formatRut("96.591.760-8")); // "96.591.760-8"
console.log(formatRut("96591760-8")); // "96.591.760-8"
console.log(formatRut(965917608)); // "96.591.760-8"
```

> If the rut is **not** valid, it will format it **anyway**.

#### **Internal functions (you probably won't use them)**

### splitRut: (cleanRut: string) => { checkDigit: string; inverseRut: string[];}

Receives a normalized rut and returns the checkDigit and the inverse rut body as an string array

### getRutSum: (stringDigitArray: string[]) => number

Receives the inverse rut body (string array) and returns the multiplication sum

### getCheckDigitFromSum: (sum: number) => string

Receives the multiplication sum and returns the check digit
