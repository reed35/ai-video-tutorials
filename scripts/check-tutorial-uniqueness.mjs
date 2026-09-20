#!/usr/bin/env node

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tutorialsPath = join(__dirname, '../lib/tutorials.ts');
const tutorialsContent = readFileSync(tutorialsPath, 'utf-8');

const arrayMatch = tutorialsContent.match(/export const tutorials[^=]*=\s*\[([\s\S]*?)\n\];/);
if (!arrayMatch) {
  console.error('❌ Could not parse tutorials array');
  process.exit(1);
}

const arrayContent = arrayMatch[1];

const lines = arrayContent.split('\n');
let depth = 0;
let currentTutorial = [];
const tutorialBlocks = [];

for (const line of lines) {
  const openBraces = (line.match(/\{/g) || []).length;
  const closeBraces = (line.match(/\}/g) || []).length;
  
  if (depth === 0 && openBraces > 0 && line.trim().startsWith('{')) {
    currentTutorial = [line];
    depth += openBraces - closeBraces;
  } else if (depth > 0) {
    currentTutorial.push(line);
    depth += openBraces - closeBraces;
    
    if (depth === 0) {
      tutorialBlocks.push(currentTutorial.join('\n'));
      currentTutorial = [];
    }
  }
}

const ids = [];
const sourceUrls = [];

for (const block of tutorialBlocks) {
  const topLevelOnly = block.split(/\b(?:references_detail|storyboard|steps):/)[0];
  
  const idMatch = topLevelOnly.match(/^\s*\{\s*\n\s*id:\s*["']([^"']+)["']/);
  if (idMatch) {
    ids.push(idMatch[1]);
  }
  
  const sourceUrlMatch = topLevelOnly.match(/\bsourceUrl:\s*["']([^"']+)["']/);
  if (sourceUrlMatch && sourceUrlMatch[1].trim()) {
    sourceUrls.push(sourceUrlMatch[1]);
  }
}

function findDuplicates(arr, fieldName) {
  const counts = new Map();
  const duplicates = [];

  for (const value of arr) {
    counts.set(value, (counts.get(value) || 0) + 1);
  }

  for (const [value, count] of counts) {
    if (count > 1) {
      duplicates.push({ value, count });
    }
  }

  return duplicates;
}

let hasError = false;

const duplicateIds = findDuplicates(ids, 'id');
if (duplicateIds.length > 0) {
  hasError = true;
  console.error('\n❌ Duplicate tutorial IDs found:');
  for (const dup of duplicateIds) {
    console.error(`   "${dup.value}" appears ${dup.count} times`);
  }
}

const duplicateUrls = findDuplicates(sourceUrls, 'sourceUrl');
if (duplicateUrls.length > 0) {
  hasError = true;
  console.error('\n❌ Duplicate sourceUrls found:');
  for (const dup of duplicateUrls) {
    console.error(`   "${dup.value}" appears ${dup.count} times`);
  }
}

if (hasError) {
  console.error('\n💡 Fix: Remove duplicate entries from lib/tutorials.ts\n');
  process.exit(1);
} else {
  console.log('✅ All tutorial IDs and sourceUrls are unique');
  console.log(`   Checked ${ids.length} IDs and ${sourceUrls.length} sourceUrls`);
}
