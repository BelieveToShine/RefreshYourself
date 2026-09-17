# AWS — Interview Question Taxonomy

**Phase 1 of the 7-phase pipeline** (see [`docs/superpowers/specs/README.md`](../README.md)).
Source: the user's own AWS interview-roadmap document — built from current (2026) interview
material and AWS's own current Well-Architected guidance, already organized into
Basic/Intermediate/Advanced with priority hints per group. This taxonomy keeps that structure and
those questions intact; **`[new]`** marks the handful of additions from this file's own Phase 2
gap-hunt (logged in full at the bottom) — nothing else is added or reworded beyond the source.

**Explicit scope boundary, carried over from the source's own instruction:** this is not a
certification dump and not a "cover all 200+ services" tutorial. It is an interview-recall system
for 3+ years through senior/lead/principal/architect engineers, prioritizing *why*, *when*,
*when NOT*, comparisons, traps, production troubleshooting, and architecture trade-offs over
service-by-service memorization. AWS's six Well-Architected pillars (Operational Excellence,
Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability) are woven
through the Advanced/scenario groups rather than taught as six isolated theory chapters — this
mirrors the same "don't isolate the theory" instruction Azure will eventually need for its own
Well-Architected-equivalent pillars, and React's own instruction not to teach hooks as a
memorization list.

**Structural decision, per the user's own explicit recommendation:** AWS stays a single track
(`aws/basic|intermediate|advanced/`), not split into separate top-level tracks like "AWS
Security" or "AWS Networking" — those live as subsections inside the three tiers, same pattern
every other track already uses.

---

## BASIC

### 1. AWS Fundamentals
- **Core concept** — What is AWS?
- **Comparison** — IaaS vs. PaaS vs. SaaS?
- **Core concept** — What does "pay-as-you-go" actually mean?
- **Core concept** — What is an AWS Region?
- **Core concept** — What is an Availability Zone?
- **Comparison** — Region vs. Availability Zone?
- **Core concept** — What is an Edge Location?
- **Core concept** — What is AWS's shared responsibility model?
- **Comparison** — Scalability vs. elasticity?
- **Comparison** — Vertical vs. horizontal scaling?
- **Core concept** — What does high availability mean?
- **Core concept** — What does fault tolerance mean?
- **Core concept** — What does durability mean?
- **Comparison** — Availability vs. durability?
- **Core concept** — What does "managed service" mean?
- **Scenario** — Why choose a managed AWS service over managing the infrastructure yourself?

### 2. AWS Global Infrastructure
- **Comparison** — Region vs. AZ vs. Edge Location?
- **Scenario** — Why deploy across multiple AZs?
- **Scenario** — When would you deploy across multiple Regions?
- **Practical** — What determines Region selection?
- **Practical** — How does latency change with Region selection?
- **Comparison** — Regional vs. global AWS infrastructure?
- **Scenario** — What happens if an Availability Zone goes down?
- **Scenario** — How would you design an application to survive an AZ failure?
- **Scenario** — How would you design for a Region failure?

### 3. IAM
This is one of the areas that should not be treated as a small, basic topic.
- **Core concept** — What is IAM?
- **Comparison** — IAM user vs. role?
- **Core concept** — What is an IAM policy?
- **Comparison** — Identity-based vs. resource-based policy?
- **Core concept** — What is least privilege?
- **Core concept** — What is an IAM role?
- **Practical** — Why use roles instead of long-lived access keys?
- **Core concept** — What is STS?
- **Core concept** — What are temporary security credentials?
- **Core concept** — What is MFA?
- **Core concept** — What is an IAM group?
- **Comparison** — User vs. group vs. role?
- **Core concept** — What is an IAM policy statement?
- **Comparison** — `Allow` vs. explicit `Deny`?
- **Understanding** — How does AWS evaluate multiple, possibly conflicting policies?
- **Core concept** — What is an IAM permission boundary?
- **Core concept** — What is cross-account access?
- **Practical** — How would an EC2 instance access S3 securely?
- **Pitfall** — Why shouldn't you put AWS access keys in application code?
- **Trap** — "An EC2 application needs S3 access. Where would you put the credentials?"
  Expected reasoning: an IAM role / instance profile, not hard-coded keys.

### 4. EC2
- **Core concept** — What is EC2?
- **Practical** — EC2 instance types?
- **Comparison** — General purpose vs. compute optimized vs. memory optimized?
- **Core concept** — What is an AMI?
- **Core concept** — What is an instance type?
- **Core concept** — What is EBS?
- **Comparison** — EBS vs. instance store?
- **Comparison** — Stop vs. terminate?
- **Understanding** — What happens to an EBS volume when the instance terminates?
- **Core concept** — What is an Elastic IP?
- **Core concept** — What is EC2 user data?
- **Core concept** — What is an EC2 security group?
- **Comparison** — On-Demand vs. Reserved vs. Spot?
- **Comparison** — Savings Plans vs. Reserved Instances?
- **Scenario** — When would you choose Spot?
- **Scenario** — What happens when an EC2 instance fails?
- **Understanding** — How does Auto Scaling replace failed instances?

