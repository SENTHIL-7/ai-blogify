export interface Blog {
  id: number;
  title: string;
  author: string;
  date: Date;
  imageUrl: string;
  excerpt: string;
  content: string;
}

export const BLOGS: Blog[] = [
  {
    id: 1,
    title: 'The Future of Web Development',
    author: 'John Doe',
    date: new Date('2024-10-10'),
    imageUrl: 'https://images.unsplash.com/photo-1613980790147-f4f449df0dd9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    excerpt:
      'Explore the trends shaping the future of web development, including new technologies, frameworks, and best practices...',
      content: `
      <h2>Introduction</h2>
      <p>Web development is evolving rapidly. In this article, we explore the trends shaping its future.</p>
      <h3>Trend 1: WebAssembly</h3>
      <p>WebAssembly allows developers to run high-performance code in the browser.</p>
      <h3>Trend 2: Progressive Web Apps</h3>
      <p>PWA technology is making websites more app-like with offline functionality and better performance.</p>
      <p>Learn more about web development at <a href="https://developer.mozilla.org">MDN Web Docs</a>.</p>
    `
  },
  {
    id: 2,
    title: 'Building Responsive Websites with Angular',
    author: 'Jane Smith',
    date: new Date('2024-09-20'),
    imageUrl: 'https://blog.dewstudio.io/wp-content/uploads/2024/04/build-responsive-apps-in-minutes-with-angular-low-code-platform-1-1024x512.png',
    excerpt:
      'Learn how to build responsive and mobile-friendly websites using the latest features in Angular...',
      content: `
      <h2>Why Responsiveness Matters</h2>
      <p>Responsive design ensures that your website looks good on all devices, from mobile to desktop.</p>
      <h3>Using Flexbox and CSS Grid</h3>
      <p>Flexbox and CSS Grid are powerful tools for creating responsive layouts in Angular apps.</p>
    `

  },
  {
    id: 3,
    title: 'JavaScript Performance Optimization Tips',
    author: 'Alex Johnson',
    date: new Date('2024-08-05'),
    imageUrl: 'https://cdn.buttercms.com/qziIu1j2RhmxNrfSHOk0',
    excerpt:
      'Improve your website’s performance by following these essential JavaScript optimization techniques...',
      content: `
      <h2>Introduction</h2>
      <p>JavaScript performance is critical to delivering a fast and smooth user experience. Here are some tips to optimize your JavaScript code.</p>
      
      <h3>1. Minimize DOM Access</h3>
      <p>Accessing and manipulating the DOM can be expensive. Reduce the number of DOM manipulations by caching references to DOM elements and minimizing reflows.</p>
      
      <h3>2. Use Debouncing and Throttling</h3>
      <p>When handling events like scrolling or resizing, use debouncing or throttling techniques to limit the number of function executions. This reduces the load on the browser.</p>
      
      <h3>3. Avoid Memory Leaks</h3>
      <p>Be careful with event listeners and closures that might hold references to unused objects, leading to memory leaks. Clean up listeners when they're no longer needed.</p>
      
      <h3>4. Lazy Loading</h3>
      <p>Lazy load images, scripts, and other resources to improve initial page load times. This way, assets are only loaded when needed.</p>
      
      <h3>5. Use Web Workers</h3>
      <p>For CPU-intensive tasks, use Web Workers to offload the processing to a background thread, ensuring the UI remains responsive.</p>
      
      <h3>6. Code Splitting</h3>
      <p>Split your JavaScript code into smaller chunks using techniques like dynamic imports. This allows the browser to load only what’s necessary for the current page.</p>
      
      <p>By following these tips, you can significantly improve the performance of your JavaScript-heavy applications.</p>
    `
  },
  {
    id: 4,
    title: 'A Beginner’s Guide to TypeScript',
    author: 'David Wilson',
    date: new Date('2024-02-20'),
    imageUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*pa7myCN0_w96c59ldW8EKw.png',
    excerpt: 'Discover TypeScript, a superset of JavaScript that adds static typing and other features.',
    content: `
      <p>TypeScript is a superset of JavaScript that adds static typing and other features to the language. It helps developers catch errors early in the development process and makes the code more maintainable.</p>
      <p>To get started with TypeScript, you need to install it via npm:</p>
      <pre><code>npm install -g typescript
      </code></pre>
      <p>Once installed, you can create a TypeScript file with a <code>.ts</code> extension and write your code. TypeScript supports all JavaScript features, plus additional ones like interfaces, enums, and generics. Here’s a simple example:</p>
      <pre><code>interface Person {
        name: string;
        age: number;
      }
      
      const user: Person = {
        name: 'Alice',
        age: 30
      };
      </code></pre>
      <p>In this example, we defined a <code>Person</code> interface and created a user object adhering to that interface. TypeScript's type checking helps catch errors before runtime, leading to more robust applications. In this guide, we’ll cover the fundamentals of TypeScript and how to leverage its features in your projects.</p>
    `
  },
  {
    id: 5,
    title: 'Understanding Asynchronous JavaScript',
    author: 'Laura Adams',
    date: new Date('2024-02-25'),
    imageUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*arkBEQlVD-ckgN53dFViSQ.png',
    excerpt: 'Dive into asynchronous programming in JavaScript and how to handle non-blocking operations.',
    content: `
      <p>Asynchronous programming is a fundamental concept in JavaScript that allows you to perform non-blocking operations. This is essential for tasks such as API calls, file reading, and timers, enabling your application to remain responsive while waiting for operations to complete.</p>
      <p>JavaScript provides several ways to handle asynchronous operations, including callbacks, promises, and async/await. Here’s a brief overview of each:</p>
      <ul>
        <li><strong>Callbacks:</strong> Functions passed as arguments to other functions, executed once the task is complete.</li>
        <li><strong>Promises:</strong> Objects that represent the eventual completion or failure of an asynchronous operation.</li>
        <li><strong>Async/Await:</strong> A more readable syntax for working with promises, allowing you to write asynchronous code as if it were synchronous.</li>
      </ul>
      <p>Here’s a simple example of using async/await to fetch data from an API:</p>
      <pre><code>async function fetchData() {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
      }
      fetchData();
      </code></pre>
      <p>In this blog, we’ll explore each of these methods in detail, their advantages and disadvantages, and when to use them for effective asynchronous programming in JavaScript.</p>
    `
  },
  {
    id: 6,
    title: 'Getting Started with GraphQL',
    author: 'Kevin Young',
    date: new Date('2024-03-01'),
    imageUrl: 'https://graphqleditor.com/articles/getting-started-with-graphql/started.webp',
    excerpt: 'Learn about GraphQL, a flexible query language for APIs that enhances data retrieval.',
    content: `
      <p>GraphQL is a query language for APIs that allows clients to request only the data they need. It was developed by Facebook and has gained popularity due to its flexibility and efficiency compared to traditional REST APIs.</p>
      <p>To get started with GraphQL, you need to define your schema, which describes the types of data available and the queries that can be executed. Here’s a simple example:</p>
      <pre><code>type Post {
        id: ID!
        title: String!
        content: String!
      }
      
      type Query {
        posts: [Post]
      }
      </code></pre>
      <p>In this schema, we define a <code>Post</code> type and a <code>Query</code> type that retrieves an array of posts. Clients can then request specific fields they need, making it more efficient than traditional APIs where clients receive fixed data structures.</p>
      <p>In this blog, we’ll delve deeper into GraphQL concepts, including mutations, subscriptions, and best practices for building GraphQL APIs.</p>
    `
  },
  {
    id: 7,
    title: 'Best Practices for RESTful APIs',
    author: 'Nina Scott',
    date: new Date('2024-03-05'),
    imageUrl: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffc37a9b6-6831-4f73-93a6-a0dfe8eb7530_1280x720.png',
    excerpt: 'Explore essential practices for designing effective RESTful APIs that enhance usability.',
    content: `
      <p>Building RESTful APIs requires careful planning and design to ensure that they are scalable, maintainable, and easy to use. In this blog, we will discuss the best practices for designing RESTful APIs.</p>
      <p>1. <strong>Use Nouns for Endpoints:</strong> Use clear and descriptive nouns to define your endpoints. For example, use <code>/users</code> instead of <code>/getUsers</code>.</p>
      <p>2. <strong>Utilize HTTP Methods:</strong> Use standard HTTP methods such as GET, POST, PUT, and DELETE to perform operations. This improves readability and conforms to REST principles.</p>
      <p>3. <strong>Version Your API:</strong> Include a version number in your API endpoint (e.g., <code>/api/v1/users</code>) to ensure backward compatibility as your API evolves.</p>
      <p>By following these practices, you can create APIs that are easy to consume and understand, leading to better developer experiences. In this blog, we’ll cover these practices in detail and provide examples to illustrate each point.</p>
    `
  },
  {
    id: 8,
    title: 'CSS Flexbox: A Comprehensive Guide',
    author: 'Mark Taylor',
    date: new Date('2024-03-10'),
    imageUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*YgU3n8NTuiAWWGeohO2g-w.png',
    excerpt: 'Master CSS Flexbox, a powerful layout tool for responsive web design.',
    content: `
      <p>CSS Flexbox is a layout model that provides a more efficient way to design responsive layouts. It allows for dynamic resizing and alignment of elements within a container.</p>
      <p>To use Flexbox, you need to apply the <code>display: flex;</code> property to a container. Here’s a simple example:</p>
      <pre><code>.container {
        display: flex;
        justify-content: space-between;
      }
      </code></pre>
      <p>This code will distribute space between flex items evenly. Flexbox also provides properties for alignment, wrapping, and order. In this guide, we’ll explore all the features of Flexbox and how to utilize them for modern web design.</p>
    `
  },
  {
    id: 9,
    title: 'Creating Responsive Designs with CSS Grid',
    author: 'Anna Reed',
    date: new Date('2024-03-15'),
    imageUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*C8W3aR9H66rcj7Ml',
    excerpt: 'Learn how to create flexible, grid-based layouts with CSS Grid.',
    content: `
      <p>CSS Grid is a powerful layout system that enables you to create complex, responsive designs easily. It allows for two-dimensional layouts, meaning you can control both rows and columns at the same time.</p>
      <p>To start using CSS Grid, you apply the <code>display: grid;</code> property to your container. Here’s an example:</p>
      <pre><code>.grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }
      </code></pre>
      <p>This example creates a grid with three equal columns and a gap between the items. In this blog, we will cover the fundamentals of CSS Grid, including templates, areas, and how to create responsive designs.</p>
    `
  },
  {
    id: 10,
    title: 'Introduction to Docker for Developers',
    author: 'Sam Harris',
    date: new Date('2024-03-20'),
    imageUrl: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*MLFxdoY6ImiTghX9l0lDTA.png',
    excerpt: 'Get started with Docker, a platform for developing, shipping, and running applications in containers.',
    content: `
      <p>Docker is a popular platform that enables developers to create, deploy, and run applications in containers. Containers are lightweight and portable, making it easy to ensure consistency across different environments.</p>
      <p>To get started with Docker, you need to install Docker Desktop on your machine. Once installed, you can run your first container with a simple command:</p>
      <pre><code>docker run hello-world
      </code></pre>
      <p>This command pulls the <code>hello-world</code> image and runs it in a container. In this blog, we will explore Docker's key concepts, including images, containers, and Docker Compose, and how to leverage them in your development workflow.</p>
    `
  }
];