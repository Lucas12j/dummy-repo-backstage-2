# Arquitetura

O componente `example-orders-service` fornece a `example-orders-api`, consome a `example-payments-api` e depende dos recursos PostgreSQL e Redis.

O `example-orders-worker` representa o processamento assincrono e compartilha os mesmos recursos.

Todas as entidades pertencem ao sistema `example-commerce`, dentro do dominio `commerce`.
