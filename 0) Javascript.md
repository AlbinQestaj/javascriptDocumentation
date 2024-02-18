## Javascript overview

Javascript is a **high-level**, **prototype-based object-oriented**, **multi-paradigm**, **interpreted or just-in-time compiled**, **dynamic**, **single-threaded**, **garbage-collected** programming language with **first-class functions** and a non-blocking **event loop concurrency model:**

### **High-level**:

JavaScript is considered a high-level programming language for several reasons:

* Abstraction from Machine-Level Details: High-level languages like JavaScript abstract away many low-level details of computer hardware and memory management. Developers can focus on solving problems and writing code without having to worry about the intricacies of memory allocation, processor registers, or other low-level details.
* Easy to Read and Write: JavaScript is designed to be human-readable and easy to write. Its syntax is relatively simple and resembles natural language in many ways, making it accessible to a wide range of developers, including those who may not have a strong background in computer science.
* Platform Independence: JavaScript is platform-independent, meaning you can write code that runs on various operating systems and web browsers without modification. This portability makes it a high-level language suitable for cross-platform development.
* Built-in Abstractions: JavaScript provides built-in abstractions and data structures like arrays, objects, and functions that simplify common programming tasks. These abstractions make it easier to express complex logic in a concise and understandable manner.

In the other hand, **low-level** languages are programming languages that are closer to the hardware and have minimal abstraction from the computer's architecture. These languages provide a high degree of control over the hardware and memory but often require programmers to deal with intricate details and manual memory management.

### **Prototype-based object-oriented**:

JavaScript is considered prototype-based object-oriented because of its unique approach to implementing object-oriented programming (OOP) concepts. Instead of using classical class-based inheritance like many other languages (e.g., Java, C++, Python), JavaScript relies on prototypes to achieve object inheritance and sharing of properties and methods among objects.

In javascript almost everything is an object except for the primitive values. This is the reason why we can use the methods that are built-in for arrays (for example) in javascript. Basically, we create arrays from an array prototype (blueprint) which is just like a template. This prototype contains all the array methods and the arrays that we create in our code basically just inherit the methods from the blueprint. This is also called prototypal-inheritance.

### **Multi-paradigm**:

In programming, a paradigm is an approach and mindset of structuring code which will direct the coding style and technique. Three of the most well-known paradigms are:

* **Procedural programming:** Procedural programming is a programming paradigm that focuses on writing code as a sequence of procedures or functions, where each procedure represents a specific task or operation. In procedural programming, the program's logic is organized into reusable functions that perform specific actions, and the flow of execution follows a top-down structure, moving from one procedure to another.
* **Object-oriented programming (OOP):** Object-oriented programming (OOP) in JavaScript is a programming paradigm that leverages the language's capabilities for working with objects and prototypes to implement OOP concepts. While JavaScript is often associated with its prototype-based inheritance model, it can still exhibit many characteristics of classical object-oriented programming found in languages like Java or C++.
* **Functional programming (FP):** Functional programming (FP) is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. In functional programming, functions are treated as first-class citizens, which means they can be assigned to variables, passed as arguments to other functions, and returned as values from other functions. FP promotes writing code that is declarative, modular, and easier to reason about.

Javascript supports multi-paradigm programming.

### Just-in-time compiled (JIT):

JavaScript is typically both interpreted and just-in-time (JIT) compiled, depending on the JavaScript engine and the execution context in which it is used. This combination of interpretation and JIT compilation is often referred to as "interpreted and compiled." JavaScript combines interpretation for portability, ease of development, and cross-browser compatibility with JIT compilation for performance optimization.

