# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.



More configurations
```bash
src/
├── app/
│   ├── core/                 # Servicios y configuraciones globales (singleton)
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── services/
│   │   ├── models/
│   │   ├── enums/
│   │   ├── constants/
│   │   └── core.module.ts    # Importado solo en AppModule
│
│   ├── shared/               # Componentes, pipes y directivas reutilizables
│   │   ├── components/
│   │   ├── directives/
│   │   ├── pipes/
│   │   ├── models/           # Modelos comunes (opcional)
│   │   └── shared.module.ts  # Exporta todo lo reusable
│
│   ├── domains/             # Módulos por dominio funcional (feature modules)
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── services/
│   │   │   ├── store/        # NgRx si se usa
│   │   │   ├── auth-routing.module.ts
│   │   │   └── auth.module.ts
│   │   ├── dashboard/
│   │   ├── users/
│   │   └── ...
│
│   ├── layout/               # Layouts como admin, auth, public
│   │   ├── admin-layout/
│   │   ├── auth-layout/
│   │   └── ...
    ├── modules/
                   
│   │   
│   │
│
│   ├── app-routing.module.ts
│   └── app.module.ts
│
├── assets/                   # Imágenes, fuentes, i18n, etc.
├── environments/             # Variables de entorno (dev, prod, staging)
│   ├── environment.ts
│   └── environment.prod.ts
├── styles/                   # SCSS globales, variables, mixins
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── main.scss
└── index.html

# TDD, Hexagonal Architecture
src/
├── app/
│   ├── core/                             # Singletons, configuraciones globales
│   │   ├── adapters/                     # Implementaciones de puertos (HTTP, Storage, etc.)
│   │   │   ├── http/                     # ApiProductAdapter, ApiAuthAdapter…
│   │   │   └── storage/                  # LocalStorageAdapter, SessionStorageAdapter
│   │   ├── guards/                       # AuthGuard, RoleGuard…
│   │   ├── interceptors/                 # JwtInterceptor, ErrorInterceptor…
│   │   ├── models/                       # Tipos de dominio genéricos (User, Pagination…)
│   │   ├── ports/                        # Interfaces (ProductPort, AuthPort…)
│   │   ├── services/                     # Fachadas/core services (ConfigService, LoggerService)
│   │   ├── utils/                        # Helpers puros, pipes utilitarias
│   │   ├── enums/                        # Enumeraciones globales
│   │   ├── constants/                    # Constantes de aplicación
│   │   └── core.module.ts
│   │
│   ├── shared/                           # Componentes/pipes/directivas reutilizables
│   │   ├── components/                   # Button, Modal, Table, Loader…
│   │   ├── directives/                   # e.g. AutofocusDirective…
│   │   ├── pipes/                        # DateFormatPipe, CurrencyPipe…
│   │   ├── validators/                   # FormValidators, AsyncValidators…
│   │   ├── models/                       # Tipos comunes (Option, SelectItem…)
│   │   └── shared.module.ts
│   │
│   ├── domains/                          # Feature modules (hexagonal por dominio)
│   │   ├── products/
│   │   │   ├── domain/                   # Lógica de negocio pura
│   │   │   │   ├── entities/             # Product.ts, Category.ts
│   │   │   │   ├── value-objects/        # Money.ts, Slug.ts…
│   │   │   │   ├── repositories/         # interfaces ProductRepository.ts
│   │   │   │   └── exceptions/           # ProductNotFoundException.ts
│   │   │   │
│   │   │   ├── application/              # Casos de uso (use-cases / services)
│   │   │   │   ├── use-cases/            # CreateProduct.ts, GetProductList.ts
│   │   │   │   └── dtos/                 # CreateProductDTO.ts, ProductDTO.ts
│   │   │   │
│   │   │   ├── infrastructure/           # Adaptadores concretos de ports
│   │   │   │   ├── api/                  # ProductApiService.ts (implements ProductPort)
│   │   │   │   ├── mappers/              # mapToDomain.ts, mapToDto.ts
│   │   │   │   └── state/                # NgRx/Signal store (opcional)
│   │   │   │
│   │   │   ├── ui/                       # Presentación y rutas lazy-loaded
│   │   │   │   ├── components/           # ProductCard, ProductFilters…
│   │   │   │   ├── pages/                # ProductListPage, ProductDetailPage
│   │   │   │   ├── products-routing.module.ts
│   │   │   │   └── products.module.ts
│   │   │   │
│   │   │   └── __tests__/                # TDD: unit y integration tests
│   │   │       ├── domain/               # test entities, repos
│   │   │       ├── application/          # test use-cases
│   │   │       └── infrastructure/       # test adapters, mappers
│   │   │
│   │   ├── cart/
│   │   │   └── (misma subdivisión que products)
│   │   ├── orders/
│   │   │   └── (idem)
│   │   ├── users/
│   │   └── auth/
│   │
│   ├── layout/                           # Layouts globales (envuelven páginas)
│   │   ├── admin-layout/
│   │   │   ├── admin-layout.component.ts
│   │   │   └── admin-layout.component.html
│   │   ├── auth-layout/
│   │   └── public-layout/
│   │
│   ├── app-routing.module.ts            # Lazy-load de domains/*
│   └── app.module.ts
│
├── assets/                              # Imágenes, i18n, fonts…
│   ├── images/
│   └── i18n/
│
├── environments/                        # environment.ts, environment.prod.ts
│
├── styles/                              # SCSS globales, variables, mixins
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── main.scss
│
└── index.html

e2e/                                    # Pruebas end-to-end (Protractor/Cypress)

## Standard folder structure to any template project
src/
├── app/
│   ├── core/                             # Singletons, configuraciones globales
│   │   ├── adapters/
│   │   │   ├── http/
│   │   │   │   ├── api-product.adapter.ts
│   │   │   │   ├── api-auth.adapter.ts
│   │   │   │   └── api-order.adapter.ts
│   │   │   └── storage/
│   │   │       ├── local-storage.adapter.ts
│   │   │       └── session-storage.adapter.ts
│   │   ├── guards/
│   │   │   ├── auth.guard.ts
│   │   │   └── role.guard.ts
│   │   ├── interceptors/
│   │   │   ├── jwt.interceptor.ts
│   │   │   └── error.interceptor.ts
│   │   ├── models/
│   │   │   ├── user.model.ts
│   │   │   ├── pagination.model.ts
│   │   │   └── api-response.model.ts
│   │   ├── ports/
│   │   │   ├── product.port.ts
│   │   │   ├── auth.port.ts
│   │   │   └── order.port.ts
│   │   ├── services/
│   │   │   ├── config.service.ts
│   │   │   └── logger.service.ts
│   │   ├── utils/
│   │   │   ├── format-date.util.ts
│   │   │   └── calculate-discount.util.ts
│   │   ├── enums/
│   │   │   ├── user-role.enum.ts
│   │   │   └── order-status.enum.ts
│   │   ├── constants/
│   │   │   ├── app.constants.ts
│   │   │   └── api-endpoints.constants.ts
│   │   └── core.module.ts
│   │
│   ├── shared/                           # Componentes, pipes y directivas reutilizables
│   │   ├── components/
│   │   │   ├── button/
│   │   │   │   ├── button.component.ts
│   │   │   │   └── button.component.html
│   │   │   ├── modal/
│   │   │   │   ├── modal.component.ts
│   │   │   │   └── modal.component.html
│   │   │   ├── table/
│   │   │   │   ├── table.component.ts
│   │   │   │   └── table.component.html
│   │   │   └── loader/
│   │   │       ├── loader.component.ts
│   │   │       └── loader.component.html
│   │   ├── directives/
│   │   │   └── autofocus.directive.ts
│   │   ├── pipes/
│   │   │   ├── date-format.pipe.ts
│   │   │   └── currency-format.pipe.ts
│   │   ├── validators/
│   │   │   ├── form-validators.ts
│   │   │   └── async-validators.ts
│   │   ├── models/
│   │   │   ├── option.model.ts
│   │   │   └── select-item.model.ts
│   │   └── shared.module.ts
│   │
│   ├── domains/                          # Feature modules (hexagonal por dominio)
│   │   ├── products/
│   │   │   ├── domain/
│   │   │   │   ├── entities/
│   │   │   │   │   ├── product.entity.ts
│   │   │   │   │   └── category.entity.ts
│   │   │   │   ├── value-objects/
│   │   │   │   │   ├── money.vo.ts
│   │   │   │   │   └── slug.vo.ts
│   │   │   │   ├── repositories/
│   │   │   │   │   └── product.repository.interface.ts
│   │   │   │   └── exceptions/
│   │   │   │       └── product-not-found.exception.ts
│   │   │   │
│   │   │   ├── application/
│   │   │   │   ├── use-cases/
│   │   │   │   │   ├── create-product.usecase.ts
│   │   │   │   │   ├── get-product-list.usecase.ts
│   │   │   │   │   └── delete-product.usecase.ts
│   │   │   │   └── dtos/
│   │   │   │       ├── create-product.dto.ts
│   │   │   │       └── product.dto.ts
│   │   │   │
│   │   │   ├── infrastructure/
│   │   │   │   ├── api/
│   │   │   │   │   └── product-api.service.ts
│   │   │   │   ├── mappers/
│   │   │   │   │   ├── to-domain.mapper.ts
│   │   │   │   │   └── to-dto.mapper.ts
│   │   │   │   └── state/
│   │   │   │       ├── products.actions.ts
│   │   │   │       ├── products.reducer.ts
│   │   │   │       └── products.selectors.ts
│   │   │   │
│   │   │   ├── ui/
│   │   │   │   ├── components/
│   │   │   │   │   ├── product-card/
│   │   │   │   │   │   ├── product-card.component.ts
│   │   │   │   │   │   └── product-card.component.html
│   │   │   │   │   └── product-filters/
│   │   │   │   │       ├── product-filters.component.ts
│   │   │   │   │       └── product-filters.component.html
│   │   │   │   ├── pages/
│   │   │   │   │   ├── product-list.page.ts
│   │   │   │   │   └── product-detail.page.ts
│   │   │   │   ├── products-routing.module.ts
│   │   │   │   └── products.module.ts
│   │   │   │
│   │   │   └── __tests__/
│   │   │       ├── domain/
│   │   │       │   └── product.entity.spec.ts
│   │   │       ├── application/
│   │   │       │   └── create-product.usecase.spec.ts
│   │   │       └── infrastructure/
│   │   │           └── product-api.service.spec.ts
│   │   │
│   │   ├── cart/
│   │   │   ├── domain/
│   │   │   ├── application/
│   │   │   ├── infrastructure/
│   │   │   ├── ui/
│   │   │   └── __tests__/
│   │   │
│   │   ├── orders/
│   │   │   ├── domain/
│   │   │   ├── application/
│   │   │   ├── infrastructure/
│   │   │   ├── ui/
│   │   │   └── __tests__/
│   │   │
│   │   ├── users/
│   │   │   ├── domain/
│   │   │   ├── application/
│   │   │   ├── infrastructure/
│   │   │   ├── ui/
│   │   │   └── __tests__/
│   │   │
│   │   └── auth/
│   │       ├── domain/
│   │       ├── application/
│   │       ├── infrastructure/
│   │       ├── ui/
│   │       └── __tests__/
│   │
│   ├── layout/                           # Layouts globales (envuelven páginas)
│   │   ├── admin-layout/
│   │   │   ├── admin-layout.component.ts
│   │   │   └── admin-layout.component.html
│   │   ├── auth-layout/
│   │   │   ├── auth-layout.component.ts
│   │   │   └── auth-layout.component.html
│   │   └── public-layout/
│   │       ├── public-layout.component.ts
│   │       └── public-layout.component.html
│   │
│   ├── app-routing.module.ts            # Lazy-load de domains/*
│   └── app.module.ts
│
├── assets/                              # Imágenes, i18n, fonts…
│   ├── images/
│   │   ├── logo.png
│   │   └── products-placeholder.jpg
│   └── i18n/
│       ├── en.json
│       └── es.json
│
├── environments/                        # environment.ts, environment.prod.ts
│   ├── environment.ts
│   └── environment.prod.ts
│
├── styles/                              # SCSS globales, variables, mixins
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── main.scss
│
└── index.html

e2e/                                    # Pruebas end-to-end (Cypress)
/── e2e/
    ├── specs/
    │   ├── products.e2e-spec.ts
    │   ├── cart.e2e-spec.ts
    │   └── auth.e2e-spec.ts
    └── support/
        ├── commands.ts
        └── index.ts

```
📁 EXPLICACIÓN DE CARPETAS CLAVE

🔹 **core**/ (Singleton Services & Global Logic)

  Contiene lógica que debe cargarse una sola vez:

  Interceptores (AuthInterceptor, ErrorInterceptor)

  Guards (AuthGuard, RoleGuard)

  Servicios globales (AuthService, LoggerService)

  Modelos globales

  CoreModule se importa solo una vez en AppModule.

🔹 **shared**/ (Reusable UI Pieces)

  Para componentes reutilizables y sin lógica de negocio:

  Botones, inputs, modales, tablas, pipes (dateFormat, truncate), directivas (autofocus)

  SharedModule exporta lo común y se importa donde se necesite.

🔹 **features**/ (Feature Modules)

  Dominio funcional (auth, user, orders...):

  Cada feature tiene su module, routing, components, pages, services e incluso store/ si usas NgRx.

🔹 **layout**/

  Define estructuras base del sitio (navbar, footer, sidebar) según el tipo de layout:

  AdminLayoutComponent, AuthLayoutComponent, etc.

🔹 **environments**/

Archivos de entorno usados en build (ng build --configuration=production).

🔹 **styles**/

SASS variables, mixins, y estilos globales.

🧠 BUENAS PRÁCTICAS PROFESIONALES EN ANGULAR

✅ Lazy loading por módulo funcional.

✅ Separación clara entre componentes de página (pages/) y componentes pequeños (components/).

✅ Usa HttpInterceptor para auth y error handling global.

✅ Usa RxJS y NgRx en proyectos grandes con mucho estado.

✅ Define modelos y enums para tipar bien tus datos.

✅ Nunca declares servicios en componentes, solo en módulos.

✅ Evita lógica de negocio dentro de los componentes: crea facade services.


## Enfoque final de estructura de carpetas
Puntos clave de esta estructura estándar:

Hexagonal & TDD

Carpeta domain/ aislada de la infraestructura.

__tests__/ junto a cada dominio para asegurar cobertura desde la lógica más básica hasta los adaptadores.

Lazy‑loading & desacoplamiento

Cada módulo en domains/ se carga “on demand” vía app-routing.module.ts.

Reutilización global

core/ y shared/ mantienen singletons y componentes reutilizables sin mezclar lógica de negocio.

Fácil extensión

Para un nuevo módulo (p.ej. reviews/), simplemente replicas la subdivisión domain, application, infrastructure, ui y __tests__.

### Enfoque de estructuracion de directorios
Cuando hablamos de proyectos Angular mucho más grandes y enterprise-level, con decenas de módulos, equipos de trabajo y mantenimiento a largo plazo, la estructura de carpetas debe evolucionar aún más hacia una arquitectura escalable por dominios (Domain-Driven Design - DDD) o incluso una estructura vertical (modular vertical).

En Angular, la estructura de carpetas es un aspecto importante para mantener el control de la complejidad del proyecto y facilitar el mantenimiento.




## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