### 5. S3
- **Core concept** — What is S3?
- **Comparison** — Object storage vs. block storage?
- **Core concept** — Bucket vs. object?
- **Comparison** — S3 durability vs. availability?
- **Practical** — S3 storage classes?
- **Comparison** — Standard vs. Intelligent-Tiering?
- **Core concept** — Standard-IA?
- **Core concept** — Glacier storage classes?
- **Core concept** — S3 versioning?
- **Core concept** — S3 lifecycle policies?
- **Core concept** — S3 encryption?
- **Comparison** — SSE-S3 vs. SSE-KMS?
- **Comparison** — S3 bucket policy vs. IAM policy?
- **Practical** — How do you prevent public S3 access?
- **Core concept** — What is an S3 presigned URL?
- **Core concept** — What is S3 Object Lock?
- **Core concept** — What is S3 replication?
- **Scenario** — How would you design secure file storage?

Current interview material repeatedly tests storage-class selection and S3 security, not simply
"what is S3?"

### 6. VPC Fundamentals
This deserves significant space.
- **Core concept** — What is a VPC?
- **Core concept** — What is CIDR?
- **Core concept** — What is a subnet?
- **Comparison** — Public vs. private subnet?
- **Understanding** — What actually makes a subnet "public"?
- **Core concept** — What is a route table?
- **Core concept** — What is an Internet Gateway?
- **Core concept** — What is a NAT Gateway?
- **Core concept** — What is a Security Group?
- **Core concept** — What is a Network ACL?
- **Comparison** — Security Group vs. NACL?
- **Core concept** — Private IP vs. public IP vs. Elastic IP?
- **Understanding** — How does traffic flow from the internet to an EC2 instance?
- **Practical** — How does a private EC2 instance access the internet?
- **Pitfall** — Why shouldn't databases normally sit in public subnets?
- **[new] Practical** — How do you access a private EC2 instance for operational/administrative
  purposes without exposing it to the internet — what is a bastion host, and what does Systems
  Manager Session Manager replace it with?

### 7. Load Balancing & Auto Scaling
- **Core concept** — What is Elastic Load Balancing?
- **Comparison** — ALB vs. NLB?
- **Scenario** — When would you choose ALB?
- **Scenario** — When would you choose NLB?
- **Core concept** — What is a target group?
- **Core concept** — What is a health check?
- **Understanding** — What happens when an instance fails its health check?
- **Core concept** — What is Auto Scaling?
- **Core concept** — What is an Auto Scaling Group?
- **Comparison** — Scaling out vs. scaling up?
- **Comparison** — Target tracking vs. step scaling?
- **Understanding** — How does ALB + ASG together provide high availability?
- **Scenario** — What happens during a sudden traffic spike?
- **[new] Practical** — How do you attach HTTPS to an ALB — what is AWS Certificate Manager, and
  where does TLS actually terminate?

### 8. RDS
- **Core concept** — What is Amazon RDS?
- **Scenario** — Why use RDS instead of a self-managed database on EC2?
- **Practical** — What databases does RDS support?
- **Core concept** — Multi-AZ?
- **Core concept** — Read replica?
- **Comparison** — Multi-AZ vs. Read Replica?
- **Core concept** — Automated backups?
- **Core concept** — Snapshots?
- **Core concept** — Point-in-time recovery?
- **Comparison** — RDS vs. Aurora?
- **Scenario** — When would you choose Aurora?
- **Understanding** — How does RDS handle failover?
- **Pitfall** — Can a read replica be used for high availability on its own?
- **Practical** — How do you scale RDS?

### 9. Lambda
- **Core concept** — What is AWS Lambda?
- **Scenario** — When should you use Lambda?
- **Comparison** — Lambda vs. EC2?
- **Comparison** — Lambda vs. ECS?
- **Core concept** — What is a Lambda trigger?
- **Core concept** — What is a cold start?
- **Practical** — How do you reduce cold-start impact?
- **Core concept** — What is Lambda concurrency?
- **Comparison** — Reserved vs. provisioned concurrency?
- **Core concept** — What is a Lambda timeout?
- **Core concept** — What is Lambda memory configuration?
- **Understanding** — How does Lambda scale?
- **Practical** — How do you handle Lambda failures?
- **Understanding** — How does Lambda integrate with SQS / API Gateway / EventBridge?

