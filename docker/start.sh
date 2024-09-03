#!/bin/sh

npm install

if [ ! -d "/app/.next" ]; then
  npm run build
fi
npm run dev