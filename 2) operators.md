## Javascript operators

Operators in JavaScript are special symbols or keywords used to perform operations on values and variables. They are a fundamental part of the language and enable you to manipulate data, make comparisons, perform arithmetic calculations, and more. 

Binary operators and unary operators are two categories of operators in programming languages, including JavaScript, that operate on one or two operands (values or variables). Unary operators operate on a single operand while Binary operators operate on two operands. Also javascript has only one ternary (conditional) operator that operates on three operands.

JavaScript operators can be categorized into several types:

* Assignment operators
* Comparison operators
* Arithmetic operators
* Bitwise operators
* Logical operators
* BigInt operators
* String operators
* Conditional (ternary) operators
* Comma operator
* Unary operator
* Relational operators


### Assignment operators:

An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal (`=`), which assigns the value of its right operand to its left operand. That is, `x = f()` is an assignment expression that assigns the value of `f()` to `x`.

There are also compound assignment operators that are shorthand for the operations listed in the following table:


| Name                             | Shorthand operator | Meaning            |
| :------------------------------- | :----------------- | :----------------- |
| Assignment                       | `x = f()`        | `x = f()`        |
| Addition Assignment             | `x += f()`       | `x = x + f()`    |
| Substraction Assignment         | `x -= f()`       | `x = x - f()`    |
| Multiplication Assignment       | `x *= f()`       | `x = x * f()`    |
| Division Assignment             | `x /= f()`       | `x = x / f()`    |
| Reminder Assignment             | `x %= f()`       | `x = x % f()`    |
| Exponentiation Assignment       | `x **= f()`      | `x = x ** f()`   |
| Left Shift Assignment           | `x <<= f()`      | `x = x << f()`   |
| Right Shift Assignment          | `x >>= f()`      | `x = x >> f()`   |
| Unsigned right shift Assignment | `x >>>= f()`     | `x = x >>> f()`  |
| Bitwise AND Assignment          | `x &= f()`       | `x = x & f()`    |
| Bitwise XOR Assignment          | `x ^= f()`       | `x = x ^ f()`    |
| Bitwise OR Assignment           | `x \|= f()`       | `x = x \| f()`    |
| Logical AND Assignment          | `x &&= f()`      | `x && (x = f())` |
| Logical OR Assignment           | `x \|\|= f()`      | `x \|\| (x = f())` |
| Nullish coalescing Assignment   | `x ??= f()`      | `x ?? (x = f())` |


### Comaprison operators:

A comparison operator compares its operands and returns a logical value based on whether the comparison is true. The operands can be numerical, string, logical, or [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects) values. Strings are compared based on standard lexicographical ordering, using Unicode values. In most cases, if the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison. This behavior generally results in comparing the operands numerically. The sole exceptions to type conversion within comparisons involve the `===` and `!==` operators, which perform strict equality and inequality comparisons. These operators do not attempt to convert the operands to compatible types before checking equality. The following table describes the comparison operators in terms of this sample code:

```
const var1 = 3;
const var2 = 4;
```


| Operator                       | Description                                                                                                                                                                                            | Examples returning true              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| Equal (`==`)                 | Returns `true` if the operands are equal.                                                                                                                                                            | `3 == var1``"3" == var1``3 == '3'` |
| Not equal (`!=`)             | Returns `true` if the operands are not equal.                                                                                                                                                        | `var1 != 4var2 != "3"`             |
| Strict equal (`===`)         | Returns `true` if the operands are equal and of the same type. See also [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) and sameness in JS. | `3 === var1`                       |
| Strict not equal (`!==`)     | Returns `true` if the operands are of the same type but not equal, or are of different type.                                                                                                         | `var1 !== "3"3 !== '3'`            |
| Greater than (`>`)          | Returns `true` if the left operand is greater than the right operand.                                                                                                                                | `var2 > var1"12" > 2`              |
| Greater than or equal (`>=`) | Returns `true` if the left operand is greater than or equal to the right operand.                                                                                                                    | `var2 >= var1var1 >= 3`            |
| Less than(`<`)               | Returns `true` if the left operand is less than the right operand.                                                                                                                                   | `var1 < var2"2" < 12`              |
| Less than or equal(`<=`)     | Returns `true` if the left operand is less than or equal to the right operand.                                                                                                                       | `var1 <= var2var2 <= 5`            |


### Arithmetic operators:

