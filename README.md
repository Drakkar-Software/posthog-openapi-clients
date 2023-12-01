# posthog-api

## Global configuration
```
export POSTHOG_PERSONAL_API_KEY=YOUR_POSTHOG_API_KEY
export POSTHOG_BASE_URL="https://eu.posthog.com" or export POSTHOG_BASE_URL="https://app.posthog.com"
```

## Typescript

### Setup
```
pnpm install
pnpm build
```

### Usage
```
pnpm projects-example
```

## Developers

### Regenerate client
Download the schema with an authenticated request:
```
wget https://app.posthog.com/api/schema/ -O schema.yaml
```

OR

```
wget https://eu.posthog.com/api/schema/ -O schema.yaml
```

#### Typescript
```
pnpx openapi-typescript-codegen --input schema.yaml --output client/typescript
```
