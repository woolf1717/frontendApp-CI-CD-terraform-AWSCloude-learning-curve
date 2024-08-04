resource "aws_s3_bucket" "tfer--aws-002D-bucket-002D-woolf" {
  bucket        = "aws-bucket-woolf"
  force_destroy = "false"

  grant {
    id          = "24c7b7850778e61239726bb8d612d8a72308745aff54ea3f07ca786547e3425b"
    permissions = ["FULL_CONTROL"]
    type        = "CanonicalUser"
  }

  object_lock_enabled = "false"
  request_payer       = "BucketOwner"

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }

      bucket_key_enabled = "false"
    }
  }

  tags = {
    Environment = "Dev"
    Name        = "My bucket"
  }

  tags_all = {
    Environment = "Dev"
    Name        = "My bucket"
  }

  versioning {
    enabled    = "false"
    mfa_delete = "false"
  }

  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket" "tfer--awsbucketwoolf1717" {
  bucket        = "awsbucketwoolf1717"
  force_destroy = "false"

  grant {
    id          = "24c7b7850778e61239726bb8d612d8a72308745aff54ea3f07ca786547e3425b"
    permissions = ["FULL_CONTROL"]
    type        = "CanonicalUser"
  }

  object_lock_enabled = "false"

  policy = <<POLICY
{
  "Statement": [
    {
      "Action": "s3:GetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Resource": "arn:aws:s3:::awsbucketwoolf1717/*",
      "Sid": "PublicReadGetObject"
    }
  ],
  "Version": "2012-10-17"
}
POLICY

  request_payer = "BucketOwner"

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }

      bucket_key_enabled = "true"
    }
  }

  versioning {
    enabled    = "false"
    mfa_delete = "false"
  }

  website {
    index_document = "index.html"
  }
}
