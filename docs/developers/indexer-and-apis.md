# Indexer & APIs

The indexer exists so the frontend doesn’t have to crawl chain state directly.

## Base URL
- https://indexer.crowdwalrus.xyz

## Common endpoints (v1)

### Campaigns
- `GET /v1/campaigns`
- `GET /v1/campaigns/verified`
- `GET /v1/campaigns/discover?page=1&page_size=20&funding_metric=recipient`
- `GET /v1/campaigns/:id`
- `GET /v1/campaigns/:id/donations`
- `GET /v1/campaigns/:id/updates`

### Profiles
- `GET /v1/profiles/:address`
- `GET /v1/profiles/:address/donations`
- `GET /v1/profiles/resolve/:idOrSubname`

### Registries
- `GET /v1/tokens`
- `GET /v1/policies`

### Health / stats
- `GET /v1/stats`

## Pagination
Most list endpoints accept:
- `page`
- `page_size` (bounded)

## Discovery ordering
Discovery lists are typically ordered by phase:
- funding
- active
- open soon
- ended

---

Next: [Contributing](./contributing.md)
