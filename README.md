This blog is part of the Rocketseat's IGNITE journey.

To build the application were used the following technologies:

### Styles

- CSS Modules

### ReactJS

- TypeScript
- React Hooks

### NextJS

- Basic features (Router, Link, Head etc.)
- Static Site Generation (Home Page, Posts List, Post Preview)
- Server Side Rendering (Full Post)
- Dynamic routes (Posts List, Post Preview, Full Post)
- API Routes (Fauna queries, authentication and Stripe queries)
- ENV variables (for storing secret variables)
- Next Auth (User authentication with GitHub)

### Stripe

- Payment gateway.

### Fauna DB

- Data API (GraphQL) used to store user information, making it possible to validate the signature with Stripe.

### Prismic CMS

- CMS used to provide information to load in NextJS.

## Getting started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Without the .env file, it is not possible to run the project properly.
