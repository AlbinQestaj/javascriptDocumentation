## Javascript Data Types

Javascript has 7 primitive types, everything else is known as a reference type or an object.

**Types vs Values** (as in Primitive types and primitive values): "data types" (or simply "types") in JavaScript are abstract categories that define the nature and behavior of values, while "values" are concrete instances of those data types representing actual data that your code operates on.

### **Primitive types:**

* **Number** - used for all numbers, except for *very* big integers.
* **BigInt** - used for arbitrarily large integers.
* **String** - used to store text.
* **Boolean** - `true` and `false` — usually used for conditional logic.
* **Symbol** - used for creating unique identifiers that won't collide.
* **Undefined** - indicating that a variable has not been assigned a value.
* **Null** - indicating a deliberate non-value.

### **Reference Types:**

* **Function** - a special type of object that can be called.
* **Array** -
* **Date** -
* **RegExp** -
* **Error** -

The difference between the two types lies in the way the two types are stored in the memory.

**Primitive types** are stored directly in the call stack: `let num = 45; `//`variable num is assigned the primitive value 45`

**Reference types** however are stored in the memory heap, and the call stack contains only references (memory addresses) to where the data is stored in the memory heap:

```
let obj = {key: 'value'};
the variable obj points at the reference in the call stack, which in turn points at the memory address in the memory heap.
```

It is in this context that primitive types are called primitive (fundamental, basic, simple) and reference types are called "reference types" because they are data types that store references or memory addresses to the actual data, rather than storing the data directly.

---



#### **Deeper dive into primitive types and values:**

* **Immutability**: All primitive types are immutable; that is, they cannot be altered. A primitive itself shouldn't be confused with a variable assigned a primitive value. The variable may be reassigned to a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.
* **Object Wrappers:** Primitives have no methods but still behave as if they do. When properties are accessed on primitives, JavaScript *auto-boxes* the value into a wrapper object and accesses the property on that object instead.

  ```
  let num = 42; // Primitive number
  let numWrapper = new Number(num); // Number object wrapper
  console.log(numWrapper.toFixed(2)); // Using a method on the wrapper

  ```

  It's important to note that while these object wrappers exist in JavaScript, they are not commonly used in everyday programming. JavaScript provides a feature called "autoboxing," which means that when you try to access properties or methods on primitive values, JavaScript temporarily wraps the value with the appropriate object wrapper behind the scenes.

  ```
  let num = 42; // Primitive number
  console.log(num.toFixed(2)); // Using a method on a primitive number
  ```
* **Type Coercion and Type Conversion:** Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to *type coercion* because they both convert values from one data type to another with one key difference — *type coercion* is implicit whereas *type conversion* can be either implicit *or* explicit.

  * *Loose Equality (`==`)*: It compares values after attempting to convert them to a common type. It performs type coercion.
  * Arithmetic Operations (excluding +):

    ```
    "42" * 2;  // 84 (string is coerced to a number)
    ```
  * *String Concatenation: When you use the `+` operator with at least one operand as a string, JavaScript will perform string concatenation, even if other operands are not strings.
    `"Hello, " + 42; // "Hello, 42" (number is coerced to a string)`*
  * *Comparison Operators (`<`, `>`, `<=`, `>=`):* When you use comparison operators with values of different types, JavaScript will attempt to convert them to a common type (usually numbers) and then perform the comparison.

    ```
    "2" < 12; // true (string is coerced to a number)
    ```
  * *Logical Operators (`&&` and `||`): The `&&` and `||` operators return the last evaluated value, not necessarily a Boolean. *

```
	"Hello" || "World"; // "Hello" (string is returned)
```

* **Pass by Value:** When you pass a primitive value as a function argument or assign it to a variable, it's passed by value. This means a copy of the value is made, and changes to the copy do not affect the original value.

**Some more side notes:** *null* **and** **undefined;** JavaScript distinguishes between [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null), which indicates a deliberate non-value (and is only accessible through the `null` keyword), and [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined), which indicates absence of value. There are many ways to obtain `undefined`:

* A [`return`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) statement with no value (`return;`) implicitly returns `undefined`.
* Accessing a nonexistent object property (`obj.iDontExist`) returns `undefined`.
* A variable declaration without initialization (`let x;`) will implicitly initialize the variable to `undefined`.

Conceptually, `undefined` indicates the absence of a  *value* , while `null` indicates the absence of an *object* (which could also make up an excuse for [`typeof null === "object"`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)).` NaN` is the only value in javascriipt that's not equal to itself, it's not equal to anything.

---



#### Deeper dive into reference types:

In JavaScript, reference types, also known as reference data types, are a category of data types that are not stored directly in variables but instead are stored by reference. This means that when you create a variable of a reference type and assign a value to it, you are actually storing a reference to the value's memory location, rather than the value itself. This behavior is different from primitive data types like numbers or strings, which are stored directly in variables:
