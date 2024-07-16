# CLEAN ARCHITECTURE

      It is software design that promotes separation of concerns, ensuring system maintainability, scaleability and testability. This allows developers to robust flexibile applicaions.

      The advantage of clean architecture is that it can create a system that is
            - independent of database: Data storage and retrieval mechanisms can change without affecting the system.
            - independent of frameworks: Frameworks can be replaced with minimal impact on the system
            - independent of UI: The user interface can change without affecting the underlying logic or business rules.

      Principles of clean architecture
      This software design is based on several principles
            1. Seperation of concerns:
                  - Things implemented in one part of the system is should not conern or implemented in other parts.
                  - This ensures that changes in one part of the system will not effect the other side
            2. Dependency Rule:
                  - The dependency flow should be unidirectional, i.e, the lower layer should not dependent on the higher layers.
                  - This helps in the concept of decoupling.
            3. Testability:
                  - Business concerns should be kept isolated from external factors such as databases and UI.
                  - This saves on the time used in covering the business logic because there is no need for extensive coverage using setup or integration tests.

      LAYERS OF CLEAN ARCHITECTURE:
        (outer layer)    Frameworks & Drivers => Interface Adapters => Entities => use case    (inner layer)


nodejs-mongodb-clean-architecture/
│
├── src/
│   ├── adapters/                               : Adapters convert data between external formats and internal formats used by the application.
│   │   ├── controllers/                        : Controllers handle incoming requests and delegate work to use cases
│   │   │   └── UserController.js
│   │   ├── databases/                          : Database adapters encapsulate MongoDB interactions.
│   │   │   └── MongoDBAdapter.js
│   │   └── external/                           : Adapters for third-party services.
│   │       └── ThirdPartyServiceAdapter.js
│   │
│   ├── entities/                               : Entities represent domain objects (e.g., User) with business logic.
│   │   └── User.js
│   │
│   ├── usecases/                               : Use cases encapsulate application-specific business rules.
│   │   ├── user/                               : Use cases related to user operations.
│   │   │   ├── CreateUserUseCase.js
│   │   │   ├── GetUserUseCase.js
│   │   │   ├── UpdateUserUseCase.js
│   │   │   └── DeleteUserUseCase.js
│   │   └── index.js                            : Export all use cases from this folder.
│   │
│   ├── repositories/                           : Repositories provide an abstraction over data persistence (e.g., MongoDB operations).
│   │   └── UserRepository.js
│   │
│   ├── services/                               : Services contain application-wide business logic that doesn’t belong in entities or use cases.
│   │   └── AuthService.js
│   │
│   ├── frameworks/                             : Framework-specific code (like Express.js for web framework or logging utilities).
│   │   ├── express/
│   │   │   ├── routes/
│   │   │   │   └── userRoutes.js
│   │   │   └── middleware/
│   │   │       └── authMiddleware.js
│   │   └── logging/
│   │       └── Logger.js
│   │
│   └── config/                                 : Configuration files, such as database configuration.
│       └── database.js                         : Database configuration
│
├── tests/                                      : Contains unit tests, integration tests, and end-to-end tests for your application.
│   ├── unit/
│   │   ├── user/
│   │   │   ├── CreateUserUseCase.test.js
│   │   │   └── UserRepository.test.js
│   │   └── services/
│   ├── integration/
│   └── e2e/
│
├── scripts/
│   └── seed.js  // Database seeding script
│
├── package.json
└── README.md
