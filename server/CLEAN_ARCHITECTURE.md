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
