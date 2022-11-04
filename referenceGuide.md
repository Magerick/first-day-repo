## Purpose

The purpose of this document is to provide students with a quick reference guide to various things that we learn during the class.

Note for this document, the notation `{{some thing here}}` is used to indicate places where the example has been made generic for the purposes of explaination, and you should replace it with your own content.

For example, in the following example:

    var {{variable name}} = {{statement indicating content}};

You are meant to replace the first section with the name of your variable, and the second with the actual content of the variable. This is an example of how you might replace that template data with your own work:

    var myVariable = true;

## Table of Contents

[[_TOC_]]

## Contents

### HTML

HTML is the skeleton of the webpage, providing a nested structure of elements that determine the structure of the webpage and how content flows.

#### Format of an HTML Element:

    <{{tag name}} {{attribute name}}="{{value of attribute}}">
        {{any children of the tag}}
    </{{tag name}}>

Example:

    <div class="someClass" id="mydiv">
        <span>Some content</span>
    </div>

#### Important attributes:

* class - attaches one or multiple classes to the HTML element for use in selectors. Ex: `class="class1 class1"`
* id - defines a unique ID for this particular HTML element, that can be used for attaching CSS styles as well as fetching via the DOM API. Ex: `id="myUniqueId"`
* style - allows the placement of inline CSS styles attributes on the HTML element. Ex: `style="background-color: red; color: blue;"`
* data-* - any attribute starting with `data-` is a data attribute and can be accessed or set from the `dataset` property on the element in JS. Ex: `data-description="A description of the content"`

#### Common HTML tags

This list is not exhaustive, but outline some of the more common elements you'll run into. You are encouraged to search out your own.

##### div

The div is a non-semantic tag that performs the simple task of containing other HTML elements. It is a block level element.

    <div>
        {{child content}}
    </div>

##### section

The section is a semantic tag that performs a similar job to the `div` but is more descriptive of what it actually represents. As a semantic tag, it's preferred that you use `section` over `div` when appropriate. It is a block level element.

    <section>
        {{child content}}
    </section>

##### button

The button is a common input for any webpage. It display a system-standard button. The button can contain child content, which displays as the content of the button. It is an inline level element.

**NOTE:** A button, when clicked, will automatically submit any form that it is a child of.

    <button>
        Please <span style="color: red;">Click me!</span>
    </button>

### CSS

CSS is the styling language for the web, providing a powerful and flexible way to change properties of elements.

#### Units and Types

CSS has a number of different types of data it works on. We'll go over those briefly here.

##### Size

CSS uses sizing for a number of things. Font size, width of elements, margin, etc.

The most common types of sizing you'll run into are listed below:

* pixels - This sizing involves a specific defined size on the screen. It is notated with `px`, as in `16px` which would indicate 16 pixels.
* points - This sizing is more abstract in design, and so it is popular among designers especially those working on multiple screen sizes. 1 pixel is equal to 0.75 points when working with the web. It is notated with `pt`, as in `12pt`, which would indicate 12 points (or 16 pixels)
* viewport - These two units are sizes that indicate a percentage of the viewport. They are noted with `vw` for width and `vh` for height, as in `25vw` or `25vh`. So if your page's viewport is 600px wide, `50vw` would be equivalent to `300px`. These are responsive to screen size, so as the screen gets smaller or larger, they automaticlaly update. Because of this, they are common for content that should always take up a specific percentage of the screen.
* percentage - Placing a percentage, like `50%` or `25%` will cause the element to be a percentage of its most immediate parent. So if the parent has width of `500px`, setting a child width to be `50%` would make that child `250%`. Note that some parents will gauge their size based on the size of child content, meaning that percentages can behave in unexpected ways. Percentages can also be used for position, font size, anywhere else a size is normally used.

##### Color

Color in CSS is represented one of several different ways:

