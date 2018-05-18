#!/usr/bin/env bash

if [ ! -d "./_tools" ]; then
  mkdir _tools
elif [ -d "./_tools" ]; then
  rm -R _tools/*
fi
cp -r tools/* _tools/ && \
rm -R tools/* && \
cp -r dist/tools/* tools/