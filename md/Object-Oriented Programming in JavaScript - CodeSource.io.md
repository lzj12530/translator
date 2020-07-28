Object-oriented programming is where we use objects to model real-world things to represent our programs while providing a simple way to access functionality.

In [JavaScript](https://codesource.io/javascript-design-patterns/), almost everything is referred to as an object. It is possible to create your own objects to encapsulate related functions and variables to act as containers.

![](https://mdn.mozillademos.org/files/13889/person-diagram.png)

Via MDN

It is paramount to have some familiarity with basic HTML and CSS before bracing yourself for Object-Oriented Programming in JavaScript.

Now, I would like to start you off with the basic object ‘Person’. A person, for example, has some generic data and functionality. A Person, for example, has many characteristics like; address, weight, height, shoe size, passport number, DNA profile, ID number, and many other traits.

For now, we are interested in their name, age, gender and interests. This process of creating a simple model from a complex thing is called abstraction.

_Example_

```
Class: Person
Name[firstName, secondName]
Age
Gender
Bio{‘[Name] is [Age] years old. And they like [Interests]'}
Greeting{‘Hi! I\'m [Name]'.}
```

JavaScript

Copy

From the above class, we can create object instances, a process called instantiation.

```
Object:person1
Name[Robert, Smith]
Age:32
Gender: Male
Interests: music, skiing
Bio{‘Robert Smith is 32 years old. He likes music and skiing.'}
Greeting{‘Hi! I\'m Robert'.}
Object: person2
Name [Diana, Hope]
Age:28
Gender: Female
Interests: boxing, brewing
Bio{‘Diana Hope is 28 years old. She likes boxing and brewing'.}
Greetings:{‘Hi! I\'m Diana'}
```

JavaScript

Copy

We now run a constructor function to create an object instance. In case we want to create a more specific group of people for example, students and teachers, we employ inheritance whereby, we create child classes from parent classes.

The child classes will define their own specialized features while reusing the common functionality to all object types.

_Example_

```
Class: Person
Name [firstName, lastName]
Age
Gender
Interests
Bio{‘[Name] is [Age] years old. They like [Interests].'}
Greeting: {‘Hi! I\'am [Name]'}
Class: Teacher
Name [firstName, lastName]
Age
Gender
Bio{‘[Name] is [Age] years old. They like [interest].'}
Subject
Greeting{‘Hello. My name is [Prefix] [lastName] and I teach [Subject]'}
Class: Student
Name [firstName, lastName]
Age
Gender
Interests
Bio{‘[Name] is [Age] years old. They like [Interests].'}
Greeting{‘Yo! I\'am [firstName]'}
```

JavaScript

Copy

In the example above, teachers and students share common features such as name, gender, and age, so we define these features once.

We define greeting in a separate class because a teacher and a student might have different ways to greet, hence defining greeting features in a separate class with a different namespace.

_e.g_

```
Student:
Greeting {‘Yo! I\'am [firstName]'}
Yo! I'm Sam
Teacher:
Greeting{‘Hello, my name is [Prefix] [lastName] and I teach [Subject]'}
Hello, my name is Mr. Griffin, and I teach Chemistry
```

JavaScript

Copy

It is possible to create object instances from child classes;

_Example_

```
Class: Teacher
Name [firstName, lastName]
Age
Interests
Bio {‘[Name] is [Age] years old. They like [Interests].'}
Subject
Greeting {‘Hello, my name is [Prefix] [lastName], and I teach [Subject].'}

Object: teacher1
Name [David, Griffin]
Age: 31 Gender:Male
Interests: football, cooking
Bio{‘David Griffin' is 31 years old. They like football and cooking.'}
Subject: Math
Greeting{‘Hello my name is Mr. Griffin, and I teach Math.'} Object: teacher2
Name [Melanie, Hall]
Age: 26 Gender: Female
Interests: playing guitar, archery
Bio{‘Melanie Hall is 26 years old. They like playing guitar and archery.'}
Subject: Physics
Greeting{‘Hello my name is Ms. Hall and I teach Physics.'} 
```

JavaScript

Copy

Now let me shift gears to how this OOP theory can be applied to JavaScript. JavaScript uses special functions namely constructor functions, to define and initialize objects and their features.

We create objects using constructors when we are not sure how many objects to create.

I will now explore how to create classes via constructors and creating instances from them in JavaScript. First, we need to create HTML in our example, that done, we add script elements into it.

_Example_

```
Function createNewPerson(name) {
var obj = {};
obj.name= name;
obj.greeting = function(){
alert(‘Hi! I\'m' + obj.name + ‘.');
};
Return obj;
}
```

JavaScript

Copy

Now, we can create a new person by calling this function;

```
var Silva = createNewPerson (‘Silva')
Silva.name
Silva.greeting();
Instead of creating empty objects, make use of constructor functions, they are handy.
Function Person(name) {
this.name = name;
this.greeting = function() {
alert(‘ Hi! I\'m ' + this.name + ‘.')
}
```

JavaScript

Copy

Note that the constructor function is JavaScript’s version of a class. A constructor has all features you expect to see in a function, though it doesn’t return anything.

It only defines properties and methods using this keyword. This means, whenever we create the object instance, the object name property will be equal to the name passed to the constructor called and the `greeting()` method will use the name-value passed to the constructor call. Now we call the constructor to create objects. _Example_

```
var person1 = new Person(‘Robert'); var person2 = new Person(‘Sara');
```

JavaScript

Copy

Now, add the following code to JSConsole;

```
person1.name
person1.greeting()
person2.name
person2.greeting()
```

JavaScript

Copy

The above code creates two new objects stored under a different namespace. Their functionality is packaged in a way it won’t clash with other functionality. This is used to ensure created objects use their own values.

_Example_

```
function person (name) {
this.name = name;
this.greeting = function() {
alert(‘Hi! I\'m' + this.name + ‘.');
};
}
```

JavaScript

Copy

Now, person1 and person2 variables contain objects as follows;

```
{
name: ‘Robert',
greeting: function() {
alert(‘Hi! I\'m' + this.name + ‘.');
}
}

{
name: ‘Sara',
greeting: function() {
alert(‘Hi! I\'m' + this.name + ‘.');
}
}
```

JavaScript

Copy

**Finished Constructor**

Here is a complete constructor for you to`person()` study. It seems a bit complex but it is the same constructor we used before.

_Example_

```
Function Person(first, last, age, gender, interests) {
this.name = {
first: first;
last: last;
};

this.age= age;
this.gender = gender;
this.interests = interests
this.bio = function() {
alert(this.name.first + ‘ ' + this.name.last + ‘is' + this.age + ‘years old. He likes' + this.Interests[0] + ‘and' + this.interests[1] + ‘.' );
};
}
```

JavaScript

Copy

To create an object instance from the above, we use:

```
var person1 = new Person(‘Robert', ‘Smith', 32, ‘male' [‘music','skiing']) ;
```

JavaScript

Copy

Now access the properties and methods;

```
Person1[‘Age']
Person1.interests
Person1.bio()
```

JavaScript

Copy

### **Other ways to create object instances**

Apart from declaring an object literal and using constructor function, there are other ways of creating object instances.

### **The `object()` constructor**

Use a `object()`constructor to create a new object as follows;

```
var Person1 = new Object();
```

JavaScript

Copy

The above object constructor stores empty objects in Person1 variable, then add objects using dot or bracket notations. For example;

```
Person1.name='Christo';
Person1[Age] = 38;
Person1.greeting = function() {
Alert(‘Hi! I\'m' + this.name + ‘.')
};
```

JavaScript

Copy

Also, pass an object literal to the `object()` constructor as a parameter to pre-fill it with properties and methods.

```
var Person1 = new Object({
name: ‘Christo';
age: 38;
greeting: function()
alert(‘Hi! I\'m' + this.name + ‘.');
}
});
```

JavaScript

Copy

### The `Create()`  method

This is a built-in method in JavaScript where you can create new objects based on an existing object. Its only limitation is, it cannot be supported by old browsers.

```
var Person2 = object.Create(Person1);
```

JavaScript

Copy

Now create Person2 using Person1.

```
person2.name;
person2.greeting()
```

JavaScript

Copy

### **conclusion**

Up until now, we have explored JavaScript object-oriented theory in-depth, you now have a clue of what you can achieve with OOPJS. I will only direct you to explore more on   [MDN](https://www.developer.mozilla.org)

##### Share Article: