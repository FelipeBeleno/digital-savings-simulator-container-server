# Backend - Digital Savings Simulator

Servidor NestJS para gestionar la lógica de negocios y API de Digital Savings Simulator.

## 📌 Descripción

Servidor backend construido con NestJS que proporciona APIs RESTful para:
- Gestión de cuentas bancarias
- Validaciones de negocio
- Gestión de solicitudes de apertura de cuenta
- Cálculos de rentabilidad

## 🏗️ Estructura del Proyecto

```
server/
├── src/
│   ├── main.ts                    # Punto de entrada de la aplicación
│   ├── app.module.ts              # Módulo principal (root module)
│   ├── app.controller.ts          # Controlador principal
│   ├── app.service.ts             # Servicio principal
│   └── app.controller.spec.ts     # Tests unitarios del controlador
├── test/
│   ├── app.e2e-spec.ts           # Tests end-to-end
│   └── jest-e2e.json             # Configuración de Jest para E2E
├── dist/                          # Código compilado (generado)
├── node_modules/                  # Dependencias
├── .eslintrc.js                   # Configuración ESLint
├── .prettierrc                    # Configuración Prettier
├── .editorconfig                  # Configuración EditorConfig
├── tsconfig.json                  # Configuración TypeScript
├── tsconfig.build.json            # Configuración TypeScript para build
├── package.json                   # Dependencias y scripts
├── nest-cli.json                  # Configuración NestJS CLI
└── README.md                      # Este archivo
```

## 🚀 Inicio Rápido

### Instalación

```bash
# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Ejecutar en modo desarrollo (con watch)
npm run start:dev
```

El servidor estará disponible en `http://localhost:3001`

### Producción

```bash
# Compilar TypeScript
npm run build

# Ejecutar servidor compilado
npm run start:prod
```

## 📚 Endpoints API

### GET `/api/cuentas`

Retorna todas las cuentas bancarias disponibles.

**Respuesta (200 OK)**:
```json
[
  {
    "id": 1,
    "nombre": "Cuenta Digital",
    "tipo": "digital",
    "descripcion": "Cuenta moderna para transacciones digitales",
    "caracteristicas": ["Sin comisiones", "Acceso 24/7"],
    "tasa_interes": "0.5% EA",
    "saldo_minimo": 100000,
    "retiros_mensuales": "ilimitados",
    "moneda": "COP"
  },
  {
    "id": 2,
    "nombre": "Cuenta de Plazo Fijo",
    "tipo": "plazo_fijo",
    "descripcion": "Cuenta con rendimiento garantizado",
    "caracteristicas": ["Intereses asegurados", "Plazo mínimo 30 días"],
    "tasa_interes": "3.5% EA",
    "saldo_minimo": 500000,
    "retiros_mensuales": "0",
    "moneda": "COP"
  }
]
```

## 🔧 Configuración

### Variables de Entorno

Crear archivo `.env` en la raíz del proyecto:

```env
NODE_ENV=development
PORT=3001
API_PREFIX=api
```

### ESLint

Configuración en `.eslintrc.js`:
- Parser: `@typescript-eslint/parser`
- Plugins: `@typescript-eslint/eslint-plugin`
- Ignora: `.eslintrc.js`, `dist`, `node_modules`

**Importante**: Se removió `plugin:prettier/recommended` para evitar conflictos.

### Prettier

Configuración en `.prettierrc`:
```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "endOfLine": "lf"
}
```

**Importante**: `endOfLine: "lf"` para evitar problemas con Windows.

### EditorConfig

Archivo `.editorconfig`:
- Fuerza finales de línea LF
- Indentación: 2 espacios
- Charset: UTF-8
- Inserta newline al final de archivos

## 📦 Dependencias

### Principales
- `@nestjs/core@10.0.0` - Core del framework
- `@nestjs/common@10.0.0` - Decoradores y utilidades
- `@nestjs/config@4.0.2` - Gestión de variables de entorno
- `@nestjs/platform-express@10.0.0` - Adapter Express
- `reflect-metadata@0.2.0` - Metadatos para decoradores
- `rxjs@7.8.1` - Programación reactiva

