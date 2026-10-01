#!/bin/bash

echo "=== 8 + 4 ==="
curl -s -X POST http://localhost:3000/adicao \
  -H "Content-Type: application/json" \
  -d '{"a":8,"b":4}'

echo -e "\n\n=== 15 - 7 ==="
curl -s -X POST http://localhost:3000/subtracao \
  -H "Content-Type: application/json" \
  -d '{"a":15,"b":7}'

echo -e "\n\n=== 6 * 3 ==="
curl -s -X POST http://localhost:3000/multiplicacao \
  -H "Content-Type: application/json" \
  -d '{"a":6,"b":3}'

echo -e "\n\n=== 20 / 5 ==="
curl -s -X POST http://localhost:3000/divisao \
  -H "Content-Type: application/json" \
  -d '{"a":20,"b":5}'

echo -e "\n\n=== 10 / 0 ==="
curl -s -X POST http://localhost:3000/divisao \
  -H "Content-Type: application/json" \
  -d '{"a":10,"b":0}'

echo