### 10. CloudWatch
- **Core concept** — What is CloudWatch?
- **Comparison** — Metrics vs. logs?
- **Core concept** — CloudWatch alarms?
- **Core concept** — CloudWatch Logs?
- **Core concept** — CloudWatch dashboards?
- **Practical** — What can you monitor with CloudWatch?
- **Comparison** — CloudWatch vs. CloudTrail?
- **Scenario** — How would you troubleshoot an EC2 performance problem?
- **Scenario** — How would you detect Lambda failures?
- **Scenario** — How would you create an alert for high CPU?
- **Scenario** — How would you monitor application errors?

### 11. Route 53
- **Core concept** — What is Route 53?
- **Core concept** — What is DNS?
- **Practical** — Route 53 routing policies?
- **Comparison** — Simple vs. weighted routing?
- **Core concept** — Latency-based routing?
- **Core concept** — Failover routing?
- **Core concept** — Geolocation routing?
- **Core concept** — Route 53 health checks?
- **Scenario** — How would Route 53 help with disaster recovery?
- **Comparison** — Route 53 vs. CloudFront?

---

## INTERMEDIATE

### 12. VPC & Advanced Networking
- **Core concept** — VPC peering?
- **Core concept** — Transit Gateway?
- **Core concept** — VPC endpoint?
- **Comparison** — Gateway endpoint vs. interface endpoint?
- **Core concept** — NAT Gateway?
- **Comparison** — NAT Gateway vs. NAT Instance?
- **Core concept** — Internet Gateway?
- **Core concept** — Egress-only Internet Gateway?
- **Core concept** — PrivateLink?
- **Core concept** — VPC Flow Logs?
- **Comparison** — VPC peering vs. Transit Gateway?
- **Scenario** — When would you use Transit Gateway?
- **Scenario** — How would multiple VPCs communicate with each other?
- **Scenario** — How would on-premises infrastructure connect to AWS?
- **[new] Practical** — How does Systems Manager Session Manager give operational access to a
  private instance without a bastion host, an open inbound SSH port, or a public IP?

### 13. Hybrid Connectivity
- **Comparison** — VPN vs. Direct Connect?
- **Core concept** — Site-to-Site VPN?
- **Core concept** — AWS Direct Connect?
- **Scenario** — When would you choose Direct Connect?
- **Scenario** — What happens if Direct Connect fails?
- **Scenario** — How would you build redundant hybrid connectivity?
- **Practical** — Transit Gateway + Direct Connect?
- **Scenario** — How would you connect multiple on-premises networks to AWS?

### 14. IAM & Security Architecture
- **Comparison** — IAM role vs. user (revisited at architecture depth)?
- **Core concept** — Cross-account IAM role?
- **Core concept** — AWS Organizations?
- **Core concept** — Service Control Policies?
- **Core concept** — Permission boundaries?
- **Core concept** — IAM Identity Center?
- **Core concept** — KMS?
- **Core concept** — Secrets Manager?
- **Core concept** — Parameter Store?
- **Comparison** — Secrets Manager vs. Parameter Store?
- **Practical** — How do you rotate secrets?
- **Practical** — How do you encrypt data at rest?
- **Practical** — How do you encrypt data in transit?
- **Practical** — How do you implement least privilege in practice?
- **Practical** — How do you audit AWS API activity?

### 15. AWS Security Services
- **Core concept** — AWS WAF?
- **Core concept** — AWS Shield?
- **Core concept** — GuardDuty?
- **Core concept** — Inspector?
- **Core concept** — Macie?
- **Core concept** — Security Hub?
- **Core concept** — CloudTrail?
- **Core concept** — AWS Config?
- **Practical** — What does each of these services actually solve?
- **Comparison** — GuardDuty vs. Inspector?
- **Comparison** — CloudTrail vs. CloudWatch?
- **Comparison** — WAF vs. Shield?
- **Scenario** — How would you detect compromised credentials?