* Color constants - These are things like `red`, `blue`, `purple`, etc. There are a limited number of these constants, and each browser determines what color they actually map to independently. It's not recommended to use them except for testing purposes, as they can appear differently across browsers.
* Hex codes - Hex codes always start with a hash `#` followed by either 3 or 6 [hexadecimal numbers](https://byjus.com/maths/hexadecimal-number-system). The code is split into groups. For the 3 character number, each group is 1 character. for the 6 character number, each group is 2 characters. The groups represent the red, green, and blue values of the color. So for instance `#f00` would be pure red. `#ff0000` also represents pure red. Whereas `#ff0` or `#ffff00` would be yellow. Hex codes are the most common form of color in CSS.
* rgb - RGB codes follow this format: `rgb({{red}}, {{green}}, {{blue}})` where red, green, and blue are numbers from 0 to 255. So `rgb(255, 0, 0)` would be red.
* rgbs - RGBA codes are almost identical to rgb codes except they have a fourth parameter, which is the transparency, or `alpha` value. They follow the format `rgba({{red}}, {{green}}, {{blue}}, {{alpha}})`, again where all numbers are from 0-255 (for `alpha`, 0 is fully transparent and 255 is fully opaque, or visible). These are commonly used for semi-transparent backgrounds.

#### CSS Rule Blocks

A CSS rule block is fairly simple, consisting of one or multiple selectors, then a list of CSS styles to apply.

    {{selector}} {
        {{rules}}
    }

    {{selector}}, {{second selector}} {
        {{rules}}
    }

#### CSS Selectors

A CSS selector is the way that we tell the browser which elements to apply the rules to (which elements to "select" for the rules). They can become extremely complicated, so I'm just going to go over a few of the basics here.

##### ID Selector

For elements that have an ID attribute, we can select them using the `#` hash before the ID:

    The HTML:
    <div id="my_id"></div>

    The CSS:
    #my_id {
        {{rules}}
    }

##### Class Selector

For elements that have a class attribute, we can select them using the `.` dot before the class name:

    The HTML:
    <div class="class1"></div>

    The CSS:
    .class1 {
        {{rules}}
    }

##### Element selector

We can choose to apply CSS rules to every single element by putting that element's tag as the selector:

    The HTML:
    <div></div>

    The CSS:
    div {
        {{rules}}
    }

##### Compound selectors

Selectors can be combined in two different ways. The first is nesting. Observe the following HTML:

    <section class="main">
        <div id="main_top">
            <span>This will be red</span>
        </div>
        <span>This will not be red</span>
    </section>

If we want to make the span inside the div red, but not the second span, we can tell our selector to filter further down into the HTML tree, like so:

    .main #main_top span {
        {{rules}}
    }

Separating selectors by spaces tells the CSS processor to run each in turn, slowly filtering down children as it goes. So the first simple selector, `.main`, selects the `section`. The second selector looks at the *children* of that `section` and finds one with the id of `main_top`. The third selector looks at the children of everything matching the second selector and finds only the ones with the `span` tag. Then the rules are applied to whatever matches there.

The second form of compound selector is having multiple different selectors apply to the same group of rules. For example, if we have this HTML:

    <span class="make_me_red"></span>
    <span class="i_am_red_also"></span>
    <span id="red_element"></span>

We can apply the same style to each of these three elements like this:

    .make_me_red, .i_am_red_also, #red_element {
        color: red;
    }

Any time we use a comma in a compound selector, it stops where it is, remembers what it's found so far, then goes back and starts over from the top of the dom, adding another set of elements into the selected list.

#### CSS Rules

A CSS rule is fairly simple, following this format:

    {{attribute}}: {{value}};

The semi-colon at the end is important, it's how we tell the CSS processor that we're done with the rule.

#### Common CSS Attributes

Here are some common CSS attributes you'll likely run into:

* background-color - this attribute takes in a color as its value and sets the background color of the element.
* color - this attribute takes in a color as its value and sets the text color of the element
* width - this attribute takes in a size as its value and sets the width of its element
* height - this attribute takes in a size as its value and sets the height of its element
* font-family - this attribute takes in a list of fonts. It will look left to right down the list and the first one it finds on the user's computer is what it will use as the font of the text for the element
* font-size - this attribute takes in a size as its value and sets the size of text in the element
* font-weight - this attribute takes in a weight as its value (100, 200, 300, 400, 500, 600, 700, 800, 900, bold, normal, semibold, and others) and sets the boldness of the text inside the element

#### Flexbox

Flexbox is an extremely powerful way to manipulate the flow of elements on the page.

The main concept to keep in mind with flexbox is the axis system. Flexbox works with the major axis and the minor axis. Content is rendered along the major axis but can be aligned along the minor axis.

##### Using Flexbox

To use flexbox, you must set `display: flex;` or `display: inline-flex;` on the parent element. The children of that parent element will then be arranged using the flexbox system.

Flexbox properties that have to do with the flow of child elements are placed on the parent element. Flexbox properties that have to do with the sizing of child elements are placed directly on the child element.