### Desarrollo
- `@nestjs/cli@10.0.0` - CLI de NestJS
- `@nestjs/testing@10.0.0` - Testing utilities
- `typescript@5.x` - Lenguaje TypeScript
- `jest@29.5.0` - Testing framework
- `ts-jest@29.1.0` - Jest transformer para TS
- `prettier@3.0.0` - Code formatter
- `eslint@8.42.0` - Linter

## 🧪 Tests

### Ejecutar Tests

```bash
# Tests unitarios
npm test

# Tests en modo watch
npm run test:watch

# Tests con cobertura
npm run test:cov

# Tests end-to-end
npm run test:e2e
```

## 📝 Arquitectura NestJS

### Componentes Principales

#### **main.ts**
Punto de entrada de la aplicación.

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(3001);
}
bootstrap();
```

#### **app.module.ts**
Módulo raíz que declara controladores y servicios.

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

#### **app.controller.ts**
Define las rutas HTTP.

```typescript
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cuentas')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

#### **app.service.ts**
Contiene la lógica de negocio.

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

## 🔄 Flujo de Desarrollo

1. **Crear Módulo**: `nest generate module nombre`
2. **Crear Controlador**: `nest generate controller nombre`
3. **Crear Servicio**: `nest generate service nombre`
4. **Escribir Tests**: Archivo `.spec.ts`
5. **Compilar**: `npm run build`
6. **Ejecutar**: `npm start`

## 📋 Scripts Disponibles

```bash
npm run build              # Compilar TypeScript a JavaScript
npm run start              # Iniciar servidor compilado
npm run start:dev          # Desarrollo con watch mode
npm run start:debug        # Debug con inspector Node
npm run start:prod         # Ejecutar servidor compilado en producción
npm run lint               # Ejecutar ESLint y corregir problemas
npm run format             # Formatear código con Prettier
npm test                  # Ejecutar tests unitarios
npm run test:watch        # Tests en modo watch
npm run test:cov          # Tests con reporte de cobertura
npm run test:debug        # Debug de tests
npm run test:e2e          # Tests end-to-end
```

## 🚦 Puerto por Defecto

- **Desarrollo**: `3001`
- **Producción**: `3001` (configurable)

## 🔐 Seguridad y Mejores Prácticas

- ✅ Usar `@nestjs/config` para variables de entorno
- ✅ Validar entrada con pipes y decoradores
- ✅ Separar lógica en servicios
- ✅ Usar DTOs para estructurar datos
- ✅ Implementar manejo de errores global
- ✅ Escribir tests para cada módulo

## 📌 Próximos Pasos

### Corto Plazo
- [ ] Agregar más endpoints (solicitudes, usuarios)
- [ ] Implementar validación con class-validator
- [ ] Crear DTOs para request/response
- [ ] Agregar manejo de errores global

### Mediano Plazo
- [ ] Integrar base de datos (TypeORM o Prisma)
- [ ] Implementar autenticación (JWT)
- [ ] Agregar logging
- [ ] Documentar API con Swagger

### Largo Plazo
- [ ] Implementar autorización (roles)
- [ ] Agregar caching (Redis)
- [ ] Rate limiting
- [ ] Webhooks para notificaciones

## 🐛 Troubleshooting

### Error: "Cannot find module..."
```bash
npm install
```

### ESLint/Prettier conflicto
- Verificar `.eslintrc.js` no incluya `plugin:prettier/recommended`
- Verificar `.prettierrc` tiene `endOfLine: "lf"`

### Issues con Windows line endings
- Usar `.editorconfig` para forzar LF
- Ejecutar: `prettier --write src/**`

## 📞 Soporte

Para preguntas o issues, contactar al equipo de desarrollo.

---

**Última actualización**: 4 de diciembre de 2025
