variable "project_id" {
  description = "GCP project ID"
  type        = string
}

variable "region" {
  description = "GCP region"
  type        = string
  default     = "us-central1"  
}

variable "credentials_file" {
  description = "Path to GCP credentials JSON file"
  type        = string
}

variable "zone" {
  default = "us-central1-a" 
}