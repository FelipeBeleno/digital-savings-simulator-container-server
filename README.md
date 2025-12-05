# Digital Savings Simulator - Backend

API REST desarrollada con NestJS para el simulador de productos de ahorro.

## Demo

🚀 **Aplicación desplegada:** https://digital-savings-simulator-container.vercel.app/

## Tecnologías

- **NestJS** 10.x
- **TypeScript** 5.x
- **Node.js** 20+

## Instalación

```bash
npm install
```

## Variables de Entorno

```bash
PORT=3001
```

## Ejecución

```bash
# Desarrollo
npm run start:dev

# Producción
npm run start:prod
```

## API Endpoints

### GET /
Retorna el catálogo de productos de ahorro (14 tipos de cuentas).

**Respuesta:**
```json
[
  {
    "id": 1,
    "nombre": "Cuenta de Ahorros Básica",
    "tipo": "tradicional",
    "descripcion": "Cuenta estándar para ahorro diario",
    "caracteristicas": ["Saldo mínimo bajo", "Tasa baja"],
    "tasa_interes": "0.5% - 2% EA",
    "saldo_minimo": 0,
    "retiros_mensuales": "ilimitados",
    "moneda": "COP"
  }
]
```

## Estructura

```
src/
├── app.controller.ts    # Controlador principal
├── app.service.ts       # Lógica de negocio
├── app.module.ts        # Módulo raíz
└── main.ts             # Punto de entrada
```

## Scripts

```bash
npm run build          # Compilar
npm run lint           # Linter
```