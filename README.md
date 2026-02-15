# 🚀 Ecossistema Cloud-Native: Loja Veloz

Projeto de modernização de infraestrutura focado em alta disponibilidade, escalabilidade e automação de entrega contínua.

## 📋 Sobre o Projeto
Este repositório contém a solução para o case "Loja Veloz", transformando um sistema monolítico instável em uma arquitetura de microsserviços resiliente, utilizando as melhores práticas de DevOps e SRE.

## 🛠️ Tecnologias Utilizadas
* **Conteinerização:** Docker & Docker Compose
* **Orquestração:** Kubernetes (K8s)
* **Infraestrutura como Código:** Terraform
* **CI/CD:** GitHub Actions
* **Observabilidade:** Prometheus & Grafana
* **Banco de Dados:** PostgreSQL

## 🏗️ Estrutura do Repositório
* `/services`: Código-fonte dos microsserviços (Gateway, Pedidos, Estoque, Pagamentos).
* `/deployments`: Configurações para ambiente de desenvolvimento local (Docker Compose).
* `/infrastructure/k8s`: Manifestos de Deployment, Services, ConfigMaps e Secrets.
* `/infrastructure/terraform`: Scripts de provisionamento de infraestrutura na nuvem.
* `/.github/workflows`: Pipelines de automação CI/CD.

## 🚀 Como Executar (Ambiente Local)
1. Certifique-se de ter o Docker instalado.
2. Navegue até a pasta `deployments`.
3. Execute o comando: `docker compose up -d`
4. Acesse o monitoramento em: `localhost:3004` (Grafana).

---
**Autora:** Bruna Batista da Silva Coelho  
**Curso:** Análise e Desenvolvimento de Sistemas - UniFECAF