AST - Asbstract syntax tree

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAy0AAAEjCAYAAAA/he5fAAAAAXNSR0IArs4c6QAAFUB0RVh0bXhmaWxlACUzQ214ZmlsZSUzRSUzQ2RpYWdyYW0lMjBpZCUzRCUyMjZJZ2FCSDl5WThvRk82cFhoTHVpJTIyJTIwbmFtZSUzRCUyMlBhZ2UtMSUyMiUzRSUzQ214R3JhcGhNb2RlbCUyMGR4JTNEJTIyOTQzJTIyJTIwZHklM0QlMjIxMDIwJTIyJTIwZ3JpZCUzRCUyMjElMjIlMjBncmlkU2l6ZSUzRCUyMjEwJTIyJTIwZ3VpZGVzJTNEJTIyMSUyMiUyMHRvb2x0aXBzJTNEJTIyMSUyMiUyMGNvbm5lY3QlM0QlMjIxJTIyJTIwYXJyb3dzJTNEJTIyMSUyMiUyMGZvbGQlM0QlMjIxJTIyJTIwcGFnZSUzRCUyMjElMjIlMjBwYWdlU2NhbGUlM0QlMjIxJTIyJTIwcGFnZVdpZHRoJTNEJTIyODUwJTIyJTIwcGFnZUhlaWdodCUzRCUyMjMyMCUyMiUyMG1hdGglM0QlMjIwJTIyJTIwc2hhZG93JTNEJTIyMCUyMiUzRSUzQ3Jvb3QlM0UlM0NteENlbGwlMjBpZCUzRCUyMjAlMjIlMkYlM0UlM0NteENlbGwlMjBpZCUzRCUyMjElMjIlMjBwYXJlbnQlM0QlMjIwJTIyJTJGJTNFJTNDbXhDZWxsJTIwaWQlM0QlMjIyJTIyJTIwdmFsdWUlM0QlMjJSYXclMjBqYXZhc2NyaXB0JTIwY29kZSUyMiUyMHN0eWxlJTNEJTIycm91bmRlZCUzRDAlM0J3aGl0ZVNwYWNlJTNEd3JhcCUzQmh0bWwlM0QxJTNCJTIyJTIwdmVydGV4JTNEJTIyMSUyMiUyMHBhcmVudCUzRCUyMjElMjIlM0UlM0NteEdlb21ldHJ5JTIweCUzRCUyMjE4JTIyJTIweSUzRCUyMjEwMCUyMiUyMHdpZHRoJTNEJTIyOTIlMjIlMjBoZWlnaHQlM0QlMjI0MCUyMiUyMGFzJTNEJTIyZ2VvbWV0cnklMjIlMkYlM0UlM0MlMkZteENlbGwlM0UlM0NteENlbGwlMjBpZCUzRCUyMjYlMjIlMjB2YWx1ZSUzRCUyMiUyMiUyMHN0eWxlJTNEJTIyc2hhcGUlM0RzaW5nbGVBcnJvdyUzQndoaXRlU3BhY2UlM0R3cmFwJTNCaHRtbCUzRDElM0IlMjIlMjB2ZXJ0ZXglM0QlMjIxJTIyJTIwcGFyZW50JTNEJTIyMSUyMiUzRSUzQ214R2VvbWV0cnklMjB4JTNEJTIyMTEwJTIyJTIweSUzRCUyMjExNSUyMiUyMHdpZHRoJTNEJTIyMjAlMjIlMjBoZWlnaHQlM0QlMjIxMCUyMiUyMGFzJTNEJTIyZ2VvbWV0cnklMjIlMkYlM0UlM0MlMkZteENlbGwlM0UlM0NteENlbGwlMjBpZCUzRCUyMjEwJTIyJTIwdmFsdWUlM0QlMjJKYXZhc2NyaXB0JTIwRW5naW5lJTIyJTIwc3R5bGUlM0QlMjJzd2ltbGFuZSUzQndoaXRlU3BhY2UlM0R3cmFwJTNCaHRtbCUzRDElM0JhbGlnbiUzRGxlZnQlM0IlMjIlMjB2ZXJ0ZXglM0QlMjIxJTIyJTIwcGFyZW50JTNEJTIyMSUyMiUzRSUzQ214R2VvbWV0cnklMjB4JTNEJTIyMTMwJTIyJTIweSUzRCUyMjIwJTIyJTIwd2lkdGglM0QlMjI2OTAlMjIlMjBoZWlnaHQlM0QlMjIyODAlMjIlMjBhcyUzRCUyMmdlb21ldHJ5JTIyJTJGJTNFJTNDJTJGbXhDZWxsJTNFJTNDbXhDZWxsJTIwaWQlM0QlMjI1JTIyJTIwdmFsdWUlM0QlMjJFeGNlY3V0aW9uJTIyJTIwc3R5bGUlM0QlMjJyb3VuZGVkJTNEMCUzQndoaXRlU3BhY2UlM0R3cmFwJTNCaHRtbCUzRDElM0IlMjIlMjB2ZXJ0ZXglM0QlMjIxJTIyJTIwcGFyZW50JTNEJTIyMTAlMjIlM0UlM0NteEdlb21ldHJ5JTIweCUzRCUyMjUyMCUyMiUyMHklM0QlMjI4MCUyMiUyMHdpZHRoJTNEJTIyOTAlMjIlMjBoZWlnaHQlM0QlMjI0MCUyMiUyMGFzJTNEJTIyZ2VvbWV0cnklMjIlMkYlM0UlM0MlMkZteENlbGwlM0UlM0NteENlbGwlMjBpZCUzRCUyMjExJTIyJTIwdmFsdWUlM0QlMjJBU1QlMjIlMjBzdHlsZSUzRCUyMnJvdW5kZWQlM0QwJTNCd2hpdGVTcGFjZSUzRHdyYXAlM0JodG1sJTNEMSUzQiUyMiUyMHZlcnRleCUzRCUyMjElMjIlMjBwYXJlbnQlM0QlMjIxMCUyMiUzRSUzQ214R2VvbWV0cnklMjB4JTNEJTIyMTMwJTIyJTIweSUzRCUyMjgwJTIyJTIwd2lkdGglM0QlMjI2MCUyMiUyMGhlaWdodCUzRCUyMjQwJTIyJTIwYXMlM0QlMjJnZW9tZXRyeSUyMiUyRiUzRSUzQyUyRm14Q2VsbCUzRSUzQ214Q2VsbCUyMGlkJTNEJTIyMTIlMjIlMjB2YWx1ZSUzRCUyMiUyMiUyMHN0eWxlJTNEJTIyc2hhcGUlM0RzaW5nbGVBcnJvdyUzQndoaXRlU3BhY2UlM0R3cmFwJTNCaHRtbCUzRDElM0IlMjIlMjB2ZXJ0ZXglM0QlMjIxJTIyJTIwcGFyZW50JTNEJTIyMTAlMjIlM0UlM0NteEdlb21ldHJ5JTIweCUzRCUyMjE5MCUyMiUyMHklM0QlMjI5NSUyMiUyMHdpZHRoJTNEJTIyMzAlMjIlMjBoZWlnaHQlM0QlMjIxMCUyMiUyMGFzJTNEJTIyZ2VvbWV0cnklMjIlMkYlM0UlM0MlMkZteENlbGwlM0UlM0NteENlbGwlMjBpZCUzRCUyMjglMjIlMjB2YWx1ZSUzRCUyMiUyMiUyMHN0eWxlJTNEJTIyc2hhcGUlM0RzaW5nbGVBcnJvdyUzQndoaXRlU3BhY2UlM0R3cmFwJTNCaHRtbCUzRDElM0Jmb250U3R5bGUlM0QxJTIyJTIwdmVydGV4JTNEJTIyMSUyMiUyMHBhcmVudCUzRCUyMjEwJTIyJTNFJTNDbXhHZW9tZXRyeSUyMHglM0QlMjI0NDAlMjIlMjB5JTNEJTIyOTUlMjIlMjB3aWR0aCUzRCUyMjQwJTIyJTIwaGVpZ2h0JTNEJTIyMTAlMjIlMjBhcyUzRCUyMmdlb21ldHJ5JTIyJTJGJTNFJTNDJTJGbXhDZWxsJTNFJTNDbXhDZWxsJTIwaWQlM0QlMjIxNCUyMiUyMHZhbHVlJTNEJTIyTWFjaGluZSUyMENvZGUlMjIlMjBzdHlsZSUzRCUyMnJvdW5kZWQlM0QwJTNCd2hpdGVTcGFjZSUzRHdyYXAlM0JodG1sJTNEMSUzQiUyMiUyMHZlcnRleCUzRCUyMjElMjIlMjBwYXJlbnQlM0QlMjIxMCUyMiUzRSUzQ214R2VvbWV0cnklMjB4JTNEJTIyMzcwJTIyJTIweSUzRCUyMjgwJTIyJTIwd2lkdGglM0QlMjI3MCUyMiUyMGhlaWdodCUzRCUyMjQwJTIyJTIwYXMlM0QlMjJnZW9tZXRyeSUyMiUyRiUzRSUzQyUyRm14Q2VsbCUzRSUzQ214Q2VsbCUyMGlkJTNEJTIyMTUlMjIlMjB2YWx1ZSUzRCUyMiUyMiUyMHN0eWxlJTNEJTIyc2hhcGUlM0RzaW5nbGVBcnJvdyUzQndoaXRlU3BhY2UlM0R3cmFwJTNCaHRtbCUzRDElM0IlMjIlMjB2ZXJ0ZXglM0QlMjIxJTIyJTIwcGFyZW50JTNEJTIyMTAlMjIlM0UlM0NteEdlb21ldHJ5JTIweCUzRCUyMjM1MCUyMiUyMHklM0QlMjI5NSUyMiUyMHdpZHRoJTNEJTIyMjAlMjIlMjBoZWlnaHQlM0QlMjIxMCUyMiUyMGFzJTNEJTIyZ2VvbWV0cnklMjIlMkYlM0UlM0MlMkZteENlbGwlM0UlM0NteENlbGwlMjBpZCUzRCUyMjclMjIlMjB2YWx1ZSUzRCUyMiUyMiUyMHN0eWxlJTNEJTIyc2hhcGUlM0RzaW5nbGVBcnJvdyUzQndoaXRlU3BhY2UlM0R3cmFwJTNCaHRtbCUzRDElM0IlMjIlMjB2ZXJ0ZXglM0QlMjIxJTIyJTIwcGFyZW50JTNEJTIyMTAlMjIlM0UlM0NteEdlb21ldHJ5JTIweCUzRCUyMjEwMCUyMiUyMHklM0QlMjI5NSUyMiUyMHdpZHRoJTNEJTIyMzAlMjIlMjBoZWlnaHQlM0QlMjIxMCUyMiUyMGFzJTNEJTIyZ2VvbWV0cnklMjIlMkYlM0UlM0MlMkZteENlbGwlM0UlM0NteENlbGwlMjBpZCUzRCUyMjklMjIlMjB2YWx1ZSUzRCUyMlBhcnNpbmclMjIlMjBzdHlsZSUzRCUyMnJvdW5kZWQlM0QwJTNCd2hpdGVTcGFjZSUzRHdyYXAlM0JodG1sJTNEMSUzQiUyMiUyMHZlcnRleCUzRCUyMjElMjIlMjBwYXJlbnQlM0QlMjIxMCUyMiUzRSUzQ214R2VvbWV0cnklMjB4JTNEJTIyMTAlMjIlMjB5JTNEJTIyODAlMjIlMjB3aWR0aCUzRCUyMjkwJTIyJTIwaGVpZ2h0JTNEJTIyNDAlMjIlMjBhcyUzRCUyMmdlb21ldHJ5JTIyJTJGJTNFJTNDJTJGbXhDZWxsJTNFJTNDbXhDZWxsJTIwaWQlM0QlMjIyMSUyMiUyMHZhbHVlJTNEJTIyQ2FsbCUyMFN0YWNrJTIyJTIwc3R5bGUlM0QlMjJzd2ltbGFuZSUzQndoaXRlU3BhY2UlM0R3cmFwJTNCaHRtbCUzRDElM0IlMjIlMjB2ZXJ0ZXglM0QlMjIxJTIyJTIwcGFyZW50JTNEJTIyMTAlMjIlM0UlM0NteEdlb21ldHJ5JTIweCUzRCUyMjQ4MCUyMiUyMHklM0QlMjI0MCUyMiUyMHdpZHRoJTNEJTIyMTcwJTIyJTIwaGVpZ2h0JTNEJTIyMjAwJTIyJTIwYXMlM0QlMjJnZW9tZXRyeSUyMiUyRiUzRSUzQyUyRm14Q2VsbCUzRSUzQ214Q2VsbCUyMGlkJTNEJTIyMjQlMjIlMjB2YWx1ZSUzRCUyMkNvbXBpbGF0aW9uJTIyJTIwc3R5bGUlM0QlMjJzd2ltbGFuZSUzQndoaXRlU3BhY2UlM0R3cmFwJTNCaHRtbCUzRDElM0IlMjIlMjB2ZXJ0ZXglM0QlMjIxJTIyJTIwcGFyZW50JTNEJTIyMTAlMjIlM0UlM0NteEdlb21ldHJ5JTIweCUzRCUyMjIyMCUyMiUyMHklM0QlMjI0MCUyMiUyMHdpZHRoJTNEJTIyMTMwJTIyJTIwaGVpZ2h0JTNEJTIyMTIwJTIyJTIwYXMlM0QlMjJnZW9tZXRyeSUyMiUyRiUzRSUzQyUyRm14Q2VsbCUzRSUzQ214Q2VsbCUyMGlkJTNEJTIyMjclMjIlMjB2YWx1ZSUzRCUyMkNvbXBhbGluZyUyMEFTVCUyMHRvJTIwTWFjaGluZSUyMENvZGUlMjIlMjBzdHlsZSUzRCUyMnJvdW5kZWQlM0QwJTNCd2hpdGVTcGFjZSUzRHdyYXAlM0JodG1sJTNEMSUzQiUyMiUyMHZlcnRleCUzRCUyMjElMjIlMjBwYXJlbnQlM0QlMjIyNCUyMiUzRSUzQ214R2VvbWV0cnklMjB4JTNEJTIyMjAlMjIlMjB5JTNEJTIyNDAlMjIlMjB3aWR0aCUzRCUyMjkwJTIyJTIwaGVpZ2h0JTNEJTIyNTAlMjIlMjBhcyUzRCUyMmdlb21ldHJ5JTIyJTJGJTNFJTNDJTJGbXhDZWxsJTNFJTNDbXhDZWxsJTIwaWQlM0QlMjIyOSUyMiUyMHZhbHVlJTNEJTIyT3B0aW1pc2F0aW9uJTIyJTIwc3R5bGUlM0QlMjJyb3VuZGVkJTNEMCUzQndoaXRlU3BhY2UlM0R3cmFwJTNCaHRtbCUzRDElM0IlMjIlMjB2ZXJ0ZXglM0QlMjIxJTIyJTIwcGFyZW50JTNEJTIyMTAlMjIlM0UlM0NteEdlb21ldHJ5JTIweCUzRCUyMjIyMCUyMiUyMHklM0QlMjIyMDAlMjIlMjB3aWR0aCUzRCUyMjEzMCUyMiUyMGhlaWdodCUzRCUyMjQwJTIyJTIwYXMlM0QlMjJnZW9tZXRyeSUyMiUyRiUzRSUzQyUyRm14Q2VsbCUzRSUzQ214Q2VsbCUyMGlkJTNEJTIyMzElMjIlMjB2YWx1ZSUzRCUyMiUyMiUyMHN0eWxlJTNEJTIyc2hhcGUlM0RzaW5nbGVBcnJvdyUzQndoaXRlU3BhY2UlM0R3cmFwJTNCaHRtbCUzRDElM0Jyb3RhdGlvbiUzRC0xODAlM0IlMjIlMjB2ZXJ0ZXglM0QlMjIxJTIyJTIwcGFyZW50JTNEJTIyMTAlMjIlM0UlM0NteEdlb21ldHJ5JTIweCUzRCUyMjM3MCUyMiUyMHklM0QlMjIyMTUlMjIlMjB3aWR0aCUzRCUyMjkwJTIyJTIwaGVpZ2h0JTNEJTIyMTAlMjIlMjBhcyUzRCUyMmdlb21ldHJ5JTIyJTJGJTNFJTNDJTJGbXhDZWxsJTNFJTNDbXhDZWxsJTIwaWQlM0QlMjIzMiUyMiUyMHZhbHVlJTNEJTIyJTIyJTIwc3R5bGUlM0QlMjJzaGFwZSUzRHNpbmdsZUFycm93JTNCd2hpdGVTcGFjZSUzRHdyYXAlM0JodG1sJTNEMSUzQnJvdGF0aW9uJTNELTkwJTNCJTIyJTIwdmVydGV4JTNEJTIyMSUyMiUyMHBhcmVudCUzRCUyMjEwJTIyJTNFJTNDbXhHZW9tZXRyeSUyMHglM0QlMjIyNjcuNSUyMiUyMHklM0QlMjIxNzcuNSUyMiUyMHdpZHRoJTNEJTIyMzUlMjIlMjBoZWlnaHQlM0QlMjIxMCUyMiUyMGFzJTNEJTIyZ2Vv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" style="cursor:pointer;max-width:100%;" onclick="(function(img){if(img.wnd!=null&&!img.wnd.closed){img.wnd.focus();}else{var r=function(evt){if(evt.data=='ready'&&evt.source==img.wnd){img.wnd.postMessage(decodeURIComponent(img.getAttribute('src')),'*');window.removeEventListener('message',r);}};window.addEventListener('message',r);img.wnd=window.open('https://viewer.diagrams.net/?client=1&page=0&edit=_blank');}})(this);"/>

