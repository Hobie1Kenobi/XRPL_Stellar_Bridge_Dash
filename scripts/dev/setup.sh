#!/bin/bash

# Install dependencies
npm install

# Setup environment
if [ ! -f .env.local ]; then
  cp .env.example .env.local
fi

# Setup husky
npx husky install

# Build initial project
npm run build