##### Flex sizing

Flexbox sizing allows child elements to grow and shrink as space becomes available. When sizing elements, we use the `flex-grow` and `flex-shrink` properties. These properties do not take in a pixel value, or a percent. Rather, they take in a number. That number is used to calculate the ratio of how much space to give or take from each child element.

Example:

Say we have 3 span elements that start out at 100px and have a `flex-grow` of 1. The CSS processor will add up all the numbers from `flex-grow`, which comes to 3. It will then divide the `flex-grow` of each element by this total. In this case each element will have a ratio of 1/3, or roughly 33%. If the parent element is then 500px wide, the total space that the children would normally take up is 300px. That means there is 200px of empty space. Because our elements can grow, the CSS processor attempts to allocate that empty space based on the ratio. In this case that means about 66px of space is allocated to each child, making each child 166px wide.

If one of the children had a 2 for its `flex-grow`, that means the total is 4. Two children will have 1/4 as their ratio and another will have 2/4, or 1/2. In this case, the 200px of empty space will be split up differently, with the first two children getting 50px (1/4 of 200) and the third one getting 100px (1/2 of 200) of new space.

A similar principal holds for `flex-shrink`, but in the reverse, when the parent element doesn't have enough space to hold the children without overflow, the space it needs to remove is allocated among children based on their `flex-shrink` ratio.

##### Flexbox properties

These properties are set on the parent element (The one with `display: flex`);

* flex-direction - this has several values. `row` is the default, and will make the horiontal axis the major axis, making vertical the minor one. `column` reverses this, making the vertical the major axis and horizontal the minor axis. `row-reverse` is the same axis as `row`, but orders child elements starting from the right and going left. `column-reverse` is the same axis as `column` but orders children from bottom to top.
* flex-wrap - if this is set to `wrap`, children will move to the next row/column (depending on direction) instead of overflowing. Note that child elements will shrink before they wrap.
* justify-content - this indicates how child elements should be aligned on the major axis. Common values are `flex-start`, `flex-end`, `center`.
* align-items - this indicates how child elements should be aligned on the minor axis. Common values are `flex-start`, `flex-end`, `center`.

These properties are set in the child elements (the ones contained within the element that has `display: flex`):

* flex-grow - See Flex sizing above, this controls how much the child will grow.
* flex-shrink - See Flex sizing above, this controls hoiw much the child will shrink.
* flex - this is a combination property that is written `flex: {{grow}} {{shrink}} {{basis}}` where basis is the starting width of elements (this is a size).

### JavaScript Basics

JavaScript is the brains of the website, the code that makes it interactable and dynamic. Most websites today have JavaScript as part of their makeup.

#### Statements

Almost anything in JavaScript is a statement. A statement is essentially a section of valid JavaScript code that the JavaScript interpreter can take an action on. Statements can be stacked together like bricks to make more complicated structures.

The simplest statement is a value:

    5;

Note the use of the semi-colon. This is so we can tell the JavaScript interpreter that we are done with the statement. In JavaScript, semi-colons are optional, but they're good to add in until you're more familiar with the language.

A statement can become part of a more complex statement:

    var number = 5;

This statement declares (creates) a variable named `number` and sets it equal to another statement. That second statement is just the value `5`, so it's not really very exciting right now, but this lets us do a lot of things in the future.

#### Variables

A variable is a way to store something that we are going to need or use later in our program. This can be numbers, text, booleans (true/false), and even complex objects such as arrays (lists), objects (complex key value pairs) and functions.

To define a variable, use the following pattern:

    var {{variable name}} = {{statement}};

You can also define a variable with no value:

    var {{variable name}};

In this case the variable starts off with a value of `undefined`.

#### Conditionals

A conditional is used to execute some code only if a specific condition is met. It takes the following form:

    if ({{ condition }}) {
        {{ code that executes if condition is true }}
    } else if ({{ condition 2 }}) {
        {{ code that executes if condition is false and condition 2 is true }}
    } else {
        {{ code that executes if none of the above conditions are true }}
    }

The JavaScript runner will check the first condition. If it's true, it will execute the code inside the block. If not, it moves on to the next condition, and repeats this until it runs out of conditions. The `else` block will run only if all other conditions have turned out to be false.

##### Conditions

A condition takes the following format:

    {{ statement }} {{ comparison operator }} {{ statement }}
##### Comparison Operators