### 16. EC2 Scaling & Architecture
- **Practical** — Auto Scaling strategies?
- **Core concept** — Launch template?
- **Core concept** — Launch configuration (and why it's legacy vs. launch templates)?
- **Core concept** — Instance refresh?
- **Core concept** — Health checks (ASG-level)?
- **Core concept** — Lifecycle hooks?
- **Core concept** — Warm pools?
- **Practical** — Spot instances inside an Auto Scaling Group?
- **Scenario** — How do you design an EC2 application for unpredictable traffic?
- **Scenario** — How do you deploy without downtime?

### 17. S3 Advanced
- **Core concept** — Versioning (revisited at depth)?
- **Core concept** — Lifecycle policies (revisited at depth)?
- **Core concept** — Cross-region replication?
- **Core concept** — Same-region replication?
- **Core concept** — Object Lock?
- **Core concept** — Multipart upload?
- **Core concept** — Presigned URLs (revisited at depth)?
- **Core concept** — S3 event notifications?
- **Practical** — EventBridge + S3 integration?
- **Scenario** — How would you protect S3 against accidental deletion?
- **Scenario** — How would you design S3 for compliance?
- **[new] Comparison** — S3 vs. EFS — what is Amazon EFS, and when does a workload actually need
  shared, networked file storage instead of object storage?

### 18. DynamoDB
- **Core concept** — What is DynamoDB?
- **Comparison** — DynamoDB vs. RDS?
- **Core concept** — Partition key?
- **Core concept** — Sort key?
- **Core concept** — Composite key?
- **Core concept** — GSI?
- **Core concept** — LSI?
- **Comparison** — GSI vs. LSI?
- **Comparison** — Provisioned vs. on-demand capacity?
- **Core concept** — DynamoDB Streams?
- **Core concept** — TTL?
- **Comparison** — Eventually consistent vs. strongly consistent reads?
- **Pitfall** — What causes hot partitions?
- **Practical** — How do you design partition keys?
- **Practical** — How would you scale DynamoDB?
- **Scenario** — When should you NOT use DynamoDB?

### 19. Aurora & Database Architecture
- **Comparison** — Aurora vs. RDS?
- **Understanding** — Aurora's storage/compute architecture?
- **Core concept** — Aurora read replicas?
- **Core concept** — Aurora Serverless?
- **Core concept** — Multi-AZ (Aurora)?
- **Practical** — Read scaling with Aurora?
- **Understanding** — Aurora failover?
- **Comparison** — RDS vs. Aurora vs. DynamoDB?
- **Scenario** — How do you select a database for a given workload?

### 20. ElastiCache
- **Scenario** — Why use ElastiCache?
- **Comparison** — Redis vs. Memcached?
- **Practical** — What should actually be cached?
- **Core concept** — Cache-aside pattern?
- **Practical** — Cache invalidation?
- **Scenario** — What happens when the cache fails?
- **Understanding** — How does caching improve database performance?
- **Practical** — Where would Redis sit in an AWS architecture?

### 21. API Gateway
- **Core concept** — What is API Gateway?
- **Comparison** — API Gateway vs. ALB?
- **Comparison** — REST API vs. HTTP API?
- **Practical** — API Gateway + Lambda integration?
- **Practical** — Authentication and authorization at the API Gateway layer?
- **Core concept** — Throttling?
- **Core concept** — Rate limiting?
- **Core concept** — Caching at the API Gateway layer?
- **Core concept** — Request/response transformation?
- **Scenario** — How would you protect an API?
- **Scenario** — How would you handle API versioning?
- **[new] Practical** — How do you authenticate end users of a public-facing app (not AWS
  principals) — what is Amazon Cognito, and how does it plug into API Gateway/ALB (user pools vs.
  identity pools)?

### 22. Messaging
- **Comparison** — SQS vs. SNS?
- **Comparison** — Queue vs. pub/sub?
- **Comparison** — Standard SQS vs. FIFO SQS?
- **Core concept** — Visibility timeout?
- **Core concept** — Dead-letter queue?
- **Core concept** — Long polling?
- **Core concept** — Message retention?
- **Pitfall** — What does "exactly-once processing" actually guarantee, if anything?
- **Core concept** — What does at-least-once delivery mean?
- **Practical** — How do you make a consumer idempotent?
- **Core concept** — SNS → SQS fanout?
- **Comparison** — When would you use EventBridge instead of SNS/SQS?

These comparisons repeatedly appear in current interview material.

### 23. EventBridge
- **Core concept** — What is EventBridge?
- **Comparison** — EventBridge vs. SNS?
- **Comparison** — EventBridge vs. SQS?
- **Core concept** — Event-driven architecture?
- **Core concept** — Event bus?
- **Core concept** — Rules?
- **Core concept** — Event patterns?
- **Scenario** — When would you choose EventBridge?
- **Practical** — How do you route events between services/accounts?

### 24. Kinesis
- **Core concept** — What is Kinesis?
- **Core concept** — Kinesis Data Streams?
- **Core concept** — Kinesis Firehose?
- **Comparison** — Streams vs. Firehose?
- **Comparison** — Kinesis vs. SQS?
- **Comparison** — Kinesis vs. Kafka/MSK?
- **Core concept** — Partition keys (Kinesis)?
- **Core concept** — Shards?
- **Core concept** — Ordering guarantees?
- **Practical** — Consumer scaling?
- **Scenario** — When would you choose Kinesis?

### 25. Containers
- **Core concept** — What is ECS?
- **Comparison** — ECS vs. EKS?
- **Comparison** — ECS vs. EC2?
- **Core concept** — ECS Fargate?
- **Core concept** — What is Fargate?
- **Comparison** — ECS task vs. service?
- **Core concept** — What is EKS?
- **Comparison** — Kubernetes vs. ECS?
- **Scenario** — When would you choose ECS?
- **Scenario** — When would you choose EKS?
- **Comparison** — Fargate vs. EC2 launch type?
- **Understanding** — How do containers communicate with each other?
- **Scenario** — How would you deploy microservices on ECS?

Current interview sources repeatedly include EC2 vs. Lambda vs. ECS/EKS as a decision question
rather than isolated service definitions.

### 26. Observability
- **Comparison** — CloudWatch vs. CloudTrail (revisited)?
- **Comparison** — CloudWatch vs. X-Ray?
- **Comparison** — Metrics vs. logs vs. traces?
- **Core concept** — Distributed tracing?
- **Scenario** — How would you troubleshoot a slow API?
- **Practical** — How do you correlate requests across microservices?
- **Practical** — What should you actually monitor?
- **Practical** — What should trigger an alarm?
- **Scenario** — How would you investigate a production incident?

### 27. Infrastructure as Code
- **Core concept** — What is Infrastructure as Code?
- **Core concept** — CloudFormation?
- **Comparison** — CloudFormation vs. Terraform?
- **Core concept** — AWS CDK?
- **Comparison** — CDK vs. CloudFormation?
- **Core concept** — What is a stack?
- **Core concept** — What is drift?
- **Practical** — How do you manage infrastructure across environments?
- **Practical** — How do you handle secrets in IaC?
- **Practical** — How do you safely deploy infrastructure changes?
- **Scenario** — What happens when a CloudFormation deployment fails?

### 28. CI/CD & Deployment
- **Core concept** — Blue/green deployment?
- **Core concept** — Rolling deployment?
- **Core concept** — Canary deployment?
- **Core concept** — Immutable deployment?
- **Core concept** — CodePipeline?
- **Core concept** — CodeBuild?
- **Core concept** — CodeDeploy?
- **Practical** — ECS deployment strategies?
- **Practical** — Lambda deployment strategies?
- **Scenario** — How do you achieve zero-downtime deployment?
- **Scenario** — How would you roll back a bad production deployment?

### 29. Backup & Disaster Recovery
- **Comparison** — Backup vs. replication?
- **Core concept** — RPO?
- **Core concept** — RTO?
- **Core concept** — What is disaster recovery?
- **Core concept** — Backup and restore (as a DR strategy)?
- **Core concept** — Pilot light?
- **Core concept** — Warm standby?
- **Core concept** — Multi-site active/active?
- **Scenario** — When would you choose each DR strategy?
- **Scenario** — How would you design DR for RDS?
- **Practical** — S3 cross-region replication (as a DR mechanism)?
- **Core concept** — DynamoDB Global Tables?
- **Scenario** — How would you actually test DR?

### 30. CloudFront & Content Delivery **[new group]**
CloudFront is referenced repeatedly in the source as a comparison point (Route 53 vs. CloudFront,
CloudFront vs. Global Accelerator, the multi-region reference diagram uses CloudFront as a
building block) but is never itself explained anywhere — the same class of gap as a topic named
in an outline's own tree but never actually written. See the Gap-hunt log below for the full
reasoning.
- **[new] Core concept** — What is CloudFront, and what problem does a CDN solve?
- **[new] Practical** — What can act as a CloudFront origin — S3, an ALB, or a custom origin?
- **[new] Core concept** — How does CloudFront caching behavior work (TTL, cache keys, query
  string/header/cookie forwarding)?
- **[new] Practical** — How do you invalidate a CloudFront cache, and what does that actually
  cost/take?
- **[new] Core concept** — Signed URLs and signed cookies — what problem do they solve?
- **[new] Comparison** — CloudFront vs. Global Accelerator — when would you reach for each?
- **[new] Practical** — How does CloudFront combine with AWS WAF and ACM for a public-facing site?

---

## ADVANCED
This is where the roadmap becomes architect/interview reasoning, not service memorization.

### 31. Well-Architected Framework
AWS currently defines six pillars: Operational Excellence, Security, Reliability, Performance
Efficiency, Cost Optimization, Sustainability.
- **Core concept** — What is the AWS Well-Architected Framework?
- **Practical** — Explain the six pillars.
- **Practical** — How do you actually use Well-Architected during a design?
- **Scenario** — How do you balance reliability vs. cost?
- **Scenario** — How do you balance performance vs. cost?
- **Scenario** — What architectural trade-offs have you made, and why?
- **Scenario** — How would you review an existing AWS architecture?
- **Scenario** — What questions would you ask before redesigning a workload?

### 32. High Availability Architecture
- **Scenario** — How would you design a highly available web application?
- **Practical** — How do you eliminate single points of failure?
- **Practical** — How do you design across multiple AZs?
- **Scenario** — What happens if one AZ disappears entirely?
- **Practical** — How do you make the application stateless?
- **Practical** — Where would sessions live?
- **Scenario** — How would you handle database failover?
- **Scenario** — How would you handle a cache failure?
- **Scenario** — How would you design for graceful degradation?

### 33. Multi-Region Architecture
- **Scenario** — When is multi-region actually justified?
- **Comparison** — Active/active vs. active/passive?
- **Practical** — Route 53 failover (at architecture depth)?
- **Core concept** — Global Accelerator?
- **Practical** — CloudFront's role in a multi-region design?
- **Practical** — Cross-region S3 replication (at architecture depth)?
- **Core concept** — DynamoDB Global Tables (at architecture depth)?
- **Core concept** — Aurora Global Database?
- **Scenario** — How do you handle database writes across regions?
- **Pitfall** — How do you avoid split-brain?
- **Practical** — How do you keep configuration synchronized across regions?
- **Scenario** — What are the cost and operational consequences of going multi-region?

### 34. Serverless Architecture
- **Scenario** — Design a serverless REST API.
- **Practical** — API Gateway → Lambda → DynamoDB — how does the request actually flow?
- **Practical** — How do you handle authentication in a serverless API?
- **Practical** — How do you handle asynchronous processing?
- **Practical** — Lambda → SQS integration?
- **Practical** — Lambda → EventBridge integration?
- **Core concept** — Step Functions — what problem does it solve that chained Lambdas don't?
- **[new] Comparison** — Lambda-orchestrates-Lambda vs. Step Functions — when does a workflow
  actually need a state machine instead of one function calling the next?
- **Scenario** — When is Lambda a bad choice?
- **Practical** — How do you handle cold starts at the architecture level?
- **Practical** — How do you control concurrency?
- **Scenario** — How do you prevent downstream overload from a Lambda burst?
- **Practical** — How do you make serverless systems observable?
- **[new] Trap** — What happens when many concurrent Lambda invocations exhaust a downstream
  RDS/Aurora connection limit, and what is RDS Proxy for?

### 35. Microservices on AWS
- **Scenario** — How would you deploy microservices on AWS?
- **Comparison** — ECS vs. EKS vs. Lambda for microservices?
- **Comparison** — API Gateway vs. ALB for service entry?
- **Comparison** — Synchronous vs. asynchronous communication between services?
- **Comparison** — SQS vs. SNS vs. EventBridge for inter-service communication?
- **Practical** — How do you handle service discovery?
- **Practical** — How do you handle distributed transactions?
- **Core concept** — What is the Saga pattern?
- **Practical** — How do you make services idempotent?
- **Practical** — How do you handle retries safely?
- **Pitfall** — How do you prevent cascading failures?
- **Practical** — How do you implement centralized observability across services?

### 36. Data Architecture
- **Comparison** — RDS vs. Aurora vs. DynamoDB (at architecture depth)?
- **Scenario** — When should you use relational vs. NoSQL?
- **Scenario** — Designing for a read-heavy workload?
- **Scenario** — Designing for a write-heavy workload?
- **Scenario** — Designing for high-volume event data?
- **Core concept** — What is a data lake architecture?
- **Practical** — S3 + Glue + Athena, how do they fit together?
- **Comparison** — Redshift vs. Athena?
- **Comparison** — Kinesis vs. MSK?
- **Scenario** — How would you design an analytics platform?
- **Practical** — How would you separate transactional and analytical workloads?

### 37. Cost Optimization / FinOps
Cost is not an optional architect topic — it is explicitly one of AWS's six Well-Architected
pillars.
- **Scenario** — How do you reduce AWS costs?
- **Practical** — EC2 rightsizing?
- **Core concept** — Savings Plans (at cost-strategy depth)?
- **Core concept** — Reserved Instances (at cost-strategy depth)?
- **Practical** — Spot as a cost lever?
- **Practical** — S3 lifecycle / storage tiering as a cost lever?
- **Pitfall** — NAT Gateway data-processing costs?
- **Pitfall** — Cross-AZ/cross-region data transfer costs?
- **Practical** — CloudFront as a cost/performance lever?
- **Practical** — The serverless cost model — what actually drives the bill?
- **Scenario** — How do you find unexpected AWS spend?
- **Practical** — How do you design for cost visibility?
- **Scenario** — Cost vs. reliability trade-offs?

### 38. Reliability Engineering
- **Core concept** — What is fault tolerance (at mechanism depth)?
- **Core concept** — What is graceful degradation (at mechanism depth)?
- **Core concept** — What is a retry?
- **Core concept** — Exponential backoff?
- **Core concept** — Jitter?
- **Core concept** — Circuit breaker?
- **Core concept** — Bulkhead?
- **Core concept** — Timeout (as a reliability primitive)?
- **Core concept** — Idempotency (as a reliability primitive)?
- **Core concept** — Backpressure?
- **Pitfall** — How do you prevent retry storms?
- **Practical** — How do you design for partial failure?
- **Practical** — How do you actually test failure scenarios?

### 39. AWS Security Architecture
- **Scenario** — How would you secure an AWS workload end-to-end?
- **Practical** — IAM least privilege at the architecture level?
- **Practical** — Network isolation as a security layer?
- **Practical** — Encryption strategy across the stack?
- **Practical** — KMS at the architecture level?
- **Practical** — Secrets Manager at the architecture level?
- **Practical** — WAF at the architecture level?
- **Practical** — Shield at the architecture level?
- **Practical** — CloudTrail at the architecture level?
- **Practical** — GuardDuty at the architecture level?
- **Practical** — Security Hub at the architecture level?
- **Practical** — Organization-level controls?
- **Practical** — SCPs at the architecture level?
- **Practical** — Cross-account security patterns?
- **Scenario** — How would you respond to compromised AWS credentials?

### 40. Migration
- **Scenario** — How would you migrate an on-premises application to AWS?
- **Comparison** — Rehost vs. replatform vs. refactor?
- **Practical** — Database migration approach?
- **Core concept** — AWS DMS?
- **Practical** — Hybrid connectivity during a migration?
- **Practical** — Direct Connect's role during migration?
- **Scenario** — How do you minimize downtime during migration?
- **Practical** — How do you validate migrated data?
- **Scenario** — How would you migrate a monolith?
- **Practical** — What would you migrate first, and why?
- **Practical** — What are the risks of a given migration approach?

### 41. Production Troubleshooting
These scenario-oriented questions are increasingly emphasized in AWS interview preparation for
experienced candidates.
- **Scenario** — An EC2 application suddenly has high CPU. What do you check?
- **Scenario** — An application cannot connect to RDS. What do you check?
- **Scenario** — A private-subnet instance cannot access the internet. What do you check?
- **Scenario** — An S3 upload suddenly returns `AccessDenied`. What do you check?
- **Scenario** — A Lambda function is timing out. What do you check?
- **Scenario** — A Lambda function is receiving duplicate events. What do you check?
- **Scenario** — SQS messages keep reappearing. What do you check?
- **Scenario** — API latency suddenly increases. What do you check?
- **Scenario** — An ALB is returning 5xx errors. What do you check?
- **Scenario** — One Availability Zone is failing. What do you check?
- **Scenario** — The AWS bill suddenly increases. What do you check?
- **Scenario** — Users from one geographic region report high latency. What do you check?
- **Scenario** — A production deployment caused failures. How do you roll it back?

### 42. Architecture Design Questions
This should be one of the largest advanced sections — whiteboard-style design prompts, each
followed by a chain of interviewer pushback.
- **Scenario** — Design a highly available web application (Route 53 → CloudFront/WAF → ALB →
  EC2/ECS → RDS/Aurora), then: what if AZ-1 fails? What if traffic increases 10×? What if the
  database becomes the bottleneck? How do you reduce cost? How do you make it multi-region?
- **Scenario** — Design a serverless API (API Gateway → Lambda → DynamoDB), then: how do you
  authenticate? What happens under 100× traffic? What happens if DynamoDB throttles? How do you
  handle retries?
- **Scenario** — Design an event-driven system (Producer → EventBridge/SNS → SQS → Consumers),
  then: how do you handle duplicates? What happens when consumers are down? How do you replay
  events?
- **Scenario** — Design a global application (Route 53 → CloudFront → multi-region application →
  global data strategy), then: active-active or active-passive? How do you handle data
  consistency? What's the DR strategy?

### 43. Architect-Level Trade-off Questions
These are extremely valuable for the 3–16+ year / architect audience. The answer should never
simply be "X is better" — it should be requirement → constraints → options → trade-off →
decision. That reasoning chain is the actual behavior this section is training.
- **Comparison** — EC2 vs. ECS vs. EKS vs. Lambda — how do you decide?
- **Comparison** — RDS vs. Aurora vs. DynamoDB?
- **Comparison** — SQS vs. SNS vs. EventBridge?
- **Comparison** — ALB vs. API Gateway?
- **Comparison** — CloudFront vs. Global Accelerator?
- **Comparison** — Multi-AZ vs. Multi-Region?
- **Comparison** — S3 vs. EFS vs. EBS?
- **Comparison** — Redis vs. database-level caching?
- **Comparison** — ECS vs. EKS — the operational trade-off, not just the feature list?
- **Comparison** — Managed service vs. self-managed infrastructure?
- **Comparison** — Serverless vs. containers?
- **Comparison** — Strong consistency vs. eventual consistency?
- **Comparison** — Reliability vs. cost?
- **Comparison** — Performance vs. cost?
- **Comparison** — Simplicity vs. flexibility?

### 44. Sustainability
Kept deliberately small, but not omitted — AWS explicitly treats it as one of the six pillars.
- **Core concept** — What is AWS's approach to sustainability?
- **Practical** — How can architecture choices reduce resource consumption?
- **Practical** — Right-sizing as a sustainability lever?
- **Practical** — Serverless as a sustainability lever?
- **Practical** — Storage lifecycle as a sustainability lever?
- **Practical** — Data-transfer reduction as a sustainability lever?
- **Practical** — Region selection's effect on sustainability?
- **Scenario** — How can sustainability conflict with cost or performance goals?
- **Practical** — How does sustainability fit into the Well-Architected Framework?

---

## Gap-hunt log

Per [`gap-hunting.md`](../../rules/gap-hunting.md): the source document is unusually thorough
already — it explicitly cites current (2026) interview material and AWS's own Well-Architected
guidance, and self-audits its own scope (six pillars woven through Advanced rather than isolated,
explicit "don't cover 200+ services" instruction). That made this a smaller hunt than SQL's (12
additions) or Angular's initial one — most of what a thorough senior-level AWS reference would
cover is already here. Six real, narrow gaps found; each logged below with why it's a genuine gap
and not a duplicate of something already asked.

