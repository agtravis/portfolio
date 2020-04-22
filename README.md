# George Travis Portfolio

Click [here](https://agtravis.github.io/portfolio/) to see this page in action!

The purpose of this page is to bring the personality part of the tripod of digital resources utilized in attempting to secure an interview, the other two parts being GitHub (technical) and a single page résumé (standard). (For a user's convenience, those two parts of the tripod are linked in the portfolio page, as well as in the footer, and the contact page).

However, it is more than just that. Listed below are some cool things utilized in the creation and operation of my portfolio:

## React

This page was written using the React front-end library. While I am just as comfortable writing class components, I have written this using functional components in order to implement the Context API, for no other purpose than demonstrating the flow.

If I were to write this in a class, I could either put my projects directly inside the constructor in the App class component, or I could keep it somewhere else, and use `this.setState` to populate it. Or alternatively, I could also keep them in a database, and make an API request to set the state. Then I would use prop-drilling to get the information to where I need it.

However, since it is dealer's choice and I am the dealer, I have opted to `useContext`. For my purposes, it is fairly redundant, I have a small site with a simple structure, and a mix of logic and state-full class components and simple presentational functional components would make more sense, However for a larger site with lots of depth and plenty of components, context would be a neater way to keep things organized.

In my App component, I wrap my `Router` and all sub-components (that's everything below App) in a `Provider`, and pass it the context I wish to use. Now, any component further down the heirarchy can pull in that context also, without the need to pass `props` down and down again.

The most interesting component is `ProjectList`. This is where my portfolio is rendered, and indeed where the context API is primarily used. All of the functions contained within this component specifically pertain to the appearance and operation of the custom 'buttons' and their stying and event interactions. I opted for this approach as a way of keeping my portfolio page clean, and also implementing a cool feature. There is a lot going on in the code because it is not an on/off button. When clicked, the button itself reveals more information about the project, and provides links to the actual project and repository as well. When the mouse leaves the container div, the button resets. All this logic is relevent to nothing outside of this component, so here it lives.

The Context itself contains all my projects. However, in order to display only limited projects, I have a property I can hard code to set the position of the projects, an integer, and if the integer is '0' it means I don't want to display it, but I want to keep that project in the array for maybe another future purpose. As I add projects, I can keep them in chronological order, and adjust the position property.

In the return of this component, first I filter out the '0' position rated projects, then I sort the projects that remain, and then I map them into a sub-component that will build each one based on the props that I pass it. Here's how that looks:

```js
<div id="portfolio-contents">
  {portfolio
    .filter((project) => project.position > 0)
    .sort((a, b) => a.position - b.position)
    .map((project, index) => (
      <Project
        key={index}
        id={index}
        title={project.title}
        href={project.href}
        github={project.github}
        description={project.description}
        screenshot={project.screenshot}
        toggleTransparent={toggleTransparent}
        toggleOpaqueLeave={toggleOpaqueLeave}
        toggleMousedown={toggleMousedown}
        toggleMouseup={toggleMouseup}
      />
    ))}
</div>
```

The receiving component matches up the props, for example:

```js
function Project(props) {
  return (
    <div className="portfolio-slot" id={`portfolio-slot${props.id}`}>
      // some code ...
      <img
        className="portfolio-img pointer"
        data-lazy={props.screenshot}
        alt={props.title}
        id={`portfolio-image${props.id}`}
        src={props.screenshot}
        onClick={() => props.toggleTransparent(`${props.id}`)}
        onMouseUp={() => props.toggleMouseup(`${props.id}`)}
      />
      // some code ...
    </div>
  );
}
```

I also use `useContext` for a paragraph of HTML I want to reuse in different components. This has its own context since it is a different type of information than the other context data.

## Responsive

My site is a mobile first design, and responds to view screen size in multiple ways. The main way is my custom NavBar relocation done by measuring the screen width and then hiding or displaying certain elements. Also I have other various responsive features such as the amount of columns that display in my portfolio page.

## Contact Page

The user has many ways to contact me from looking at the page, but by far the simplest is to use my very simple HTML contact form. This uses `EmailJS` to send me an email when a user fills this form out. I have applied my own JavaScript validation on top of the standard that HTML:5 provides, and this includes highlighting incomplete or incorrect fields and applying focus with the cursor in those instances also.

It is also made very clear how to contact me in other ways if preferred, from email address visibility to links to a version-controlled résumé.
