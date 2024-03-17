# Posthog OpenApi clients

## Global configuration
```
export POSTHOG_PERSONAL_API_KEY=YOUR_POSTHOG_API_KEY
export POSTHOG_BASE_URL="https://eu.posthog.com" or export POSTHOG_BASE_URL="https://app.posthog.com"
```

## Typescript ![NPM](https://img.shields.io/npm/v/posthog-openapi-client)


### Install
```
npm i posthog-openapi-client
yarn add posthog-openapi-client
pnpm install posthog-openapi-client
```

### Setup
```
pnpm install
pnpm build
```

### Usage
```
pnpm start
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
pnpx openapi-typescript-codegen --input schema.yaml --output client/typescript --name PosthogAPIClient
```