The following are comparison operators:

* == - non-strict equality. Will be true if the two statements are equivalent, even if they are different types
* === - strict equality. Will be true if the two statements are the same type and same value
* != - non-strict non equality. Will be true if the two statements are not equivalent
* !== - strict non equality. Will be true if the two statements are either not the same type or not the same value
* &gt; - greater than. Will be true if the value of statement 1 is considered to be greater than the value of statement 2
* &lt; - less than. Will be true if the value of statement 1 is considered to be less than the value of statement 2
* &gt;= - greater than or equal. Will be true if the value of statement 1 is equal to the value of statement 2, or if it is greater.
* &lt;= - less than or equal. Will be true if the value of statement 1 is equal to the value of statement 2, or if it is less.

##### Compound Comparison Operators

It can be useful to do more complex comparisons. For example maybe I want to run some code if a number is greater 10 and less than 50. Or I want to run some code if a name is "Devon" or if it is "Anna".

There are two operators that can be valuable for this:

* || - the OR operator, `{{ statement }} || {{ statement }}`, this is true if either statement 1 or statement 2 is true
* && - the AND operator, `{{ statement }} && {{ statement }}`, this is true only if both statements are true.

Examples:

    number > 10 && number <> 50
    name === "Devon" || name === "Anna"

##### Truthy comparisons

It is possible to have a much simpler if statement of the format:

    if ({{ statement }}) {
        {{ code to run if statement is truthy }}
    }

What is `truthy`? Well a boolean `true` is by definition truthy. Any other variable that has a value is considered truthy, so a variable set to `null` or `undefined` is not truthy.

So in this example:

    var num = null;
    if (num) {
        console.log("num is not null!");
    }

The `console.log` will not run because `null` is not truthy.
##### Examples

In this example, the code inside the if block will run because num is 25 and 25 is greater than 10 and less than 50

    var num = 25;
    if (num > 10 && num < 50) {
        console.log("Num falls within requirements");
    }

In this example, the code inside the `else if` block will run because name is not "Anna", it is "Devon"

    var name = "Devon";
    if (name === "Anna") {
        console.log("Welcome back " + name + "!");
    } else if (name === "Devon") {
        console.log("Hello " + name);
    }

In this example, the code inside the `else` block will run because none of the other conditions match.

    var age = 15;
    if (age > 25) {
        console.log("You can rent a car");
    } else if (age > 18) {
        console.log("You are an adult");
    } else {
        console.log("You are a child");
    }

#### Objects/Arrays

Objects and Arrays allow us to build more complicated data structures for storing our data. This is useful for taking a complex set of data and passing it around our project without needing to pass dozens of separate variables around.

##### Objects

Objects consist of `key-value pairs`, which are a key mapped to a corresponding value. We can `set` and `get` keys on the object to change and retrive its data.

Creating an object is relatively simple:

    {
        key: {{ statement }},
        key2: {{ statement }}
    }

The object starts with a single open curly brace `{` and ends with a single close curly brace `}`, very similar to how the blocks for loops, conditionals, and functions are defined.

In the example above, we define two key-value pairs. The first has a key of `key` and the second has a key of `key2`. Each key-value pair ends with a comma. Because the value can be a statement, it can be anything that we would normally use a variable for. Here are some examples:

    var obj = {
        element: document.getElementById("element_id"),
        age: 32,
        name: "Bob Smith",
        doSomething: function(a, b) {
            return a + b;
        }
    }

In this example, we create an object with 4 key value pairs. The first sets a key named `element` to a dom element that we fetch using `getElementById`. The second sets a key named `age` to the number 32. The third sets a key named `name` to the string `Bob Smith`. The third sets a key named `doSomething` to a method that adds together two inputs and returns the result.

###### Setting and Getting properties

There are two ways to access `properties` (which is another name for the key-value pairs of an object) of the object. The first is to use `dot notation`.

    var obj = {
        foo: 'bar'
    };

    var value_of_foo = obj.foo;
    obj.foo = "baz";

Note that like variables, we can put properties on the left hand side of an equals sign to set them.

The second method is to use brackets, like with an array:

    var obj = {
        foo: 'bar'
    };

    var value_of_foo = obj["foo"];
    obj["foo"] = "baz";

Note in this case if you're using a string literal it must be in quotes, as opposed to the dot notation where it does not have to be.

##### Arrays