### Dynamically typed:

JavaScript is dynamically typed because it allows variables to change their data types during runtime. In a dynamically typed language like JavaScript, the data type of a variable is not explicitly declared when the variable is created. Instead, the data type is determined at runtime based on the value assigned to the variable.

### Single-threaded:

JavaScript is single-threaded primarily because it was originally designed to run in web browsers, where it interacts with the Document Object Model (DOM) to manipulate web page elements, handle user interactions, and perform other tasks related to web development.

### Garbage-collected:

JavaScript's garbage collection is a process by which the language automatically manages memory by identifying and reclaiming memory that is no longer in use by a program. This mechanism helps prevent memory leaks and allows developers to focus on writing code without explicitly deallocating memory.

### First-class functions:

First-class functions are a fundamental concept in programming languages, and they refer to functions that can be treated just like any other data type, such as numbers or strings. In languages that support first-class functions, functions can be assigned to variables, passed as arguments to other functions, returned as values from functions, and stored in data structures like arrays or objects. This feature enables powerful and flexible programming paradigms, including functional programming and higher-order functions.

* **Assignment to Variables**
* **Passing as Arguments**
* **Returning from Functions**
* **Storing in Data Structures**

### Event loop concurrency model:

JavaScript's event loop concurrency model is a key part of its asynchronous and non-blocking nature. It allows JavaScript to efficiently manage concurrent operations, such as I/O, without blocking the main execution thread. Understanding the event loop is crucial for writing responsive and performant JavaScript applications.