**Added:**

| Added | Group | Why |
|---|---|---|
| Bastion host / Systems Manager Session Manager | 6 (Basic VPC Fundamentals) + 12 (Intermediate VPC & Advanced Networking) | The source asks "why shouldn't databases sit in public subnets?" but never answers the natural operational follow-up — *then how do you actually reach a private resource?* This is a routine, very commonly asked practical question, and Session Manager is the modern answer interviewers now expect over a bastion host. |
| ACM & HTTPS termination on ALB | 7 (Basic Load Balancing) | ALB is covered in real depth, but nothing anywhere explains how HTTPS/TLS actually gets attached to one — an extremely common, very basic practical question with no coverage at all in the source. |
| CloudFront & Content Delivery (whole new group, #30) | New Intermediate group | CloudFront is referenced as a comparison point three separate times (Route 53 vs. CloudFront, CloudFront vs. Global Accelerator, the multi-region reference diagram) but never itself explained — the same class of gap as a topic named in an outline's own tree but never actually written (this exact failure mode hit the React track's "Testing Strategy" section earlier in this project). Given it's referenced repeatedly, it earns a full group rather than a folded-in question. |
| Amazon Cognito | 21 (Intermediate API Gateway) | The source asks "authentication and authorization?" under API Gateway but never names how end-*user* auth (not AWS-principal auth, which IAM already covers) actually gets implemented — Cognito is the standard answer and a very common serverless-interview topic entirely absent from the source. |
| Amazon EFS | 17 (Intermediate S3 Advanced) | The source's own Advanced trade-off group (#43) asks "S3 vs. EFS vs. EBS?" but EFS itself is never introduced anywhere before that comparison is asked — the comparison would be unanswerable from this taxonomy alone without this addition. |
| RDS Proxy / Lambda-to-RDS connection exhaustion | 34 (Advanced Serverless Architecture) | A textbook senior-level serverless gotcha — the source's Lambda group (#9) and RDS group (#8) never connect to each other, so the very common "what breaks when serverless meets a connection-limited database" question has no answer anywhere in the source. |
| Step Functions vs. chained Lambdas (comparison) | 34 (Advanced Serverless Architecture) | Step Functions is named once in passing under the source's own Serverless Architecture bullet list but the natural "when do you actually need a state machine instead of one Lambda calling the next" comparison question was never asked. Folded into the existing group rather than given its own page — its interview weight is real but not large enough to justify a standalone page next to Lambda and API Gateway. |

**Considered and explicitly excluded:**

| Considered | Why excluded |
|---|---|
| Elastic Beanstalk | Legacy PaaS; rarely surfaces in senior/staff interviews now that ECS/EKS/Lambda dominate. Adding it would work against the source's own explicit "don't cover 200+ services" instruction. |
| AWS Batch | Niche; low interview frequency for the general senior-engineer audience this track targets. |
| Global Accelerator as its own page | Already an adequate comparison point inside Multi-Region Architecture (#33) and the new Architect-Level Trade-offs group (#43); a dedicated page would be disproportionate to its actual interview frequency. |
| AWS Certificate Manager as its own page | Folded into Load Balancing instead — it's a supporting/enabling service for HTTPS, not an independent decision point the way ALB vs. NLB or RDS vs. Aurora is. |
| Landing Zone / Control Tower | Governance-at-scale, deep architect-only territory beyond what the "3+ years to architect" audience typically gets asked in a single interview; Organizations/SCPs (#14, #39) already cover the practical core. |
| Elastic Network Interface (ENI) internals | Networking trivia, not a "why/when/trade-off" question — works against the source's own stated optimization target. |
