terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.40.0"
    }

    external = {
      source  = "hashicorp/external"
      version = "~> 2.3.3"
    }
  }

  required_version = ">= 1.5.0"
  backend "s3" {
    bucket         = "aws-bucket-woolf1"
    key            = "state/terraform.tfstate"
    region         = "eu-central-1"
    encrypt        = true
    dynamodb_table = "terraform-state-lock"
  }
}

provider "aws" {
  region = "eu-central-1"
}


module "perf" {
  source = "./modules/perf"

  lambda_function_name = "website_perf_check"
  lambda_source_dir = "C:/Users/user/Programowanie/OpanujFrontend/frontendApp/lib/lambda-perf"
}
