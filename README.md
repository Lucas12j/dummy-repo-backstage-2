# Backstage Example Service

Projeto demonstrativo estruturado para importacao no Backstage.

## Publicar no GitLab

1. Crie um projeto vazio chamado `backstage-example-service`.
2. Altere `SEU_GRUPO` em `catalog-info.yaml` para o namespace real do GitLab.
3. Envie estes arquivos para a branch padrao.

```bash
git init
git add .
git commit -m "Initial Backstage example"
git branch -M main
git remote add origin https://gitlab.com/SEU_GRUPO/backstage-example-service.git
git push -u origin main
```

## Importar no Backstage

Use a URL RAW do arquivo:

```text
https://gitlab.com/SEU_GRUPO/backstage-example-service/-/raw/main/catalog-info.yaml
```

Em seguida, abra **Create > Register Existing Component**, informe a URL e conclua a importacao.

## Conteudo do catalogo

- Domain: `commerce`
- System: `example-commerce`
- Components: API e worker
- APIs: orders e payments
- Resources: PostgreSQL e Redis
- TechDocs em `docs/`
