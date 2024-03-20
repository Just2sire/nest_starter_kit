// Prisma setup

- Install prisma : npm i prisma -D 

- Install prisma client: npm i @prisma/client

- Initialize prisma in the project (With .env file and prisma folder) : npx prisma init

- Put the connection string link into the .env file like :
    DATABASE_URL="mysql://root:@localhost:3306/db_name?schema=public"

- Create the model schema in the /prisma/schema.prisma file like :
    model User {
        id Int @id @default(autoincrement())
        name String
        email String @unique
        password String
        createdAt DateTime @default(now())
        updatedAt DateTime @updatedAt
    }

- Make the first migration by creating a new migration : npx prisma migrate dev --name init