An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value. The standard arithmetic operators are addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`). In addition to the standard arithmetic operations (`+`, `-`, `*`, `/`), JavaScript provides the arithmetic operators listed in the following table:

```
let x = 3;
```

| Operator                          | Description                                                                                                                                                                                                                      | Example                                                                                           |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Reminder (`%`)                  | Binary operator. Returns the integer remainder of dividing the two operands.                                                                                                                                                     | 12 % 5 returns 2.                                                                                 |
| Increment (`++`)                | Unary operator. Adds one to its operand. If used as a prefix operator (`++x`), returns the value of its operand after adding one; if used as a postfix operator (`x++`), returns the value of its operand before adding one. | `++x` sets `x` to 4 and returns 4, whereas `x++` returns 3 and, only then, sets `x` to 4. |
| Decrement (`--`)                | Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator.                                                                                                                | `--x` sets `x` to 2 and returns 2, whereas `x--` returns 3 and, only then, sets `x` to 2. |
| Unary negation (`-`)            | Unary operator. Returns the negation of its operand.                                                                                                                                                                             | `-x` returns -3.                                                                                |
| Unary plus (`+`)                | Unary operator. Attempts to convert operand to a number if it is not already.                                                                                                                                                   | `+"3"` returns `3`.` +true` returns `1`.                                                  |
| Exponentiation operator (`**`) | Calculates the `base` to the `exponent` power, that is, `base^exponent`                                                                                                                                                    | `2 ** 3` returns `8`.`10 ** -1` returns `0.1`.                                            |


### Bitwise operators:

A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.


| Operator                     | Usage       | Description                                                                                                                                                             |
| ---------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bitwise AND                  | `a & b`   | Returns a one in each bit position for which the corresponding bits of both operands are ones.                                                                          |
| Bitwise OR                   | `a \| b`   | Returns a zero in each bit position for which the corresponding bits of both operands are zeros.                                                                        |
| Bitwise XOR                  | `a ^ b`   | Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.] |
| Bitwise NOT                  | `~ a`     | Inverts the bits of its operand.                                                                                                                                        |
| Left Shift                   | `a << b`  | Shifts `a` in binary representation `b` bits to the left, shifting in zeros from the right.                                                                         |
| Sign-propagating right shift | `a >> b`  | Shifts `a` in binary representation `b` bits to the right, discarding bits shifted off.                                                                             |
| Zero-fill right shift        | `a >>> b` | Shifts `a` in binary representation `b` bits to the right, discarding bits shifted off, and shifting in zeros from the left.                                        |


### Logical operators:

Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value. However, the `&&` and `||` operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value. The logical operators are described in the following table.

| Operator             | Usage              | Description                                                                                                                                                                                                       |
| -------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logical AND (`&&`) | `expr1 && expr2` | Returns `expr1` if it can be converted to `false`; otherwise, returns `expr2`. Thus, when used with Boolean values, `&&` returns `true` if both operands are true; otherwise, returns `false`.        |
| Logical OR (`\|\|`) | `expr1 \|\| expr2` | Returns `expr1` if it can be converted to `true`; otherwise, returns `expr2`. Thus, when used with Boolean values, `\|\|` returns `true` if either operand is true; if both are false, returns `false`. |
| Logical NOT (`!`) | `!expr`          | Returns `false` if its single operand that can be converted to `true`; otherwise, returns `true`.                                                                                                           |

**Short-circuit evaluation**: As logical expressions are evaluated left to right, they are tested for possible "short-circuit" evaluation using the following rules:

* `false && anything` is short-circuit evaluated to false.
* `true || anything` is short-circuit evaluated to true.


### BigInt operators:

* Most operators that can be used between numbers can be used between [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) values as well.
* BigInts and numbers are not mutually replaceable — you cannot mix them in calculations.
* We can compare BigInts with numbers.

### String operators:

In addition to the comparison operators, which can be used on string values, the concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings.

```
console.log("my " + "string"); // console logs the string "my string".
```


### Conditional (ternary) operator:

The conditional operator is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition. The syntax is:

```
condition ? val1 : val2
```

If `condition` is true, the operator has the value of `val1`. Otherwise it has the value of `val2`. You can use the conditional operator anywhere you would use a standard operator. For example,

```
const status = age >= 18 ? "adult" : "minor";
```

This statement assigns the value "adult" to the variable `status` if `age` is eighteen or more. Otherwise, it assigns the value "minor" to `status`.

### Comma operator:

The comma operator (`,`) evaluates both of its operands and returns the value of the last operand. This operator is primarily used inside a `for` loop, to allow multiple variables to be updated each time through the loop. It is regarded bad style to use it elsewhere, when it is not necessary. Often two separate statements can and should be used instead.

For example, if `a` is a 2-dimensional array with 10 elements on a side, the following code uses the comma operator to update two variables at once. The code prints the values of the diagonal elements in the array:

```
const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  //                              ^
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}
```


### Unary operators:

A unary operation is an operation with only one operand.

* **delete**: The `delete `operator deletes an object's property.
* **typeof**: he `typeof operator` returns a string indicating the type of the unevaluated operand. `operand` is the string, variable, keyword, or object for which the type is to be returned. The parentheses are optional.
* **void**: The `void operator` specifies an expression to be evaluated without returning a value. `expression` is a JavaScript expression to evaluate. The parentheses surrounding the expression are optional, but it is good style to use them to avoid precedence issues.

### Relational operators:

A relational operator compares its operands and returns a Boolean value based on whether the comparison is true.

* **in**: The `in` operator returns `true` if the specified property is in the specified object. The syntax is:

  ```
  propNameOrNumber in objectName
  ```
* **instaceof**: The `instaceof` operator returns `true` if the specified object is of the specified object type. The syntax is:

  ```
  objectName instanceof objectType
  ```

### Basic expressions:

All operators eventually operate on one or more basic expressions. These basic expressions include identifiers and literals, but there are a few other kinds as well.

* **this** keyword: Use the `this` keyword to refer to the current object. In general, `this` refers to the calling object in a method.
* **Grouping operator**: The grouping operator `( )` controls the precedence of evaluation in expressions. For example, you can override multiplication and division first, then addition and subtraction to evaluate addition first.
* **new**: You can use the `new `operator to create an instance of a user-defined object type or of one of the built-in object types. Use `new` as follows:

  ```
  const objectName = new ObjectType(param1, param2, /* …, */ paramN);
  ```
* **super**: The `super` keyword is used to call functions on an object's parent. It is useful with classes to call the parent constructor.
