# Configuração do provedor (Exemplo: Google Cloud ou AWS)
provider "google" {
  project = "loja-veloz-projeto"
  region  = "us-central1"
}

# Recurso: Criando o Cluster de Kubernetes da Loja Veloz
resource "google_container_cluster" "primary" {
  name     = "cluster-loja-veloz"
  location = "us-central1"

  # Definindo o tamanho mínimo para economizar custos no MVP
  initial_node_count = 2

  node_config {
    machine_type = "e2-medium"
    disk_size_gb = 20
  }
}

# Output: Para sabermos o endereço do cluster depois de pronto
output "kubernetes_cluster_name" {
  value = google_container_cluster.primary.name
}