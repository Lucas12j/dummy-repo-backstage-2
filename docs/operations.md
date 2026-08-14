# Operacao

## Health check

`GET /health`

## Dependencias

- PostgreSQL: persistencia de pedidos.
- Redis: cache e filas.
- Payments API: processamento externo de pagamentos.

Este projeto e demonstrativo e nao deve ser utilizado em producao sem ajustes de seguranca, observabilidade e persistencia.
