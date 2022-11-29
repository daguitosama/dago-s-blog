# Dago's Blog

## Content Types
```graphql

    enum Tags {
        curiosity 
        craft
        bash
    }

    Post {
        tittle           String
        description     String
        featureImage    String
        tags            Tags[]
        content         String

    }

    Page {
        tittle           String
        description     String
        featureImage    String
    }

```