Arrays are indexed lists of data. Like objects, their values can be set to any valid statement, like the following:

    var array = [
        5,
        true,
        "Bob",
        function() { return 5; },
    ];

You'll notice a number of similarities with objects. Like objects, values are separated with a comma. Array definitions start with an open square bracket, `[`, and end with a close square bracket, `]`.

Array values can be accessed by using square brackets after the variable, like objects, but instead of strings, they require numerical keys. The first value of an index starts at `0`, with the second at `1` and so on.

    var array = [
        5,
        true,
        "Bob",
        function() { return 5; },
    ];

    var name = array[2]; // the third element, which is "Bob"

    array[3](); // the fourth element is the method

You can see that we can even call a method that's in an array by using the code above.
#### Functions/Methods

Functions are a tool we can use to encapsulate repeated blocks of code. The general rule of thumb I like to follow is if you're doing something more than twice, you should probably make it into a function.

##### Defining a Function

Defining a function can be done like so:

    function {{ function name }}({{ list of parameters}}) {
        {{ code inside the function }}
    }


A parameter list is a comma separated list of variable names. These will hold the parameters that get passed into the function.

    function addNumbers(number_1, number_2) {
        return number_1 + number_2;
    }

Note that the return statement is optional, and only needed if you want to pass data back from the function once it's done. Return statements take the following format:

    return {{ statement }};

It can also be used to stop execution of the function early, like in the following example:

    function serveDrink(age) {
        if (age < 21) {
            return;
        }

        console.log("Drink served!");
    }

The return statement above does not have a statement after it, which is valid. In this case the special value `undefined` is returned (which is also what happens if the function has no return statement at all).

##### Calling a Function

To utilize the code inside a function, we call it, using the following format:

    {{ function name }}( {{ argument list }} );

Where the parameter list was a list of variable names, the argument list is a list of statements. We can pass in scalar values, variables, other function calls, even other functions!

    someFunction(1234, name_variable, getAge(), getBirthdate);

##### Methods

JavaScript has the concept of methods, which are functions that technically do not have a name, but are assigned to a variable or as a function argument. These are also known as `anonymous functions` since they are nameless.

A method can be declared using the following format:

    function( {{ parameter list}} ) {
        {{ code inside method }}
    }

Note that this is basically the same as a function declaration, just missing the function name.

A method declaration is a valid statement and so it can be used anywhere else a statement is called for. For example, we can assign one to a variable:

    var addNumbers = function(number_1, number_2) {
        return number_1 + number_2;
    }

We can call a method in a similar way to a function. However in this case, since it has no name, we will use the variable we assigned it to instead:

    addNumbers(1, 5);

Note that methods can have return statements just like functions. It is also extremely common to pass in a method as the argument to a function:

    function performOperation(number_1, number_2, callback) {
        return callback(number_1, number_2);
    }

    performOperation(5, 10, function(a, b) {
        return a + b;
    });

Note when we pass a method as an argument to a function, it gets assigned to a parameter. We then call it just like we do normally, by using the variable name (remember parameters are variables) instead of the function name we would normally use.

##### Methods as Object Values

Since methods are statements, we can assign them as the values of objects or as items in arrays:

    var obj = {
        doSomething: function( {{ parameter list }} ) {
            {{ function code }}
        },
    }

    var array = [
        "abcd",
        1234,
        function( {{ parameter list }}) {
            {{ function code }}
        },
    ]

Given the above examples, we can call these methods like so:

    obj.doSomething( {{ argument list }} );
    array[2]( {{ argument list }});

##### this

The concept of `this` can be convoluted. Essentially, `this` is a reference to the object context that the method is being called within. For any top level function, this will be `window`.

    var obj = {
        value: 0,
        addValue: function(a) {
            this.value += a;
        },
    };

    obj.addValue(5);

In the above example, `this` refers to `obj`, since `obj` is the context in which the `addValue` method is called. This can be useful in a number of situations, especially when we're passing callback methods deep into our program.
### Moment

Moment is an extremely popular date/time library that enhances JavaScript's native ability to deal with dates and times. It is no longer supported by its authors, but is still widely used.

Moment uses a fairly standard format for all its input and output. You can find a cheatsheet for that here:

[https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/](https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/)

#### Creating a new Moment object

Assuming you have the Moment library loaded, its as simple as:

    var momentObject = moment();

This creates a moment object pointing at the current millisecond when it was created. To create a moment object for a specific day, you can just pass in that date and the format the date is in:

    var christmas = moment("12/25/22", "MM/DD/YY");

