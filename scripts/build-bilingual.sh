#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

rm -rf "$ROOT/_site"
rm -rf "$ROOT/site-en/_site"

cd "$ROOT"
quarto render

cd "$ROOT/site-en"
quarto render

mkdir -p "$ROOT/_site/en"
cp -a "$ROOT/site-en/_site/." "$ROOT/_site/en/"
