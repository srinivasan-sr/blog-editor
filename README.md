# Blog Editor

This is a simple web-based blog editor built with **Next.js 15**. It's designed to provide a straightforward and clean interface for creating and managing blog posts.

## Features

-   **Next.js 15 App Router:** Utilizes the new App Router for server components and nested layouts, enhancing performance and scalability.
    
-   **Static Site Generation (SSG):** Generates static HTML pages for blog posts at build time, leading to fast load times and improved SEO.
    

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

You'll need to have the following installed:

-   Node.js (v18.0 or later)
    
-   npm or yarn
- [Cloudinary account](https://cloudinary.com)

    

### Installation

1.  Clone the repository:
    
    ```
    git clone [https://github.com/srinivasan-sr/blog-editor.git](https://github.com/srinivasan-sr/blog-editor.git)
    
    ```
    
2.  Navigate to the project directory:
    
    ```
    cd blog-editor
    
    ```
    
3.  Install the dependencies:
    
    ```
    npm install
    # or
    yarn install
    
    ```
    

### Running the Development Server

To start the development server, run the following command:

```
npm run dev
# or
yarn dev

```

The application will be accessible at `http://localhost:3000`.

## How to Use

The editor is simple and intuitive.

1.  Open the application in your browser.
    
2.  On the top right, you will see an option to see the 'Feed' and to create a 'New Post'.
3. The homepage shows the most recent posts (Top 3 only) from the SQLite database.
4. Tapping on the 'New Post' will allow you to add a new post to the database.

## Technologies Used

-   **Next.js 15:** The main framework for the application.
    
-   **React:** The JavaScript library for building the user interface.

-   **SQLite:** A modern and lightweight database to hold the blog posts.


## License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE "null").