The second parameter is important so Moment doesn't make any assumptions about how the date is formatted.

#### Formatting a Moment object

To get the date as a string in a specific format, you would run the `.format` method, passing in the format. For example:

    var todayObject = moment();
    var dateAsString = todayObject.format("dddd, MM YYYY");

This will print out something like "Sunday, 12 2022". See the formatting cheatsheet above for more formats.

To get the day of the week, for example, you can use:

    var dayOfWeek = momentObject.format("e")

This will return the day as 0-6. To get 1-7 use `E` instead.

### Fetch

Fetch is a common way of requesting external resources from servers for utilization in your website. It is, generally, how most APIs that involve external data are accessed.

The `fetch` method is part of the DOM API provided by the browser. As such, you can use it anywhere in your code. At its simplest form, it takes in a single parameter, that being the URL you want to fetch data from.

    fetch("https://api.github.com/users")

The `fetch` method does not immediately return the data. Instead, it returns a `Promise`, which is JavaScript's way of doing more than one thing at a time. When `fetch` is called, the browser sends off the request, then continues executing code. When the data is ready, the browser will call a callback that you have to set in a special way (more on Promises to be added later).

    fetch("https://api.github.com/users").then(function(result) {
        {{ do something with the result }}
    });

`.then` is a common pattern for Promises. It can be read as `do this thing, THEN when it's done, call this function with whatever the result was`.

The fetch result is also not the actual result data. It is a result object, and you will need to call additional methods to get at the actual data.

    fetch("https://api.github.com/users").then(function(result) {
        var jsonResultPromise = result.json();
    });

Note here that `jsonResultPromise` is *another* promise that we need to wait on. We can do this like so:

    fetch("https://api.github.com/users").then(function(result) {
        var jsonResultPromise = result.json();
        jsonResultPromise.then(function (jsonValue) {
            {{ handle the result here}}
        });
    });

This will work, but it's more commonly done like this:

    fetch({{ url to fetch }}).then(function(result) {
        return result.json();
    }).then(function(jsonValue) {
        {{ handle the result here}}
    });

This is known as a `promise chain`, and it can continue for as long as you need it to. Later on we'll learn a nicer way of writing this code.

#### Fetch Options

To pass in options to fetch, pass them in as the second parameter to the `fetch` method:

    fetch(url, {
        method: 'POST', //GET is the default.
    }).then(function(result) {
        return result.json();
    }).then(function(jsonValue) {
        {{ handle the result here}}
    });

#### Common Fetch Options

* method - the HTTP method to use. GET, POST, PUT, DELETE, PATCH, are some of them
* cache - Indicates if cache should be used. Values include "default", "reload", "no-cache"
* headers - this one is important, this will be an object to send headers along with the request.
* redirect - indicates if 301 or 302 redirects should be automatically followed. Can be "follow", "error", or "manual"
* body - the contents of the POST body, if you're sending a POST request


### Curl and URL Format

Curl is a program that you can use to test out API calls before putting them into your program, to ensure that they work well. It has a lot of options, but the main ones you'll care about are:

    curl -X {{ HTTP method }} -H {{ header, can be repeated or left out }} -d {{ data for POST body }} {{ url to call }}

A simple example:

    curl https://api.github.com/users

This will have no headers and will default to being a GET request. For a list of HTTP Methods and their uses, see [https://doc.oroinc.com/api/http-methods](https://doc.oroinc.com/api/http-methods)

Parameters to a GET request can be passed in the URL like so:

    curl https://mywebsite.com/api?param1=value1&param2=value2

We call these `query parameters`. You must start the query parameters with a question mark, `?`, then each individual parameter is separated with an ampersand: `&`

So the above example gets its parameters using this method:

    param1: value1
    param2: value2

    equals in between parameter name and value
    param1=value1
    param2=value2

    ampersand in between each separate parameter
    param1=value&param2=value2

    parameters are separated from the rest of the url by a question mark
    https://mywebsite.com/api?param1=value1&param2=value2

Parameters to a POST request should be sent in the `request body`, which you can do via the `-d` flag in curl, like so:

    curl testdomain.com/params -X POST -H "Content-Type: application/json" -d '{"key":"value"}'

Note the use of the -X flag to indicate a post request. The -H flag is a header. We're telling the server here that the body is JSON, so it can process it appropriately. Then we send the body with the -d flag as a JSON-encoded string.