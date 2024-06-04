# React Router Task

**Task Description**

  - The objective of this task is to create a web page with routes using react-router-dom. The design of the page should be based on the following URL: https://www.guvi.in/blog/

  - Refer to https://reactrouter.com/en/main for any help or guidance on React Router DOM.

**Requirements**

  - In The Above link you will find the navigation for courses in the middle of the page like All , full stack development, Data science , Cyber Security & Career As Navigation menu
  - Create that navigation to courses using react router dom and add the contents as static as given in pages
  - The navigation menu which needs to be created is screenshotted and placed below for your 

 **Description**
   
   * In [Index.html](./index.html)
      
      - Bootstrap is used for building responsive, mobile-first websites with pre-designed CSS and JavaScript components.
      - `div` is used for building responsive web pages with pre-designed components and utilities.
   
   * In [App.jsx](./src/App.jsx)
      
      - Imports React Router components for routing in a React application.
      - Defines a Navbar component for navigation.
      - Creates route paths for different sections of the application like full stack development, data science, cybersecurity, and career.
      - Utilizes `createBrowserRouter` to define routes and their corresponding components.
      - Wraps the application with a `RouterProvider` to provide routing functionality.

   * In [App.css](./src/App.css)

      - Styles the body with zero margin, using Arial or a fallback sans-serif font.
      - Defines styles for a centered navbar with flex display, buttons with hover/focus effects, and a horizontal rule with a customized border.
  
   * In [Navbar.jsx](./src/Navbar.jsx)

      -  Utilizes `useNavigate` hook from React Router to enable navigation within the application.
      - Renders a collapsible navbar with toggler button for responsive design.
      - Provides buttons for each section of the application, triggering navigation to corresponding routes upon click. Additionally, includes a horizontal rule below the navbar for visual separation.
   
   * In [Card.jsx](/src/components/Card.jsx)

      - This code defines a React component called `Card`. It takes three props: `image`, `title`, and `description`.
      - The component returns a JSX structure representing a card UI element. It includes an image, a title, and a description wrapped inside a `div` element with the class name "card". The image source and alt text are set based on the `image` prop, and the title and description are displayed inside `h1` and `p` tags, respectively, using the provided props.

   * In [Card.css](/src/components/Card.css)

      - The provided CSS file defines styles for the `Card` component, including setting the dimensions, margins, borders, and box-shadow for the card, as well as styling for the image and content within the card. Additionally, it adds a hover effect that triggers a blinking animation using keyframes.

   * In [All.jsx](/src/components/All.jsx)

      - The `All` component renders a collection of `Card` components, each representing a topic related to technology, such as networking, operating systems, programming languages, etc.
      - Each `Card` component receives props for an image, title, and description, which are used to display relevant information for each topic.
      - The `All` component organizes the `Card` components within a `div` with the class name "content", ensuring they are visually grouped together. 
    
   * In [Fullstackdev.jsx](/src/components/Fullstackdev.jsx)

      - The `Fullstackdev` component renders a subset of `Card` components, focusing on topics related to full-stack web development, including front-end technologies like HTML, CSS, JavaScript, and React, as well as server-side frameworks like Express.js, and databases like MySQL and MongoDB.
      - Each `Card` component represents a specific technology or framework used in full-stack development, displaying an image, title, and description to provide informationabout the topic.
      - By organizing these `Card` components within a `div` with the class name "content", the `Fullstackdev` component ensures they are visually grouped together, making it easy for users to identify and access relevant information about full-stack development technologies.

   * In [Datascience.jsx](/src/components/Datascience.jsx)

      - The `Datascience` component renders a collection of `Card` components, each focusing on a specific aspect of data science, including machine learning, deep learning, R programming, data visualization tools, and Power BI.
      - Each `Card` component displays an image, title, and description related to the topic it represents, providing users with information about various aspects of data science.
      - By organizing these `Card` components within a `div` with the class name "content", the `Datascience` component ensures they are visually grouped together, making it easy for users to explore and learn about different topics within the field of data science.

   * In [Cybersecurity.jsx](/src/components/Cybersecurity.jsx)
      
      - The `Cybersecurity` component renders a collection of `Card` components, each focusing on a specific aspect of cybersecurity, including networking, operating systems, programming and scripting, cryptography, and security tools and technologies.
      - Each `Card` component displays an image, title, and description related to the cybersecurity topic it represents, providing users with information about different aspects of cybersecurity.
      - By organizing these `Card` components within a `div` with the class name "content", the `Cybersecurity` component ensures they are visually grouped together, making it easy for users to explore and learn about various topics within the field of cybersecurity.

   * In [Career.jsx](/src/components/Career.jsx) 

      - The `Career` component renders a collection of `Card` components, each representing a crucial aspect of career development, including technical skills, project management, and analytical skills.
      - Each `Card` component displays an image, title, and description related to the career aspect it represents, providing users with information about different skills and competencies important for professional growth.
     - By organizing these `Card` components within a `div` with the class name "content", the `Career` component ensures they are visually grouped together, making it easy for users to explore and understand the essential components of career development.
  
   * All Images are added in [public](./public/).