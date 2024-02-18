## Javascript literals

*Literals* represent values in JavaScript. These are fixed values—not variables—that you *literally* provide in your script:

* Array literals
* Boolean literals
* Numeric literals
* Object literals
* RegExp literals
* String literals

### Array literals:

An array literal is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets (`[]`). When you create an array using an array literal, it is initialized with the specified values as its elements, and its `length` is set to the number of arguments specified.

If you put two commas in a row in an array literal, the array leaves an empty slot for the unspecified element. In the following example, the `length` of the array is four, and `myList[1]` and `myList[3]` are missing. **Only the last comma is ignored.**

```
const myList = ["home", , "school", ,];
```

### Boolean literals:

The Boolean type has two literal values: `true` and `false`.

### Numeric literals:

JavaScript numeric literals include integer literals in different bases as well as floating-point literals in base-10. Note that the language specification requires numeric literals to be unsigned. Nevertheless, code fragments like `-123.4` are fine, being interpreted as a unary `-` operator applied to the numeric literal `123.4`.

Integer and [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) literals can be written in decimal (base 10), hexadecimal (base 16), octal (base 8) and binary (base 2).

### Object literals:

An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`).

### RegExp literals:

A regex literal (which is defined in detail later) is a pattern enclosed between slashes. The following is an example of a regex literal.

```
const re = /ab+c/;
```

### String literals:

A string literal is zero or more characters enclosed in double (`"`) or single (`'`) quotation marks. A string must be delimited by quotation marks of the same type (that is, either both single quotation marks, or both double quotation marks).

* **Template literals:** Template literals are enclosed by the back-tick (```) (grave accent) character instead of double or single quotes.

```
// String interpolation
const name = 'Lev', time = 'today';
`Hello ${name}, how are you ${time}?`
```

* **Tagged templates:** are a compact syntax for specifying a template literal along with a call to a "tag" function for parsing it. A tagged template is just a more succinct and semantic way to invoke a function that processes a string and a set of relevant values. The name of the template tag function precedes the template literal.
  Since tagged template literals are just sugar of function calls, we can write:

  ```
  print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
  ```

### Null and undefined:

JavaScript has both `null` and `undefined` literals. These are two distinct values used to represent the absence of a meaningful value or the absence of a variable or property:

* `null`: is a special value in JavaScript that represents the intentional absence of any object value or the absence of a value that should be there. It is often used when you want to explicitly indicate that a variable or object property has no value or is empty.
* `undefined`: is a primitive value in JavaScript that represents the uninitialized, missing, or undefined value. It is used to indicate that a variable has been declared but has not been assigned a value.
