#!/usr/bin/env bash

# Runs serverless local tests
serverless invoke local --function games --path mocks/get-games-no-date.json
