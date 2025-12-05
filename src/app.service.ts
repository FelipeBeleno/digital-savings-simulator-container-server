import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProducts() {

    return  [
        {
          "id": 1,
          "nombre": "Cuenta de Ahorros Básica",
          "tipo": "tradicional",
          "descripcion": "Cuenta estándar para ahorro diario",
          "caracteristicas": [
            "Saldo mínimo bajo o ninguno",
            "Tasa de interés baja",
            "Acceso fácil al dinero",
            "Tarjeta débito incluida"
          ],
          "tasa_interes": "0.5% - 2% EA",
          "saldo_minimo": 0,
          "retiros_mensuales": "ilimitados",
          "moneda": "COP"
        },
        {
          "id": 2,
          "nombre": "Cuenta de Ahorros de Alto Rendimiento",
          "tipo": "tradicional",
          "descripcion": "Cuenta con mejores tasas de interés",
          "caracteristicas": [
            "Tasas de interés más altas",
            "Generalmente en bancos digitales",
            "Requiere saldo mínimo más alto",
            "Menos sucursales físicas"
          ],
          "tasa_interes": "3% - 6% EA",
          "saldo_minimo": 1000000,
          "retiros_mensuales": "ilimitados",
          "moneda": "COP"
        },
        {
          "id": 3,
          "nombre": "Cuenta de Ahorros Programado",
          "tipo": "tradicional",
          "descripcion": "Para metas específicas de ahorro",
          "caracteristicas": [
            "Depósitos periódicos automáticos",
            "Bonificación por cumplir el plan",
            "Penalización por retiros anticipados",
            "Meta definida"
          ],
          "tasa_interes": "2% - 4% EA",
          "saldo_minimo": 50000,
          "retiros_mensuales": "limitados",
          "moneda": "COP"
        },
        {
          "id": 4,
          "nombre": "Cuenta de Ahorros para Niños/Jóvenes",
          "tipo": "especializada",
          "descripcion": "Cuenta diseñada para menores de edad",
          "caracteristicas": [
            "Sin cuota de manejo",
            "Educación financiera incluida",
            "Requiere tutor legal",
            "Tasas preferenciales"
          ],
          "tasa_interes": "1% - 3% EA",
          "saldo_minimo": 0,
          "retiros_mensuales": "ilimitados",
          "moneda": "COP"
        },
        {
          "id": 5,
          "nombre": "Cuenta de Ahorros Nómina",
          "tipo": "especializada",
          "descripcion": "Vinculada al pago de salario",
          "caracteristicas": [
            "Sin cuota de manejo",
            "Beneficios adicionales",
            "Tarjeta débito incluida",
            "Descuentos en productos del banco"
          ],
          "tasa_interes": "1% - 2.5% EA",
          "saldo_minimo": 0,
          "retiros_mensuales": "ilimitados",
          "moneda": "COP"
        },
        {
          "id": 6,
          "nombre": "Cuenta de Ahorros Empresarial",
          "tipo": "especializada",
          "descripcion": "Para personas jurídicas",
          "caracteristicas": [
            "Manejo de excedentes de liquidez",
            "Tasas competitivas",
            "Servicios adicionales para empresas",
            "Múltiples usuarios autorizados"
          ],
          "tasa_interes": "2% - 4% EA",
          "saldo_minimo": 500000,
          "retiros_mensuales": "ilimitados",
          "moneda": "COP"
        },
        {
          "id": 7,
          "nombre": "CDT (Certificado de Depósito a Término)",
          "tipo": "plazo_fijo",
          "descripcion": "Ahorro a plazo fijo con tasa garantizada",
          "caracteristicas": [
            "Plazo fijo (30 días a varios años)",
            "Tasa de interés fija y más alta",
            "Penalización por retiro anticipado",
            "Monto mínimo de apertura"
          ],
          "tasa_interes": "5% - 12% EA",
          "saldo_minimo": 1000000,
          "retiros_mensuales": "0",
          "moneda": "COP"
        },
        {
          "id": 8,
          "nombre": "Cuenta AFC (Ahorro para el Fomento de la Construcción)",
          "tipo": "plazo_fijo",
          "descripcion": "Ahorro con beneficios tributarios para vivienda",
          "caracteristicas": [
            "Beneficios tributarios",
            "Para compra o construcción de vivienda",
            "Retención en la fuente reducida",
            "Condiciones específicas de retiro"
          ],
          "tasa_interes": "3% - 5% EA",
          "saldo_minimo": 0,
          "retiros_mensuales": "condicionado",
          "moneda": "COP"
        },
        {
          "id": 9,
          "nombre": "Cuenta de Ahorros Voluntarias para Pensión",
          "tipo": "plazo_fijo",
          "descripcion": "Complemento a pensión obligatoria",
          "caracteristicas": [
            "Complemento a pensión obligatoria",
            "Beneficios tributarios",
            "Inversión a largo plazo",
            "Diferentes perfiles de riesgo"
          ],
          "tasa_interes": "variable",
          "saldo_minimo": 20000,
          "retiros_mensuales": "condicionado",
          "moneda": "COP"
        },
        {
          "id": 10,
          "nombre": "Cuenta 100% Digital",
          "tipo": "digital",
          "descripcion": "Cuenta totalmente digital sin sucursales",
          "caracteristicas": [
            "Apertura online",
            "Sin sucursales físicas",
            "Tasas competitivas",
            "App móvil completa"
          ],
          "tasa_interes": "3% - 7% EA",
          "saldo_minimo": 0,
          "retiros_mensuales": "ilimitados",
          "moneda": "COP"
        },
        {
          "id": 11,
          "nombre": "Billetera Digital",
          "tipo": "digital",
          "descripcion": "Vinculada a plataformas fintech",
          "caracteristicas": [
            "Vinculada a plataformas fintech",
            "Transferencias inmediatas",
            "QR para pagos",
            "Rendimientos diarios"
          ],
          "tasa_interes": "2% - 8% EA",
          "saldo_minimo": 0,
          "retiros_mensuales": "ilimitados",
          "moneda": "COP"
        },
        {
          "id": 12,
          "nombre": "Cuenta de Ahorros en Dólares",
          "tipo": "especial",
          "descripcion": "Para ahorro en moneda extranjera",
          "caracteristicas": [
            "Para ahorro en moneda extranjera",
            "Protección contra devaluación",
            "Tasas en dólares",
            "Requisitos específicos"
          ],
          "tasa_interes": "0.5% - 2% EA",
          "saldo_minimo": 100,
          "retiros_mensuales": "ilimitados",
          "moneda": "USD"
        },
        {
          "id": 13,
          "nombre": "Cuenta Multifondos",
          "tipo": "especial",
          "descripcion": "Combina ahorro y inversión",
          "caracteristicas": [
            "Combina ahorro y inversión",
            "Diferentes perfiles de riesgo",
            "Rendimientos variables",
            "Asesoría financiera incluida"
          ],
          "tasa_interes": "variable",
          "saldo_minimo": 500000,
          "retiros_mensuales": "ilimitados",
          "moneda": "COP"
        },
        {
          "id": 14,
          "nombre": "Cuenta de Ahorros Colectivo",
          "tipo": "especial",
          "descripcion": "Para grupos o asociaciones",
          "caracteristicas": [
            "Para grupos o asociaciones",
            "Múltiples titulares",
            "Metas compartidas",
            "Administración conjunta"
          ],
          "tasa_interes": "1% - 3% EA",
          "saldo_minimo": 100000,
          "retiros_mensuales": "ilimitados",
          "moneda": "COP"
        }
      ]
    
  }
}
